import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SideBar from '../partials/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRocket, faTrophy } from '@fortawesome/free-solid-svg-icons';

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

const buttonVariants = {
  hover: { scale: 1.1, boxShadow: '0 8px 25px rgba(147, 51, 234, 0.6)' },
  tap: { scale: 0.95 },
};

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0a0212] via-[#0f051d] to-[#1a103d] relative overflow-hidden text-white">
      {/* cosmic background lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600/20 blur-3xl rounded-full -top-24 -left-24 animate-pulse-slow"></div>
        <div className="absolute w-80 h-80 bg-indigo-600/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse-slow delay-300"></div>
      </div>

      <SideBar />

      <div className="flex-1 p-4 sm:p-6 md:p-10 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* HERO SECTION */}
          <motion.section
            className="text-center py-16 sm:py-20 md:py-28"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-300 to-cyan-300 mb-6 sm:mb-8 drop-shadow-[0_0_25px_rgba(147,51,234,0.5)]"
              variants={itemVariants}
            >
              Xin chào, tôi là Lâm Huệ Trung
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Fullstack Developer với hơn 20 dự án thực chiến, thành thạo ReactJS, NodeJS, MongoDB, và Laravel. Tôi tập trung vào việc tạo ra trải nghiệm mượt mà, hiệu năng cao và thiết kế tinh tế.
            </motion.p>

            <motion.button
              onClick={() => navigate('/portfolio')}
              className="mt-10 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Khám Phá Dự Án
            </motion.button>

            {/* Tech stack */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-12 sm:mt-16">
              {['react', 'node', 'mongodb', 'laravel', 'vue', 'git'].map((tech, i) => (
                <motion.img
                  key={i}
                  src={`/img/${tech}.png`}
                  alt={tech}
                  className="h-10 sm:h-12 mx-auto opacity-90 hover:opacity-100 transition-transform duration-300 hover:scale-110"
                  variants={itemVariants}
                />
              ))}
            </div>
          </motion.section>

          {/* ABOUT + CARDS */}
          <motion.section
            className="my-16 sm:my-20 md:my-28"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Avatar */}
              <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
                <div className="relative group">
                  <img
                    src="/img/avt.jpg"
                    alt="Lâm Huệ Trung"
                    className="rounded-2xl w-full max-w-sm mx-auto shadow-[0_0_40px_rgba(147,51,234,0.4)] group-hover:shadow-[0_0_60px_rgba(147,51,234,0.7)] transition-shadow duration-700"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                className="w-full lg:w-2/3 flex flex-col gap-8"
                variants={itemVariants}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_0_25px_rgba(147,51,234,0.4)]">
                  <h3 className="text-2xl font-semibold text-purple-200 mb-4">
                    Tóm Tắt
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                    Tôi là lập trình viên <span className="font-bold text-purple-400">Fullstack</span> tốt nghiệp Đại học Trà Vinh, có kinh nghiệm về <strong>ReactJS</strong>, <strong>NodeJS</strong>, <strong>RESTful API</strong> và <strong>Laravel</strong>.  
                    Mục tiêu của tôi là tạo ra sản phẩm có giá trị thực, giao diện tinh gọn, trải nghiệm tối ưu.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { icon: faCode, title: 'Lập Trình', text: 'Thành thạo React, Node, MongoDB, Laravel, Clean Architecture.' },
                    { icon: faRocket, title: 'Dự Án', text: 'Hơn 20 sản phẩm: hệ thống quản lý, eCommerce, blog cá nhân.' },
                    { icon: faTrophy, title: 'Thành Tựu', text: 'Olympic Tin học 2021, Khuyến khích cấp trường 2023.' },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      className="p-6 rounded-xl bg-gradient-to-br from-purple-900/40 to-indigo-900/30 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-all duration-500"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FontAwesomeIcon icon={card.icon} className="text-purple-300 text-4xl mb-4" />
                      <h3 className="text-xl font-semibold text-purple-300 mb-2">{card.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">{card.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            className="my-16 sm:my-20 md:my-28 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-400 mb-6"
              variants={itemVariants}
            >
              Hãy Bắt Đầu Hợp Tác!
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl opacity-90 mb-8 max-w-xl mx-auto"
              variants={itemVariants}
            >
              Sẵn sàng biến ý tưởng của bạn thành hiện thực? Liên hệ ngay để cùng nhau tạo nên giải pháp đột phá.
            </motion.p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-semibold hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Liên Hệ Ngay
            </motion.button>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default Home;
