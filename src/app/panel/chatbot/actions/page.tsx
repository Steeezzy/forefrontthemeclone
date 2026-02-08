"use client";

import { LyroSidebar } from '@/components/lyro/LyroSidebar';
import { ActionsHeader } from '@/components/lyro/ActionsHeader';
import { ActionsTabs } from '@/components/lyro/ActionsTabs';
import { ActionsEmptyState } from '@/components/lyro/ActionsEmptyState';
import { ActionsTemplatesGrid } from '@/components/lyro/ActionsTemplatesGrid';

export default function ActionsPage() {
    return (
        <div className="flex h-full bg-[#0f1115]">
            {/* Inner Sidebar */}
            <LyroSidebar />

            <div className="flex-1 h-full overflow-y-auto">
                <div className="max-w-7xl mx-auto p-8 lg:p-10 flex flex-col min-h-full">
                    <ActionsHeader />
                    <ActionsTabs />
                    <ActionsEmptyState />
                    <ActionsTemplatesGrid />
                </div>
            </div>
        </div>
    );
}
