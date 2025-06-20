
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Code2, Brain, Rocket } from 'lucide-react';
// import { Tilt } from 'react-tilt';

// const Summary = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const highlights = [
//     {
//       icon: <Code2 className="w-8 h-8 text-[#ff4ecd]" />,
//       title: 'Frontend Development',
//       description: 'Building responsive and user-friendly interfaces with modern tools.',
//     },
//     {
//       icon: <Brain className="w-8 h-8 text-[#ff4ecd]" />,
//       title: 'Problem Solving',
//       description: 'Able to think through complex issues and provide practical solutions.',
//     },
//     {
//       icon: <Rocket className="w-8 h-8 text-[#ff4ecd]" />,
//       title: 'Learning Oriented',
//       description: 'Enjoys exploring new technologies and development patterns.',
//     },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.5,
//       },
//     }),
//   };

//   return (
//     <section ref={ref} className="py-20 bg-gradient-to-b from-[#0e0e10] via-[#1a1a2e] to-[#3f0d70]">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4ecd] to-[#6a5af9] mb-4">
//             What I Do
//           </h2>
//           <p className="text-gray-300 text-lg">
//             I like working on web-based projects and learning new ways to improve what I build.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {highlights.map((item, i) => (
//             <Tilt key={i} options={{ max: 15, scale: 1.05 }}>
//               <motion.div
//                 custom={i}
//                 initial="hidden"
//                 animate={inView ? 'visible' : 'hidden'}
//                 variants={cardVariants}
//                 className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
//                            hover:neon-border transition-all duration-300 flex flex-col items-center
//                            transform-gpu hover:-translate-y-1"
//               >
//                 <div className="mb-4 p-3 rounded-full bg-gray-800/50">{item.icon}</div>
//                 <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
//                 <p className="text-gray-300 text-center">{item.description}</p>
//               </motion.div>
//             </Tilt>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Summary;
