'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Inbox, Bot, GitBranch, Users, BarChart3, Settings, User, Blocks } from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Home', href: '/panel/dashboard' },
    { icon: Inbox, label: 'Inbox', href: '/panel/inbox' },
    { icon: Bot, label: 'Chatbot', href: '/panel/chatbot' },
    { icon: GitBranch, label: 'Flows', href: '/panel/flows' },
    { icon: Users, label: 'Customers', href: '/panel/customers' },
    { icon: BarChart3, label: 'Analytics', href: '/panel/analytics' },
    { icon: Blocks, label: 'Integrations', href: '/panel/integrations' },
];

const bottomItems = [
    { icon: Settings, label: 'Settings', href: '/panel/settings' },
    { icon: User, label: 'Profile', href: '/panel/profile' },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-[60px] lg:w-64 border-r border-white/5 bg-[#0f1115] hidden md:flex flex-col h-full transition-all duration-300">
            <div className="h-16 flex items-center px-4 lg:px-6 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white" />
                </div>
                <span className="ml-3 font-bold text-xl text-white hidden lg:block">Forefront</span>
            </div>

            <div className="flex-1 py-6 flex flex-col justify-between">
                <nav className="space-y-1 px-3">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 group",
                                pathname === item.href
                                    ? "bg-blue-600/10 text-blue-500"
                                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon className={cn(
                                "h-5 w-5 flex-shrink-0 transition-colors",
                                pathname === item.href ? "text-blue-500" : "text-slate-400 group-hover:text-white"
                            )} />
                            <span className="ml-3 hidden lg:block">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <nav className="space-y-1 px-3">
                    {bottomItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 group",
                                pathname === item.href
                                    ? "bg-blue-600/10 text-blue-500"
                                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon className={cn(
                                "h-5 w-5 flex-shrink-0 transition-colors",
                                pathname === item.href ? "text-blue-500" : "text-slate-400 group-hover:text-white"
                            )} />
                            <span className="ml-3 hidden lg:block">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
