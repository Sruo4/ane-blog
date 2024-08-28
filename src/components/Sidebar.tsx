import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SidebarProps {
  tabs: { id: string; title: string }[];
}

function Sidebar({ tabs }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-100">
      <TabsList className="flex flex-col h-full space-y-2 p-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
}

export default Sidebar;