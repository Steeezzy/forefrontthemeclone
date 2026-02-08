"use client";

import { Checkbox } from '@/components/ui/checkbox';
import { MoreVertical, Globe, ChevronRight } from 'lucide-react';

export function DataSourcesTable() {
    return (
        <div className="border border-white/5 rounded-xl overflow-hidden bg-[#161920]">

            <div className="px-4 py-3 border-b border-white/5">
                <span className="text-sm font-semibold text-white">Results: 1</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/5">
                            <th className="p-4 w-10">
                                <Checkbox />
                            </th>
                            <th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                            <th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Source</th>
                            <th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Used by</th>
                            <th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Audience</th>
                            <th className="p-4 text-xs font-medium text-slate-500 uppercase tracking-wider">Last updated</th>
                            <th className="p-4 w-10"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr className="group hover:bg-white/5 transition-colors">
                            <td className="p-4">
                                <Checkbox />
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-2 text-white font-medium">
                                    <span>testforefront.myshopify.com</span>
                                    <ChevronRight size={14} className="text-slate-500" />
                                </div>
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-2 text-slate-300 text-sm bg-white/5 px-2 py-1 rounded inline-flex">
                                    <Globe size={14} />
                                    <span>Website</span>
                                </div>
                            </td>
                            <td className="p-4">
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 rounded bg-emerald-900/40 text-emerald-400 text-xs font-medium border border-emerald-900/60 flex items-center gap-1">
                                        ✓ Lyro
                                    </span>
                                    <span className="px-2 py-1 rounded bg-emerald-900/40 text-emerald-400 text-xs font-medium border border-emerald-900/60 flex items-center gap-1">
                                        ✓ Copilot
                                    </span>
                                </div>
                            </td>
                            <td className="p-4">
                                <span className="px-2 py-1 rounded bg-[#27272a] text-slate-300 text-xs font-medium border border-white/5">
                                    Everyone
                                </span>
                            </td>
                            <td className="p-4 text-slate-400 text-sm">
                                Nov 28, 2025, 10:54 AM
                            </td>
                            <td className="p-4 text-right">
                                <button className="p-1 rounded hover:bg-white/10 text-slate-500 hover:text-white transition-colors">
                                    <MoreVertical size={16} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
