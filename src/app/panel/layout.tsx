import { Sidebar } from '@/components/layout/Sidebar';
import { TopBanner } from '@/components/dashboard/TopBanner';

export default function PanelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-[#0f1115]">
            <Sidebar />
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                <TopBanner />
                <main className="flex-1 overflow-y-auto bg-[#0f1115]">
                    {children}
                </main>
            </div>
        </div>
    );
}
