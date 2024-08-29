import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Tab1Content } from './pages/Tab1Content';
import { Tab2Content } from './pages/Tab2Content';
import { Tab3Content } from './pages/Tab3Content';

const tabContents = [
  { id: 'tab1', title: '标签 1', path: '/', Component: Tab1Content },
  { id: 'tab2', title: '标签 2', path: '/tab2', Component: Tab2Content },
  { id: 'tab3', title: '标签 3', path: '/tab3', Component: Tab3Content },
];

function App() {
  return (
    <Router>
      <main className="flex min-h-screen">
        <Sidebar tabs={tabContents} />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Tab1Content />} />
            {tabContents.map(({ id, path, Component }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;