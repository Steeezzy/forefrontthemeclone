"use client";

import { Search, ChevronDown, Filter } from 'lucide-react';

export function FlowsFilterBar() {
    return (
        <div className="bg-[#18181b] border border-white/5 rounded-t-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white font-bold">1 Flow</div>

            <div className="flex items-center gap-3 flex-wrap">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-9 pl-9 pr-4 rounded-lg bg-[#0f1115] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 w-48"
                    />
                </div>

                {/* Dropdowns */}
                {['Any job', 'Any status', 'Any trigger', 'Newest first'].map((label) => (
                    <button key={label} className="h-9 px-3 rounded-lg bg-[#0f1115] border border-white/10 text-zinc-300 text-sm hover:border-white/20 flex items-center gap-2">
                        {label}
                        <ChevronDown size={14} className="text-zinc-500" />
                    </button>
                ))}

                <button className="h-9 w-9 rounded-lg bg-[#0f1115] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                    <Filter size={16} />
                </button>
            </div>
        </div>
    );
}
