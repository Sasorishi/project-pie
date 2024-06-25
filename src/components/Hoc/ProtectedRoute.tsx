"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                console.log("User is not authenticated, redirecting...");
                router.push('/auth/signin');
            }
        }
    }, [user, loading, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return children;
};

export default ProtectedRoute;
