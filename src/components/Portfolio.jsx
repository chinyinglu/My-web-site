import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: '1',
    title: '现代个人网站',
    description: '基于 Vite + React + TailwindCSS + shadcn/ui 的极简包豪斯风格个人主页。',
    tech: ['React', 'TailwindCSS', 'shadcn/ui'],
    link: '#',
  },
  {
    id: '3',
    title: '猫咪品种识别系统',
    description: '基于深度学习的猫咪品种识别应用，能准确区分13种不同猫咪品种。',
    tech: ['Python', 'PyTorch', 'Flask', 'PIL'],
    link: '#',
  },
  {
    id: '4',
    title: '医疗陪诊小程序',
    description: '基于微信小程序原生框架的医疗服务应用，提供医院查询、医生预约、陪诊服务等功能。',
    tech: ['微信小程序', 'WXML/WXSS', 'JavaScript'],
    link: '#',
  },
  {
    id: '5',
    title: '昆明二手房数据可视化',
    description: '从爬虫采集到数据分析与可视化的全流程项目，展现昆明二手房市场多维度分析。',
    tech: ['Python', 'Pandas', 'Matplotlib', 'K-means'],
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      className="w-full min-h-screen flex flex-col justify-start md:justify-center items-center my-0 py-6 md:py-12 scroll-snap-start px-2 lg:max-w-screen-lg lg:mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="w-full max-w-3xl px-2 sm:px-4 mx-auto mt-10 md:mt-0">
        <h2 className="text-2xl font-bold text-stone-900 mb-6 md:mb-8 text-center">个人作品</h2>
        <div className="w-full grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-stone-800 text-center">{proj.title}</h3>
              <p className="text-sm sm:text-base text-stone-600 mb-4 flex-1 text-center">{proj.description}</p>
              <div className="mb-4 flex flex-wrap gap-2 justify-center">
                {proj.tech.map((t, i) => (
                  <span key={i} className="bg-stone-100 text-stone-700 px-2 py-1 rounded text-xs">{t}</span>
                ))}
              </div>
              <div className="mt-auto w-full flex justify-center">
                <Link 
                  to={`/project/${proj.id}`} 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full text-center text-sm transition-colors duration-300"
                >
                  查看详情
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio; 