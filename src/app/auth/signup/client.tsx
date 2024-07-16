'use client';

import { openNotificationWithIcon } from '@/components/Notification/NotifAlert';
import { auth, firestore } from '@/firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ClientComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      openNotificationWithIcon(
        'error',
        'Weak Password',
        'Password must be at least 8 characters long.',
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await setDoc(doc(firestore, 'users', user.uid), {
        fullName,
        email: user.email,
        createdAt: new Date(),
      });

      setSuccess(true);
      openNotificationWithIcon(
        'success',
        'Registration Successful',
        'Your account has been created.',
      );
      setTimeout(() => {
        router.push('/auth/signin');
      }, 2000); // Delay for notification to be shown
    } catch (error) {
      setError('Error signing up. Please try again.');
      openNotificationWithIcon(
        'error',
        'Registration Error',
        'Error signing up. Please try again.',
      );
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Nom
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Entrer votre nom complet"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Mail
        </label>
        <div className="relative">
          <input
            type="email"
            placeholder="Entrer votre mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Mot de passe
        </label>
        <div className="relative">
          <input
            type="password"
            placeholder="Entrer votre mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          Resaisir le mot de passe
        </label>
        <div className="relative">
          <input
            type="password"
            placeholder="Resaisir le mot de passe"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-5">
        <input
          type="submit"
          value="Créer"
          className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
        />
      </div>

      <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
        <span>{/* Google Sign Up SVG */}</span>
        Se connecter avec Google
      </button>

      <div className="mt-6 text-center">
        <p>
          Vous avez déjà un compte?{' '}
          <Link href="/auth/signin" className="text-primary">
            Se connecter
          </Link>
        </p>
      </div>
    </form>
  );
};

export default ClientComponent;
