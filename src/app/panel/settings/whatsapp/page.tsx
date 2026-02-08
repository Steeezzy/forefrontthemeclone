"use client";

import { IntegrationLanding } from '@/components/settings/integrations/IntegrationLanding';
import { SettingsSidebar } from '@/components/settings/SettingsSidebar';
import { Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function WhatsAppSettingsPage() {
    const router = useRouter();

    const handleSidebarNav = (tab: string) => {
        if (tab === 'WhatsApp') return;
        if (['Email', 'Facebook', 'Instagram', 'Account'].includes(tab)) {
            router.push(`/panel/settings/${tab.toLowerCase().replace(' ', '-')}`);
        } else {
            router.push('/panel/settings');
        }
    };

    return (
        <div className="flex min-h-screen bg-[#0f1115] overflow-hidden h-screen">
            <div className="h-full overflow-y-auto pt-8 pl-8 pb-8">
                <SettingsSidebar activeTab="WhatsApp" onTabChange={handleSidebarNav} />
            </div>
            <div className="flex-1 overflow-y-auto h-full p-8 relative custom-scrollbar">
                <IntegrationLanding
                    platformName="WhatsApp"
                    icon={Phone} // Using Phone for WhatsApp as per sidebar
                    description="Handle your WhatsApp conversations directly in your Tidio inbox and quickly answer your customers' questions. Less distraction with switching platforms, more productivity."
                    buttonText="Integrate WhatsApp"
                    features={[
                        {
                            icon: Phone, // Replace with appropriate icon map if needed, reusing Phone for now
                            title: "Direct messages",
                            text: "Respond to all messages from customers. Group chat and calls are not available yet."
                        },
                        {
                            icon: require('lucide-react').Clock, // Dynamic require just to be safe or use imported
                            title: "Reply window",
                            text: "You have 24 hours to reply to messages from your customers."
                        },
                        {
                            icon: require('lucide-react').GitBranch,
                            title: "Flows",
                            text: "Boost your productivity by using Flows to automate repetitive conversations."
                        }
                    ]}
                />
            </div>
        </div>
    );
}
