"use client";

import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1000));

        // precise mock: set a cookie or just redirect for now
        // In a real app, this would set a session token
        document.cookie = "auth_token=mock_token; path=/";

        router.push('/panel/dashboard');
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-sm space-y-4 p-8 border rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold text-center">Login to Forefront Agent</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
                        <input type="password" placeholder="Password" className="w-full p-2 border rounded" required />
                    </div>
                    <Button className="w-full" disabled={isLoading}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                </form>
            </div>
        </div>
    );
}
