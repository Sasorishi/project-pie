"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { auth, firestore } from '@/firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { openNotificationWithIcon } from '@/components/Notification/NotifAlert';

const ClientComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted');
        setError('');
        setSuccess(false);

        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            openNotificationWithIcon('error', 'Weak Password', 'Password must be at least 8 characters long.');
            console.log('Password too short');
            return;
        }

        try {
            console.log('Attempting to create user');
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created');
            const user = userCredential.user;

            console.log('Setting user document in Firestore');
            await setDoc(doc(firestore, 'users', user.uid), {
                fullName,
                email: user.email,
                createdAt: new Date()
            });
            console.log('User document set in Firestore');

            setSuccess(true);
            console.log('Before notification');
            openNotificationWithIcon('success', 'Registration Successful', 'Your account has been created.');
            console.log('After notification');
            setTimeout(() => {
                console.log('Before redirect');
                router.push('/auth/signin');
                console.log('Redirecting to /auth/signin');
            }, 2000); // Delay for notification to be shown
        } catch (error) {
            setError('Error signing up. Please try again.');
            openNotificationWithIcon('error', 'Registration Error', 'Error signing up. Please try again.');
            console.error("Error signing up:", error);
            console.log('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Name
                </label>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                </label>
                <div className="relative">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                </label>
                <div className="relative">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Re-type Password
                </label>
                <div className="relative">
                    <input
                        type="password"
                        placeholder="Re-enter your password"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
            </div>

            <div className="mb-5">
                <input
                    type="submit"
                    value="Create account"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                />
            </div>

            <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                <span>
                {/* Google Sign Up SVG */}
                </span>
                Sign up with Google
            </button>

            <div className="mt-6 text-center">
                <p>
                    Already have an account?{" "}
                    <Link href="/auth/signin" className="text-primary">
                        Sign in
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default ClientComponent;