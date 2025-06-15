import { motion } from 'framer-motion';

const timeline = [
  {
    time: '2021年11月',
    title: '第七届"互联网+"大学生创新创业大赛省赛"铜奖"',
    desc: '获得省级创新创业大赛奖项',
  },
  {
    time: '2019年09月 - 2023年06月',
    title: '西南林业大学',
    desc: '数据科学与大数据技术 本科 大数据与智能工程学院',
  },
];

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="w-full min-h-screen flex flex-col justify-start md:justify-center items-center py-6 md:py-12 scroll-snap-start px-2 lg:max-w-screen-lg lg:mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="w-full max-w-3xl px-2 sm:px-4 mx-auto mt-10 md:mt-0">
        <h2 className="text-2xl font-bold mb-6 md:mb-8 text-stone-900 text-center">履历</h2>
        <ol className="relative border-l-2 border-black">
          {timeline.map((item, idx) => (
            <motion.li
              key={item.time}
              className={`ml-6 relative mb-6 md:mb-10 last:mb-0`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-stone-900 border-4 border-white"></div>
              <h3 className="font-semibold text-stone-900 text-lg">{item.time}</h3>
              <h4 className="font-bold text-stone-800 mb-2">{item.title}</h4>
              <p className="text-stone-600">{item.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
};

export default Resume; 