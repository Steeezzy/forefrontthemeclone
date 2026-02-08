"use client";

import { LyroSidebar } from '@/components/lyro/LyroSidebar';
import { DataSourcesHeader } from '@/components/lyro/DataSourcesHeader';
import { DataSourcesFilterBar } from '@/components/lyro/DataSourcesFilterBar';
import { DataSourcesTable } from '@/components/lyro/DataSourcesTable';

export default function DataSourcesPage() {
    return (
        <div className="flex h-full bg-[#0f1115]">
            {/* Inner Sidebar */}
            <LyroSidebar />

            <div className="flex-1 h-full overflow-y-auto">
                <div className="max-w-6xl mx-auto p-8 lg:p-10">
                    <DataSourcesHeader />
                    <DataSourcesFilterBar />
                    <DataSourcesTable />
                </div>
            </div>
        </div>
    );
}
