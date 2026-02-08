"use client";

import { LyroSidebar } from '@/components/lyro/LyroSidebar';
import { SuggestionsHeader } from '@/components/lyro/SuggestionsHeader';
import { BoostKnowledgeBanner } from '@/components/lyro/BoostKnowledgeBanner';
import { SuggestionsEmptyState } from '@/components/lyro/SuggestionsEmptyState';

export default function SuggestionsPage() {
    return (
        <div className="flex h-full bg-[#0f1115]">
            {/* Inner Sidebar */}
            <LyroSidebar />

            <div className="flex-1 h-full overflow-y-auto">
                <div className="max-w-6xl mx-auto p-8 lg:p-10 flex flex-col h-full">
                    <SuggestionsHeader />
                    <BoostKnowledgeBanner />
                    <SuggestionsEmptyState />
                </div>
            </div>
        </div>
    );
}
