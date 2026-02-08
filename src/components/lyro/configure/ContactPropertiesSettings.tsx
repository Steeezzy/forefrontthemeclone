"use client";

import { Info } from 'lucide-react';

export function ContactPropertiesSettings() {
    return (
        <div className="bg-[#18181b] border border-white/5 rounded-xl p-6 mb-6">
            <div className="mb-6">
                <h3 className="text-white font-semibold mb-1">Contact Properties</h3>
                <p className="text-slate-400 text-sm">
                    The AI Agent uses selected contact properties to personalize responses, gather context, and resolve issues faster. By default, it always has access to the contact's name, email address, and current URL.
                </p>
            </div>

            <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-white w-32">Available to Lyro</span>
                    <input
                        type="text"
                        placeholder="Select properties"
                        className="flex-1 h-10 px-3 rounded-lg bg-[#0f1115] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50"
                    />
                </div>
                <button className="text-blue-500 text-sm font-medium hover:underline ml-36">Manage</button>

                <div className="flex items-start gap-2 pt-2">
                    <Info size={16} className="text-slate-500 mt-0.5" />
                    <p className="text-xs text-slate-500">Please note: Selected properties may be referenced in replies to customers. Share only what's necessary</p>
                </div>
            </div>
        </div>
    );
}
