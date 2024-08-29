import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  tabs: { id: string; title: string; path: string }[];
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

function Sidebar({ tabs, isDarkMode, setIsDarkMode }: SidebarProps) {
  return (
    <div className="w-64 min-h-screen bg-gray-100 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold p-4">Title_Ane</h1>
        <Tabs>
          <TabsList className="flex flex-col mt-10 space-y-2 p-2">
            {tabs.map((tab) => (
              <Link key={tab.id} to={tab.path} className="w-full">
                <TabsTrigger value={tab.id} className="w-full">
                  {tab.title}
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <Button onClick={() => setIsDarkMode(!isDarkMode)} className="m-4">
        切换到{isDarkMode ? '亮色模式' : '暗色模式'}
      </Button>
    </div>
  );
}

export default Sidebar;
