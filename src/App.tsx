import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { Tab3Content } from './pages/Tab3Content';

const tabContents = [
  { id: 'tab1', title: 'Home', path: '/', Component: HomePage },
  { id: 'tab2', title: 'About', path: '/about', Component: AboutPage },
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

  useEffect(() => {
    // 禁止页面整体滚动
    document.body.style.overflow = 'hidden';
    return () => {
      // 组件卸载时恢复滚动
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Router>
      <main className="flex min-h-screen bg-gray-100 ">
        <Sidebar tabs={tabContents} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <div className="flex-1 pr-4 pt-4 pb-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
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