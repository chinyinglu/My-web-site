import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center scroll-snap-start"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-2xl font-bold text-stone-900 mb-6 text-center">联系我</h2>
      <p className="text-stone-600 mb-8 text-center max-w-md">
        欢迎通过邮箱或社交平台与我取得联系。
      </p>
      <div className="flex flex-col items-center gap-4 mb-8">
        <a href="mailto:your@email.com" className="flex items-center gap-2 text-stone-700 hover:text-blue-600 transition text-lg">
          <Mail className="w-5 h-5" /> chinyinglu99@gmail.com
        </a>
        <div className="flex gap-4 mt-2">
          <a href="#" className={cn("p-3 rounded-full border border-stone-300 text-stone-700 bg-white hover:bg-stone-100 transition-colors")}> <Github className="w-6 h-6" /> </a>
          <a href="#" className={cn("p-3 rounded-full border border-stone-300 text-stone-700 bg-white hover:bg-stone-100 transition-colors")}> <Linkedin className="w-6 h-6" /> </a>
        </div>
      </div>
      <p className="text-xs text-stone-400">© 2024 ZhyingLu. All rights reserved.</p>
    </motion.section>
  );
};

export default Contact; 