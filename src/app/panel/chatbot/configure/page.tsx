"use client";

import { useState } from 'react';
import { LyroSidebar } from '@/components/lyro/LyroSidebar';
import { ConfigureHeader } from '@/components/lyro/configure/ConfigureHeader';
import { AlertBanner } from '@/components/lyro/configure/AlertBanner';
import { MainSettings } from '@/components/lyro/configure/MainSettings';
import { ChannelsSettings } from '@/components/lyro/configure/ChannelsSettings';
import { LanguagesSettings } from '@/components/lyro/configure/LanguagesSettings';
import { IdentitySettings } from '@/components/lyro/configure/IdentitySettings';
import { ContactPropertiesSettings } from '@/components/lyro/configure/ContactPropertiesSettings';
import { HandoffSettings } from '@/components/lyro/configure/HandoffSettings';
import { AudiencesSettings } from '@/components/lyro/configure/AudiencesSettings';
import { CopilotSettings } from '@/components/lyro/configure/CopilotSettings';

export default function ConfigurePage() {
    const [activeTab, setActiveTab] = useState('General');

    return (
        <div className="flex h-full bg-[#0f1115]">
            {/* Inner Sidebar */}
            <LyroSidebar />

            <div className="flex-1 h-full overflow-y-auto">
                <div className="max-w-4xl mx-auto p-8 lg:p-10 pb-20">
                    <ConfigureHeader activeTab={activeTab} onTabChange={setActiveTab} />

                    {activeTab === 'General' && (
                        <>
                            <AlertBanner />
                            <MainSettings />
                            <ChannelsSettings />
                            <LanguagesSettings />
                            <IdentitySettings />
                            <ContactPropertiesSettings />
                        </>
                    )}

                    {activeTab === 'Handoff' && <HandoffSettings />}
                    {activeTab === 'Audiences' && <AudiencesSettings />}
                    {activeTab === 'Copilot' && <CopilotSettings />}

                </div>
            </div>
        </div>
    );
}
