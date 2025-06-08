import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'

const MainContent = () => {
  const location = useLocation();
  
  // 判断是否为详情页
  const isDetailPage = location.pathname.includes('/project/');
  
  return (
    <div className="min-h-screen w-full bg-stone-50">
      {!isDetailPage && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
      <div className="main-scroll w-full max-w-6xl mx-auto px-6 overflow-y-auto h-screen scroll-snap-y">
        <Hero />
        <Resume />
              <Skills />
        <Portfolio />
        <Contact />
      </div>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App
