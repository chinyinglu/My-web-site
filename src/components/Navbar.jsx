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
  return (
    <header className="w-full flex items-center justify-between py-6 px-8 bg-transparent relative z-20">
      <div className="flex items-center gap-4">
        {/* LOGO */}
        <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
          <span className="text-white text-2xl font-signature select-none">ZL</span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-bold text-lg text-stone-900 leading-tight">ZhiyingLu</span>
          <span className="text-xs text-stone-500">UX + UI Designer</span>
        </div>
      </div>
      <nav className="flex items-center gap-8 text-stone-700 font-medium text-sm">
        <a href="#hero" onClick={e => handleNavClick(e, 'hero')} className="hover:text-black transition">HI</a>
        <a href="#resume" onClick={e => handleNavClick(e, 'resume')} className="hover:text-black transition">PROFILE</a>
        <a href="#portfolio" onClick={e => handleNavClick(e, 'portfolio')} className="hover:text-black transition">WORK</a>
        <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="hover:text-black transition">CONTACT</a>
      </nav>
    </header>
  );
};

export default Navbar; 