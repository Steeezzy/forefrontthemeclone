"use client";

import { FlowsSidebar } from '@/components/flows/FlowsSidebar';
import { FlowsHeader } from '@/components/flows/FlowsHeader';
import { FlowsStats } from '@/components/flows/FlowsStats';
import { FlowsFilterBar } from '@/components/flows/FlowsFilterBar';
import { FlowsList } from '@/components/flows/FlowsList';
import { FlowsFAB } from '@/components/flows/FlowsFAB';

export default function MyFlowsPage() {
    return (
        <div className="flex h-full bg-[#0f1115]">
            <FlowsSidebar />

            <div className="flex-1 h-full overflow-y-auto relative">
                <div className="p-8 lg:p-10 pb-32 max-w-[1600px] mx-auto">
                    <FlowsHeader />
                    <FlowsStats />

                    <div className="mt-8">
                        <FlowsFilterBar />
                        <FlowsList />
                    </div>
                </div>

                <FlowsFAB />
            </div>
        </div>
    );
}
