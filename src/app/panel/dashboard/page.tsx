"use client";

import { DashboardHeader } from '@/components/dashboard/Header';
import { SetupWizard } from '@/components/dashboard/SetupWizard';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { PerformanceChart } from '@/components/dashboard/PerformanceChart';
import { RightSidebar } from '@/components/dashboard/RightSidebar';

export default function DashboardPage() {
    return (
        <div className="p-6 lg:p-10 max-w-[1600px] mx-auto">
            <DashboardHeader />

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* Main Content Column */}
                <div className="xl:col-span-3">
                    <SetupWizard />
                    <QuickActions />
                    <PerformanceChart />
                </div>

                {/* Right Sidebar Column */}
                <div className="xl:col-span-1">
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
}
