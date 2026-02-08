"use client";

import { Info, Activity, MoreVertical, Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

export function FlowsList() {
    return (
        <div className="bg-[#18181b] border-x border-b border-white/5 rounded-b-xl overflow-hidden min-h-[400px]">
            {/* Header */}
            <div className="grid grid-cols-12 px-6 py-4 border-b border-white/5 bg-[#1f2229]">
                <div className="col-span-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</div>
                <div className="col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Executed ?</div>
                <div className="col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Engagement ?</div>
                <div className="col-span-2 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Active</div>
            </div>

            {/* List Item */}
            <div className="grid grid-cols-12 px-6 py-4 hover:bg-[#1e2025] transition-colors items-center border-b border-white/5 last:border-0 group">
                <div className="col-span-6">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-semibold">Proactive Welcome Message</span>
                        <div className="bg-blue-500/20 rounded-full p-0.5">
                            <Check size={10} className="text-blue-400" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                        <Info size={12} className="text-zinc-500" />
                        <span>Enable the full potential of sales flows strategy - </span>
                        <a href="#" className="text-blue-500 hover:underline">Add next Flow</a>
                    </div>
                </div>

                <div className="col-span-4 text-center text-zinc-500 text-sm italic pr-8">
                    We're collecting data, come back later...
                </div>

                <div className="col-span-2 flex items-center justify-end gap-4">
                    <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                    <button className="text-zinc-500 hover:text-white transition-colors">
                        <Activity size={18} />
                    </button>
                    <button className="text-zinc-500 hover:text-white transition-colors">
                        <MoreVertical size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
