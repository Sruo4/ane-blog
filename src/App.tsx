import { Tabs, TabsContent } from "@/components/ui/tabs"
import Sidebar from './components/Sidebar';
import { Tab1Content } from './pages/Tab1Content';
import { Tab2Content } from './pages/Tab2Content';
import { Tab3Content } from './pages/Tab3Content';

const tabContents = [
  { id: 'tab1', title: '标签 1', Component: Tab1Content },
  { id: 'tab2', title: '标签 2', Component: Tab2Content },
  { id: 'tab3', title: '标签 3', Component: Tab3Content },
];

function App() {
  return (
    <main className="flex min-h-screen">
      <Tabs defaultValue="tab1" orientation="vertical" className="flex w-full">
        <Sidebar tabs={tabContents} />
        <div className="flex-1 p-4">
          {tabContents.map(({ id, Component }) => (
            <TabsContent key={id} value={id}>
              <Component />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </main>
  );
}

export default App;