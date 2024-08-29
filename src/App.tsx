import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Tab1Content } from './pages/Tab1Content';
import { Tab2Content } from './pages/Tab2Content';
import { Tab3Content } from './pages/Tab3Content';

const tabContents = [
  { id: 'tab1', title: 'Home', path: '/', Component: Tab1Content },
  { id: 'tab2', title: '标签 2', path: '/tab2', Component: Tab2Content },
  { id: 'tab3', title: '标签 3', path: '/tab3', Component: Tab3Content },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <main className="flex min-h-screen bg-gray-100 ">
        <Sidebar tabs={tabContents} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
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