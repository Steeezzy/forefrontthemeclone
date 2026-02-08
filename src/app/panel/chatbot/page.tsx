"use client";

import { LyroSidebar } from '@/components/lyro/LyroSidebar';
import { AlertBanner } from '@/components/lyro/AlertBanner';
import { HubSetupCard } from '@/components/lyro/HubSetupCard';
import { PerformanceSection } from '@/components/lyro/PerformanceSection';
import { KnowledgeSection } from '@/components/lyro/KnowledgeSection';

export default function LyroHubPage() {
    return (
        <div className="flex h-full bg-[#0f1115]">
            {/* Inner Sidebar */}
            <LyroSidebar />

            <div className="flex-1 h-full overflow-y-auto">
                <div className="max-w-5xl mx-auto p-8 lg:p-10">
                    <AlertBanner />
                    <HubSetupCard />
                    <PerformanceSection />
                    <KnowledgeSection />
                </div>
            </div>
        </div>
    );
}
