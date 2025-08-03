import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SideBar from '../partials/sidebar';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faPaintBrush, faCogs, faSitemap } from '@fortawesome/free-solid-svg-icons';

// Animation variants for smooth transitions
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 }
  }
};

function Skills() {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    const skills = [
        { name: 'NodeJS', level: 100, category: 'Back-end', icon: faCode },
        { name: 'ReactJS', level: 100, category: 'Front-end', icon: faCode },
        { name: 'MongoDB', level: 100, category: 'Database', icon: faDatabase },
        { name: 'Laravel', level: 95, category: 'Back-end', icon: faCode },
        { name: 'Bootstrap', level: 90, category: 'Front-end', icon: faCode },
        { name: 'JavaScript', level: 90, category: 'Front-end', icon: faCode },
        { name: '.NET', level: 90, category: 'Back-end', icon: faCode },
        { name: 'UI/UX Design', level: 85, category: 'UI/UX', icon: faPaintBrush },
        { name: 'Figma', level: 85, category: 'UI/UX', icon: faPaintBrush },
        { name: 'MySQL', level: 80, category: 'Database', icon: faDatabase },
        { name: 'Git', level: 80, category: 'Tools', icon: faCogs },
        { name: 'Vue', level: 70, category: 'Front-end', icon: faCode },
        { name: 'CodeIgniter', level: 60, category: 'Back-end', icon: faCode },
        { name: 'Tailwind CSS', level: 40, category: 'Front-end', icon: faCode },
        { name: 'MVC, CQRS, Clean Architecture', level: 90, category: 'Architecture', icon: faSitemap },
    ];

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-900">
            <SideBar />
            <div className="flex-1 p-8 text-white">
                <div className="container mx-auto max-w-5xl">
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-4 text-center"
                            variants={itemVariants}
                        >
                            Kỹ Năng Của Tôi
                        </motion.h1>
                        <motion.p
                            className="text-lg opacity-80 mb-8 leading-relaxed text-center max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            Dưới đây là các kỹ năng nổi bật của tôi trong phát triển Front-end, Back-end, cơ sở dữ liệu, thiết kế UI/UX, và các mô hình kiến trúc hiện đại.
                        </motion.p>
                    </motion.section>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)] transform transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_30px_rgba(147,51,234,0.5)]"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                            >
                                <div className="flex items-center mb-2">
                                    <FontAwesomeIcon icon={skill.icon} className="text-purple-300 text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-purple-300">{skill.name}</h3>
                                </div>
                                <p className="text-sm opacity-70 mb-2">{skill.category}</p>
                                <div className="w-full bg-purple-950/30 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: animate ? `${skill.level}%` : '0%' }}
                                    ></div>
                                </div>
                                <p className="text-sm opacity-70 mt-2">{skill.level}% Proficiency</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Skills;