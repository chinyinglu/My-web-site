import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { cn } from '../lib/utils';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="w-full min-h-screen flex flex-col justify-center items-center text-center pt-12 pb-12 relative z-10 scroll-snap-start"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-stone-400 mb-4 tracking-widest uppercase">Hi there, I am</p>
        <div className="flex justify-center items-center gap-6 mb-6">
          <h1 className="text-6xl md:text-8xl font-extrabold text-stone-700 leading-tight m-0">
            ZhyingLu
          </h1>
          <img
            src="/avatar.JPG"
            alt="avatar"
            className="w-20 h-20 rounded-full border-4 border-stone-200 object-cover shadow"
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-8">
          <span className="font-light">A passionate </span>
          <span className="font-extrabold">UX | UI Designer</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-4 mt-8"
        >
          <a
            href="https://github.com/chinyinglu"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-3 rounded-full border border-stone-300 text-stone-700 bg-white",
              "hover:bg-stone-100 transition-colors"
            )}
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://weibo.com/u/5665818702"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-3 rounded-full border border-stone-300 text-stone-700 bg-white",
              "hover:bg-stone-100 transition-colors"
            )}
            aria-label="新浪微博"
          >
            <svg t="1749367059032" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M720.832 514.85c-11.475-3.485-19.34-5.892-13.34-21.221 12.997-33.307 14.36-62.033 0.26-82.527-26.445-38.447-98.775-36.383-181.661-1.028 0-0.042-26.043 11.592-19.39-9.436 12.754-41.74 10.815-76.676-9.01-96.86-44.967-45.81-164.577 1.738-267.179 106.112-76.81 78.197-121.39 161.083-121.39 232.744 0 137.062 172.674 228.757 341.622 228.757 221.46 0 368.802-139.327 368.802-243.308 0.002-62.843-51.994-98.499-98.714-113.233zM451.204 809.936c-134.813 13.356-251.164-47.883-259.932-136.903-8.75-88.979 93.459-171.99 228.256-185.388C554.35 474.223 670.726 535.511 679.46 624.49c8.726 89.02-93.417 172.04-228.256 185.446z m489.534-406.698c-0.067-138.425-112.29-250.63-250.739-250.63-16.164 0-29.253 13.098-29.253 29.254 0 16.164 13.088 29.253 29.253 29.253 106.171 0 192.233 86.07 192.233 192.233 0 16.165 13.106 29.254 29.253 29.254 16.165 0 29.254-13.088 29.254-29.254l-0.001-0.11z m-116.235-4.296c-13.364-65.267-64.816-116.71-130.092-130.083-15.804-3.25-31.275 6.937-34.518 22.759-3.259 15.821 6.93 31.275 22.734 34.543 42.442 8.692 75.89 42.116 84.574 84.558 3.269 15.822 18.722 26.001 34.544 22.759 15.813-3.269 25.993-18.723 22.758-34.536zM382.06 574.802c-54.31 10.915-90.952 56.457-81.858 101.707 9.085 45.259 60.487 73.09 114.797 62.167 54.293-10.916 90.951-56.442 81.849-101.708-9.078-45.242-60.496-73.082-114.788-62.167z" fill="currentColor"></path></svg>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero; 