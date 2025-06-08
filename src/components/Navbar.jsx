import { useState, useEffect } from 'react';

const handleNavClick = (e, id) => {
  e.preventDefault();
  const container = document.querySelector('.main-scroll');
  const target = document.getElementById(id);
  if (container && target) {
    container.scrollTo({
      top: target.offsetTop - container.offsetTop,
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.main-scroll');
      if (!container) return;
      
      const sections = ['hero', 'resume', 'skills', 'portfolio', 'contact'];
      const scrollPosition = container.scrollTop;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const offsetTop = element.offsetTop - container.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetBottom - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    const container = document.querySelector('.main-scroll');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // 初始检查
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  return (
    <header className="w-full flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between py-4 sm:py-6 px-4 sm:px-8 bg-transparent relative z-20">
      <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
        {/* LOGO */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center">
          <span className="text-white text-xl sm:text-2xl font-signature select-none">ZL</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-bold text-base sm:text-lg text-stone-900 leading-tight">ZhiyingLu</span>
          <span className="text-xs text-stone-500">UX + UI Designer</span>
        </div>
      </div>
      <nav className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-3 sm:gap-8 text-stone-700 font-medium text-xs sm:text-sm mt-3 sm:mt-0 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
        <a href="#hero" onClick={e => handleNavClick(e, 'hero')} className={`hover:text-black transition whitespace-nowrap px-1 py-1 ${activeSection === 'hero' ? 'text-black font-bold' : ''}`}>HI</a>
        <a href="#resume" onClick={e => handleNavClick(e, 'resume')} className={`hover:text-black transition whitespace-nowrap px-1 py-1 ${activeSection === 'resume' ? 'text-black font-bold' : ''}`}>PROFILE</a>
        <a href="#skills" onClick={e => handleNavClick(e, 'skills')} className={`hover:text-black transition whitespace-nowrap px-1 py-1 ${activeSection === 'skills' ? 'text-black font-bold' : ''}`}>SKILLS</a>
        <a href="#portfolio" onClick={e => handleNavClick(e, 'portfolio')} className={`hover:text-black transition whitespace-nowrap px-1 py-1 ${activeSection === 'portfolio' ? 'text-black font-bold' : ''}`}>WORK</a>
        <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className={`hover:text-black transition whitespace-nowrap px-1 py-1 ${activeSection === 'contact' ? 'text-black font-bold' : ''}`}>CONTACT</a>
      </nav>
    </header>
  );
};

export default Navbar; 