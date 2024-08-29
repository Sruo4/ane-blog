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
    <div className="w-64 min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold p-4">Title_Ane</h1>
        <Tabs defaultValue="tab1">
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
      <div className="mb-10 ml-2 mr-2"> {/* 添加外边距 */}
        <Button onClick={() => setIsDarkMode(!isDarkMode)} className="w-full">
          切换到{isDarkMode ? '亮色模式' : '暗色模式'}
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
