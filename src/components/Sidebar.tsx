import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/mainLogo.svg";

interface SidebarProps {
  tabs: { id: string; title: string; path: string }[];
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

function Sidebar({ tabs, isDarkMode, setIsDarkMode }: SidebarProps) {
  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0]?.id || "");

  return (
    <div className="w-[15.5rem] min-h-screen p-2 ">
      <div className="w-full h-full flex flex-col">
        <div className="w-32 h-15">
          <img src={Logo} alt="Logo" className="w-full h-full" />
        </div>

        <Tabs defaultValue={selectedTabId} className="m-0">
          <TabsList className="flex flex-col space-y-2 h-full">
            {tabs.map((tab) => (
              <Link key={tab.id} to={tab.path} className="w-full">
                <TabsTrigger
                  value={tab.id}
                  className="w-full rounded-lg"
                  style={
                    tab.id === selectedTabId
                      ? { boxShadow: "#0000000d 0px 3px 3px 0px" }
                      : {}
                  }
                  onClick={() => setSelectedTabId(tab.id)}
                >
                  {tab.title}
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
        </Tabs>

        <div className="mt-auto">
          <Button onClick={() => setIsDarkMode(!isDarkMode)} className="w-full">
            切换到{isDarkMode ? "亮色模式" : "暗色模式"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
