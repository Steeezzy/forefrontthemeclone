"use client";

import { cn } from '@/lib/utils';

interface IntegrationsSidebarProps {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const categories = [
    "All integrations",
    "BI & analytics",
    "Communication channels",
    "CRM",
    "E-commerce",
    "Marketing automation",
    "Rating & reviews",
    "Customer support"
];

export function IntegrationsSidebar({ selectedCategory, onSelectCategory }: IntegrationsSidebarProps) {
    return (
        <div className="w-64 flex-shrink-0 hidden md:block pr-8">
            <h3 className="text-zinc-500 text-xs uppercase font-bold mb-4 px-3">Categories</h3>
            <div className="space-y-1">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                            selectedCategory === category
                                ? "bg-blue-500/10 text-blue-400"
                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
