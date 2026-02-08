"use client";

import { MessageSquare, Ticket, Bot, GitBranch, Users } from 'lucide-react';

const actions = [
    {
        title: "Live conversations",
        subtitle: "0 unassigned",
        icon: MessageSquare,
        color: "text-blue-500",
        href: "#"
    },
    {
        title: "Tickets",
        subtitle: "0 unassigned",
        icon: Ticket,
        color: "text-purple-500",
        href: "#"
    },
    {
        title: "Forefront Agent",
        subtitle: "0 unanswered questions",
        icon: Bot,
        color: "text-emerald-500",
        href: "#"
    },
    {
        title: "Flows",
        subtitle: "1 active Flow",
        icon: GitBranch,
        color: "text-orange-500",
        href: "#"
    }
];

export function QuickActions() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {actions.map((action, idx) => (
                <div
                    key={idx}
                    className="bg-[#161920] border border-white/5 rounded-xl p-5 hover:bg-[#1c1f26] transition-all duration-200 cursor-pointer group"
                >
                    <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg bg-white/5 ${action.color} group-hover:scale-110 transition-transform`}>
                            <action.icon size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-medium mb-1">{action.title}</h4>
                            <p className="text-slate-400 text-sm">{action.subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
