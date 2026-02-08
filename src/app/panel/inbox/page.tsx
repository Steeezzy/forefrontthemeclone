"use client";

import { InboxSidebar } from '@/components/inbox/InboxSidebar';
import { InboxTopNav } from '@/components/inbox/InboxTopNav';
import { InboxEmptyState } from '@/components/inbox/InboxEmptyState';
import { IntegrationGrid } from '@/components/inbox/IntegrationGrid';

export default function InboxPage() {
    return (
        <div className="flex h-full bg-[#0f1115]">
            {/* Inner Sidebar */}
            <InboxSidebar />

            <div className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Top Interaction Bar */}
                <InboxTopNav />

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-8 lg:p-12">
                    <div className="max-w-5xl mx-auto">
                        <InboxEmptyState />
                        <IntegrationGrid />
                    </div>
                </main>
            </div>
        </div>
    );
}
