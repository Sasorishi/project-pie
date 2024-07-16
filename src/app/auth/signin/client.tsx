// src/app/auth/signin/ClientSignIn.tsx
'use client';

import { openNotificationWithIcon } from '@/components/Notification/NotifAlert';
import { auth } from '@/firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ClientSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      openNotificationWithIcon(
        'success',
        'Connexion réussie',
        'Vous êtes maintenant connecté.',
      );
      router.push('/dashboard'); // Rediriger vers le tableau de bord ou la page d'accueil
    } catch (error) {
      setError(
        'Failed to sign in. Please check your email and password and try again.',
      );
      openNotificationWithIcon(
        'error',
        'Erreur de connexion',
        'Email ou mot de passe incorrect.',
      );
    }
  };

  return (
    <form onSubmit={handleSignIn}>
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
          <span className="absolute right-4 top-4">{/* SVG Icon */}</span>
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
          <span className="absolute right-4 top-4">{/* SVG Icon */}</span>
        </div>
      </div>
      <div className="mb-5">
        <input
          type="submit"
          value="Se connecter"
          className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
        />
      </div>
    </form>
  );
};

export default ClientSignIn;
