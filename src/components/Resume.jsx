import { motion } from 'framer-motion';

const timeline = [
  {
    time: '2020 - 2023',
    title: '字节跳动',
    desc: '高级前端开发工程师，主导多项大型项目。',
  },
  {
    time: '2018 - 2020',
    title: '腾讯',
    desc: '前端开发工程师，参与核心产品研发。',
  },
  {
    time: '2014 - 2018',
    title: '清华大学',
    desc: '计算机科学与技术 本科',
  },
];

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="w-full min-h-screen flex flex-col justify-center items-center my-0 py-0 scroll-snap-start"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.2 }}
    >
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-8 text-stone-900 text-center">履历</h2>
        <ol className="relative border-l-2 border-black">
          {timeline.map((item, idx) => (
            <motion.li
              key={item.time}
              className={`ml-6 relative mb-10 last:mb-0`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <h3 className="font-semibold text-stone-900">{item.time} {item.title}</h3>
              <p className="text-stone-600 text-sm">{item.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
};

export default Resume; 