"use client";

import { LyroSidebar } from '@/components/lyro/LyroSidebar';
import { ProductsHeader } from '@/components/lyro/ProductsHeader';
import { ProductsEmptyState } from '@/components/lyro/ProductsEmptyState';

export default function ProductsPage() {
    return (
        <div className="flex h-full bg-[#0f1115]">
            {/* Inner Sidebar */}
            <LyroSidebar />

            <div className="flex-1 h-full overflow-y-auto">
                <div className="max-w-6xl mx-auto p-8 lg:p-10">
                    <ProductsHeader />
                    <ProductsEmptyState />
                </div>
            </div>
        </div>
    );
}
