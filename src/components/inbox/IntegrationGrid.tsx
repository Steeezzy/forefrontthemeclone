"use client";

import { MessageCircle, Instagram, Facebook, Mail, MessageSquare } from 'lucide-react';

const integrations = [
    {
        title: "WhatsApp",
        description: "Integrate with WhatsApp and stay connected with your customers.",
        icon: MessageCircle,
        color: "text-emerald-500",
        action: "Integrate",
        href: "#"
    },
    {
        title: "Instagram",
        description: "Keep in touch with your Instagram customers.",
        icon: Instagram,
        color: "text-pink-500",
        action: "Integrate",
        href: "#"
    },
    {
        title: "Facebook Messenger",
        description: "Do it now and start responding to queries from Messenger.",
        icon: Facebook,
        color: "text-blue-500",
        action: "Integrate",
        href: "#"
    },
    {
        title: "Forefront widget",
        description: "Install widget and start supporting customers on your website.",
        icon: MessageSquare,
        color: "text-blue-400",
        action: "Install Chat Widget",
        href: "#"
    },
    {
        title: "Email",
        description: "Connect your mailbox and receive or send emails from the app.",
        icon: Mail,
        color: "text-purple-400",
        action: "Add email",
        href: "#"
    }
];

export function IntegrationGrid() {
    return (
        <div className="mt-12">
            <p className="text-slate-400 text-sm mb-6">You can also integrate Forefront with other apps to keep everything in one place!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {integrations.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-[#161920] border border-white/5 rounded-xl p-5 flex flex-col items-start hover:bg-[#1c1f26] transition-colors"
                    >
                        <item.icon className={`w-6 h-6 mb-3 ${item.color}`} />
                        <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-1">{item.description}</p>
                        <a href={item.href} className="text-blue-500 text-sm font-medium hover:underline">
                            {item.action}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
