
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Rocket, Coffee } from 'lucide-react';
import { Tilt } from 'react-tilt';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-[#ff3399]" />,
      title: 'Frontend Development',
      description: 'Pixel-perfect interfaces with a passion for user experience.',
    },
    {
      icon: <Brain className="w-6 h-6 text-[#00ffcc]" />,
      title: 'Creative Problem Solving',
      description: 'Turning complexity into simple, elegant solutions.',
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#ff3399]" />,
      title: 'Always Leveling Up',
      description: 'Consistently learning and building with the latest tech.',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="py-24 bg-[#0e0517]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4ecd] to-[#6a5af9] mb-12"
        >
          Who Am I?
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={1}
          className="text-center text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-16"
        >
          I’m <span className="text-[#ff3399] font-semibold">Homasvi Kaneria</span>, a Full Stack developer obsessed with clean design, smooth user experiences, and purposeful code. I enjoy making interfaces feel intuitive, fast, and polished — like digital art you can interact with. My style blends technical precision with aesthetic simplicity.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <Tilt key={i} options={{ scale: 1.05, max: 15 }}>
              <motion.div
                custom={i + 2}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeUp}
                className="bg-[#1a1a2e]/60 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:shadow-[0_0_20px_#ff3399] transition duration-300"
              >
                <div className="mb-4 mx-auto w-fit bg-[#151525] p-3 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={highlights.length + 2}
          className="mt-20 bg-[#18122B]/80 border border-[#ff3399]/30 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto text-white shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <Coffee className="w-5 h-5 text-[#00ffcc]" />
            <h4 className="text-xl font-semibold">Fun Facts</h4>
          </div>
          <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
            <li>Design-focused, but love solving backend puzzles too.</li>
            <li>Hackathon regular — team player & idea machine.</li>
            <li>Badminton clears my head. Sketching sharpens it.</li>
            <li>Most inspired after midnight (and with matcha).</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
