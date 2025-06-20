
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const roadmapItems = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'CodingGita x Rai University',
    duration: '2024 - 2028',
    description:
      'Pursuing a Bachelor of Computer Science at Rai University, focusing on core concepts like programming, data structures, and software development. ',
    achievements: ['Learner'],
    icon: <GraduationCap className="w-5 h-5 text-[#ff4ecd]" />,
  },
  {
    degree: 'Complete School Education',
    institution: 'Atomic Energy Central School, Kakrapar',
    duration: '2011 - 2024',
    description:
      'Completed entire schooling at AECS Kakrapar, with a Science focus in HSC. Developed strong logical and analytical skills throughout academic years.',
    achievements: ['12th: 79%', '10th: 86%'],
    icon: <BookOpen className="w-5 h-5 text-[#ff4ecd]" />,
  },
];

const EducationRoadmap = () => {
  return (
    <section className="py-20 bg-[#0e0517] px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4ecd] to-[#6a5af9] mb-12"

        >

          My Education Journey
        </motion.h2>

        <div className="relative border-l-2 border-[#ff4ecd]/30 ml-6 space-y-10 ">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 group"
            >
              <div className="absolute left-[-7px] top-1.5 w-3 h-3 -mt-2 bg-[#ff4ecd] rounded-full animate-pulse"></div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="bg-white/5 backdrop-blur-md p-5 rounded-lg border border-white/10 transition-all duration-300 group-hover:shadow-lg"
              >
                <div className="flex items-center gap-3 text-white mb-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-1">{item.institution}</p>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  {item.duration}
                </div>
                <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  {item.achievements.map((ach, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#ff4ecd]" /> {ach}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationRoadmap;
