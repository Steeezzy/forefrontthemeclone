"use client";

import { Switch } from '@/components/ui/switch';
import { ChevronDown } from 'lucide-react';

export function MainSettings() {
    return (
        <div className="bg-[#18181b] border border-white/5 rounded-xl p-6 mb-6">
            <h3 className="text-white font-semibold mb-6">Main</h3>

            <div className="space-y-6">
                {/* Activate */}
                <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Activate</span>
                    <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                </div>

                {/* Lyro responds */}
                <div className="flex items-center justify-between">
                    <span className="text-white text-sm">Lyro responds</span>
                    <div className="relative w-64">
                        <select className="w-full h-9 pl-3 pr-8 rounded-lg bg-[#0f1115] border border-white/10 text-white text-sm appearance-none focus:outline-none focus:border-blue-500/50">
                            <option>Always</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                    </div>
                </div>

                {/* Usage Bar */}
                <div className="bg-[#0f1115] rounded-lg p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 rounded-full border-2 border-blue-600"></div>
                        <span className="text-white text-sm">0 out of 50 Lyro conversations limit used.</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 w-[1%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
