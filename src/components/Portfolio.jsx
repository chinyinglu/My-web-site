import { motion } from 'framer-motion';

const projects = [
  {
    title: '现代个人网站',
    description: '基于 Vite + React + TailwindCSS + shadcn/ui 的极简包豪斯风格个人主页。',
    tech: ['React', 'TailwindCSS', 'shadcn/ui'],
    link: '#',
  },
  {
    title: 'UI 组件库',
    description: '自研高可用 UI 组件库，支持主题切换与响应式设计。',
    tech: ['TypeScript', 'Storybook', 'CSS-in-JS'],
    link: '#',
  },
  {
    title: '数据可视化平台',
    description: '企业级数据可视化大屏，支持多种图表与实时数据流。',
    tech: ['React', 'D3.js', 'WebSocket'],
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      className="w-full min-h-screen flex flex-col justify-center items-center my-0 py-0 scroll-snap-start"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">个人作品</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2 text-stone-800 text-center">{proj.title}</h3>
            <p className="text-stone-600 mb-4 flex-1 text-center">{proj.description}</p>
            <div className="mb-4 flex flex-wrap gap-2 justify-center">
              {proj.tech.map((t, i) => (
                <span key={i} className="bg-stone-100 text-stone-700 px-2 py-1 rounded text-xs">{t}</span>
              ))}
            </div>
            <a href={proj.link} className="mt-auto text-blue-600 hover:underline text-sm font-medium">查看项目</a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio; 