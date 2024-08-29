import { TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SidebarProps {
  tabs: { id: string; title: string }[];
}

function Sidebar({ tabs }: SidebarProps) {
  return (
    <div className="w-64 min-h-screen bg-gray-100">
      <div className="">
        <h1 className="text-4xl font-bold p-4">Title_Ane</h1>
      </div>
      <TabsList className="flex flex-col mt-10 space-y-2 p-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="w-full">
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
}

export default Sidebar;