import { motion } from 'framer-motion';

const skills = [
  {
    category: '技术能力',
    items: [
      'React', 'TailwindCSS', 'shadcn/ui', '前端开发', '响应式设计', 'UI/UX设计', '动效实现', '无障碍设计',
      'Python', 'PyTorch', 'Flask', 'PIL', '深度学习', '图像识别', 'Web后端开发',
      '微信小程序开发', 'WXML/WXSS', 'JavaScript', '移动端开发', '服务设计',
      '数据爬虫', 'Pandas', 'Matplotlib', 'K-means聚类', '数据可视化', '数据分析', '聚类分析',
      'SQL Server', '数据仓库', '数据挖掘', 'eCognition（遥感影像处理）', 'Stable Diffusion（AI图像生成）',
      'GitHub', '知识库系统搭建（Notion、Obsidian）', 'agent技术', 'LaTeX（科技文档排版）',
      'Photoshop', '沟通能力', '文案撰写', '摄影'
    ]
  }
];

// 容器动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2
    }
  }
};

// 标签动画变体
const tagVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10 
    }
  },
  hover: { 
    scale: 1.05,
    backgroundColor: "#f3f4f6",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    transition: { duration: 0.2 }
  }
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="w-full min-h-screen flex flex-col justify-start md:justify-center items-center py-6 md:py-12 scroll-snap-start px-2 lg:max-w-screen-lg lg:mx-auto skills-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="w-full max-w-3xl px-2 sm:px-4 mx-auto mt-10 md:mt-0 pb-20">
        <motion.h2 
          className="text-2xl font-bold mb-6 md:mb-8 text-stone-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          技能
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={skillGroup.category}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-stone-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <motion.h3 
                className="text-lg font-bold text-stone-800 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {skillGroup.category}
              </motion.h3>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {skillGroup.items.map(skill => (
                  <motion.span 
                    key={skill} 
                    className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm cursor-default"
                    variants={tagVariants}
                    whileHover="hover"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills; 