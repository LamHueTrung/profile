import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SideBar from '../partials/sidebar';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDatabase,
  faPaintBrush,
  faCogs,
  faSitemap,
  faLaptopCode,
  faServer,
} from '@fortawesome/free-solid-svg-icons';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 },
  },
};

function Skills() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const skillGroups = [
    {
      title: 'Front-end Development',
      icon: faLaptopCode,
      color: 'from-purple-600 to-indigo-500',
      skills: [
        { name: 'ReactJS', level: 100 },
        { name: 'Vue', level: 70 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'Bootstrap', level: 90 },
        { name: 'Tailwind CSS', level: 80 },
      ],
    },
    {
      title: 'Back-end Development',
      icon: faServer,
      color: 'from-indigo-600 to-purple-600',
      skills: [
        { name: 'NodeJS', level: 100 },
        { name: 'Laravel', level: 95 },
        { name: '.NET', level: 90 },
        { name: 'CodeIgniter', level: 60 },
      ],
    },
    {
      title: 'Database & Architecture',
      icon: faDatabase,
      color: 'from-purple-700 to-indigo-700',
      skills: [
        { name: 'MongoDB', level: 100 },
        { name: 'MySQL', level: 85 },
        { name: 'Clean Architecture', level: 90 },
        { name: 'MVC, CQRS', level: 85 },
      ],
    },
    {
      title: 'UI/UX & Tools',
      icon: faPaintBrush,
      color: 'from-fuchsia-600 to-indigo-500',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 85 },
        { name: 'Git', level: 80 },
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 relative overflow-hidden">
      <SideBar />

      {/* Background motion effect */}
      <motion.div
        className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.4),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.4),transparent_60%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      <div className="flex-1 p-4 sm:p-6 md:p-8 text-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center sm:text-left"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 mb-4 sm:mb-6 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]"
              variants={itemVariants}
            >
              Kỹ Năng & Chuyên Môn
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
              variants={itemVariants}
            >
              Dưới đây là các nhóm kỹ năng trọng điểm của tôi — từ phát triển giao diện, backend,
              cơ sở dữ liệu đến thiết kế UI/UX và kiến trúc hệ thống. Tất cả đều được rèn luyện qua hơn 20 dự án thực chiến.
            </motion.p>
          </motion.section>

          {/* Skill Groups */}
          <motion.div
            className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillGroups.map((group, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-purple-950/60 to-indigo-950/60 shadow-[0_4px_20px_rgba(147,51,234,0.3)] backdrop-blur-md"
              >
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon
                    icon={group.icon}
                    className="text-purple-400 text-3xl sm:text-4xl mr-3"
                  />
                  <h2 className="text-xl sm:text-2xl font-semibold text-purple-300">
                    {group.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill, idx) => (
                    <motion.div key={idx} className="relative">
                      <div className="flex justify-between text-sm sm:text-base mb-1">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <span className="text-purple-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-purple-950/30 rounded-full h-2 sm:h-3 overflow-hidden">
                        <motion.div
                          className={`h-2 sm:h-3 rounded-full bg-gradient-to-r ${group.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: animate ? `${skill.level}%` : 0 }}
                          transition={{ duration: 1.2, delay: idx * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.section
            className="my-12 sm:my-16 md:my-20 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-300 mb-4 sm:mb-6"
              variants={itemVariants}
            >
              Sẵn Sàng Cho Dự Án Của Bạn?
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-xl mx-auto"
              variants={itemVariants}
            >
              Tôi có thể giúp bạn xây dựng hệ thống hiệu suất cao, UI hiện đại, và kiến trúc sạch.
              Hãy cùng hợp tác ngay hôm nay.
            </motion.p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-300 shadow-xl font-semibold text-sm sm:text-base"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Liên Hệ Ngay
            </motion.button>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default Skills;
