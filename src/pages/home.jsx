import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SideBar from '../partials/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRocket, faTrophy } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
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
  Swal.fire({
    title: 'Chào mừng bạn đến với trang cá nhân của tôi!',
    text: 'Hiện tại chưa có giao diện cho mobile, vui lòng truy cập trên máy tính để có trải nghiệm tốt nhất.',
    icon: 'info',
    confirmButtonText: 'Tiếp tục',
    customClass: {
      title: 'text-2xl font-bold text-purple-600',
      content: 'text-lg text-gray-700',
      confirmButton: 'bg-purple-600 text-white hover:bg-purple-500 transition-colors duration-300 rounded-full px-6 py-2 font-semibold',
    },
  });

  return (
    <div className="flex min-h-screen bg-gray-900 relative overflow-hidden">
      <SideBar />
      <div className="flex-1 p-8 text-white relative z-10">
        <div className="container mx-auto max-w-6xl">

          {/* HERO SECTION */}
          <motion.section
            className="text-center py-16 md:py-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-500 to-indigo-400 mb-6 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]"
              variants={itemVariants}
              style={{lineHeight: '4.5rem'}}
            >
              Xin chào, tôi là Lâm Huệ Trung
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Fullstack Developer với hơn 20 dự án thực chiến, sử dụng ReactJS, NodeJS, MongoDB và Laravel. Định hướng tạo ra giải pháp có tính ứng dụng cao và trải nghiệm người dùng mượt mà.
            </motion.p>
            <motion.button
              onClick={() => navigate('/portfolio')}
              className="mt-8 px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-300 shadow-xl font-semibold"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Khám Phá Dự Án
            </motion.button>

            {/* Tech stack icons */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-14">
              <img src="/img/react.png" alt="React" className="h-12 mx-auto" />
              <img src="/img/node.png" alt="Node.js" className="h-12 mx-auto" />
              <img src="/img/mongodb.webp" alt="MongoDB" className="h-12 mx-auto" />
              <img src="/img/laravel.png" alt="Laravel" className="h-12 mx-auto" />
              <img src="/img/vue.png" alt="Vue" className="h-12 mx-auto" />
              <img src="/img/git.png" alt="Git" className="h-12 mx-auto" />
            </div>
          </motion.section>

          <motion.section
            className="my-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            >
            <div className="flex flex-col lg:flex-row gap-10">
                <motion.div className="w-full lg:w-1/3" variants={itemVariants}>
                <img
                    src="/img/avt.jpg"
                    alt="Lâm Huệ Trung"
                    className="rounded-2xl w-full shadow-[0_6px_20px_rgba(147,51,234,0.4)]"
                />
                </motion.div>

                <motion.div
                className="w-full lg:w-2/3 flex flex-col gap-10"
                variants={itemVariants}
                >
                <div className="bg-gradient-to-br from-purple-950/50 to-indigo-950/50 p-6 md:p-10 rounded-2xl shadow-[0_6px_20px_rgba(147,51,234,0.4)]">
                    <h3 className="text-2xl font-semibold text-purple-200 mb-4">Tóm tắt</h3>
                    <p className="text-lg leading-relaxed text-gray-200 mb-6">
                    Tôi là một lập trình viên <span className="font-bold text-purple-400">Fullstack</span> tốt nghiệp Đại học Trà Vinh, với kinh nghiệm làm việc với <strong>ReactJS</strong>, <strong>NodeJS</strong>, <strong>RESTful API</strong> và <strong>Laravel</strong>. Tôi hướng tới việc xây dựng các giải pháp công nghệ có giá trị thực tiễn cao.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                    className="p-6 rounded-xl bg-gradient-to-br from-purple-950/60 to-indigo-950/60 shadow-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    >
                    <FontAwesomeIcon icon={faCode} className="text-purple-300 text-4xl mb-4" />
                    <h3 className="text-xl md:text-2xl font-semibold text-purple-300 mb-3">Lập Trình</h3>
                    <p className="text-base opacity-90">Thành thạo React, Node, MongoDB, Laravel và kiến trúc sạch (Clean Architecture).</p>
                    </motion.div>
                    <motion.div
                    className="p-6 rounded-xl bg-gradient-to-br from-purple-950/60 to-indigo-950/60 shadow-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    >
                    <FontAwesomeIcon icon={faRocket} className="text-purple-300 text-4xl mb-4" />
                    <h3 className="text-xl md:text-2xl font-semibold text-purple-300 mb-3">Dự Án</h3>
                    <p className="text-base opacity-90">Hơn 20 dự án bao gồm hệ thống quản lý, eCommerce, blog cá nhân.</p>
                    </motion.div>
                    <motion.div
                    className="p-6 rounded-xl bg-gradient-to-br from-purple-950/60 to-indigo-950/60 shadow-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    >
                    <FontAwesomeIcon icon={faTrophy} className="text-purple-300 text-4xl mb-4" />
                    <h3 className="text-xl md:text-2xl font-semibold text-purple-300 mb-3">Thành Tựu</h3>
                    <p className="text-base opacity-90">Olympic Tin học quốc gia 2021, Khuyến khích cấp trường 2023.</p>
                    </motion.div>
                </div>
                </motion.div>
            </div>
        </motion.section>

          {/* CTA */}
          <motion.section
            className="my-20 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-purple-300 mb-6"
              variants={itemVariants}
            >
              Hãy Bắt Đầu Hợp Tác!
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl opacity-90 mb-8 max-w-xl mx-auto"
              variants={itemVariants}
            >
              Sẵn sàng biến ý tưởng của bạn thành hiện thực? Liên hệ ngay để cùng tạo nên các giải pháp công nghệ đột phá!
            </motion.p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-300 shadow-xl font-semibold"
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