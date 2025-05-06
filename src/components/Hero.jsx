import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
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
            href="#"
            className={cn(
              "p-3 rounded-full border border-stone-300 text-stone-700 bg-white",
              "hover:bg-stone-100 transition-colors"
            )}
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className={cn(
              "p-3 rounded-full border border-stone-300 text-stone-700 bg-white",
              "hover:bg-stone-100 transition-colors"
            )}
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className={cn(
              "p-3 rounded-full border border-stone-300 text-stone-700 bg-white",
              "hover:bg-stone-100 transition-colors"
            )}
          >
            <Twitter className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero; 