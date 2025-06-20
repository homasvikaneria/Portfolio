
import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiFigma, SiMui, SiNextdotjs, SiDocker, SiRedis,
} from 'react-icons/si';

const levels = [
  [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  ],
  [
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  ],
  [
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-300" /> },
  ],
  [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
  ],
  [
    { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'Figma', icon: <SiFigma className="text-pink-400" /> },
    { name: 'Material UI', icon: <SiMui className="text-indigo-300" /> },
  ],
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0e0517] text-white py-16 px-4 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <style>{`
        @keyframes matrixScroll {
          0% { background-position: 0 0; }
          100% { background-position: 0 20px; }
        }
      `}</style>

      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: 'radial-gradient(#00fff7 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          animation: 'matrixScroll 0.6s linear infinite',
        }}
      />

      {/* Heading */}
      <div className="text-center mb-8 z-10">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-base tracking-widest text-white/60 mr-2">THE</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4ecd] to-[#6a5af9] decoration-[#6a5af9]">
            Skills
          </span>
          <span className="text-base tracking-widest text-white/60 ml-2">BEHIND THE MAGIC</span>
        </h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto text-lg mt-4">
          I enjoy creating beautiful, intuitive, and performant web applications with cutting-edge technologies.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-col gap-14 w-full max-w-4xl z-10">
        {levels.map((level, levelIndex) => (
          <div
            key={levelIndex}
            className={`relative flex justify-center gap-6 transition-all duration-300 ${
              levelIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {level.map((skill, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center justify-center p-4 bg-[#1a1d29] border border-white/10 rounded-2xl w-24 h-24 transition-transform duration-300 hover:scale-110 hover:shadow-cyan-500/20"
              >
                <div className="text-2xl mb-2 transition-transform duration-500 group-hover:scale-125">
                  {skill.icon}
                </div>
                <span className="text-xs text-center">{skill.name}</span>

                {/* Vertical line */}
                {levelIndex !== 0 && (
                  <span className="absolute w-px h-10 bg-gray-700 bottom-full left-1/2 transform -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
