"use client";

import { IntegrationLanding } from '@/components/settings/integrations/IntegrationLanding';
import { SettingsSidebar } from '@/components/settings/SettingsSidebar';
import { Instagram } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function InstagramSettingsPage() {
    const router = useRouter();

    const handleSidebarNav = (tab: string) => {
        if (tab === 'Instagram') return;
        if (['Email', 'Facebook', 'WhatsApp', 'Account'].includes(tab)) {
            router.push(`/panel/settings/${tab.toLowerCase().replace(' ', '-')}`);
        } else {
            router.push('/panel/settings');
        }
    };

    return (
        <div className="flex min-h-screen bg-[#0f1115] overflow-hidden h-screen">
            <div className="h-full overflow-y-auto pt-8 pl-8 pb-8">
                <SettingsSidebar activeTab="Instagram" onTabChange={handleSidebarNav} />
            </div>
            <div className="flex-1 overflow-y-auto h-full p-8 relative custom-scrollbar">
                <IntegrationLanding
                    platformName="Instagram"
                    icon={Instagram}
                    description="Manage your Instagram direct messages and comments directly from your Tidio inbox to respond to customer questions quickly. Fewer distractions from switching platforms, more productivity for you."
                    buttonText="Integrate Instagram"
                />
            </div>
        </div>
    );
}
