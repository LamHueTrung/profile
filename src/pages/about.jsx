import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tree, TreeNode } from 'react-organizational-chart';
import SideBar from '../partials/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faLaptopCode, faAward, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

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

function About() {
  const navigate = useNavigate();
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const updateSidebarState = () => {
      const sidebar = document.querySelector('.sidebar');
      const isLargeScreen = window.innerWidth >= 768;
      setIsSidebarOpen(isLargeScreen);
      setSidebarWidth(sidebar ? sidebar.offsetWidth : isLargeScreen ? 72 : 0);
    };
    updateSidebarState();
    window.addEventListener('resize', updateSidebarState);
    const handleSidebarToggle = (e) => {
      if (e.detail && e.detail.open !== undefined) {
        setIsSidebarOpen(e.detail.open);
        setSidebarWidth(e.detail.open ? 64 : 0);
      }
    };
    window.addEventListener('sidebarToggle', handleSidebarToggle);
    return () => {
      window.removeEventListener('resize', updateSidebarState);
      window.removeEventListener('sidebarToggle', handleSidebarToggle);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 relative overflow-hidden">
      <SideBar onToggle={(open) => setIsSidebarOpen(open)} />
      <div
        className="flex-1 p-4 sm:p-6 md:p-8 text-white transition-all duration-300 relative z-10"
        style={{ marginLeft: isSidebarOpen ? `${sidebarWidth}px` : '0' }}
      >
        <div className="container mx-auto max-w-5xl">

          {/* HEADER */}
          <motion.section
            className="text-center py-8 sm:py-12 md:py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-500 to-indigo-400 mb-4 sm:mb-6 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]"
              variants={itemVariants}
            >
              Về Tôi - Lâm Huệ Trung
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Tôi là một <span className="text-purple-300 font-medium">Fullstack Developer</span> đam mê công nghệ và sáng tạo.  
              Bắt đầu từ những dòng code đầu tiên tại Đại học Trà Vinh, tôi đã dành thời gian khám phá, học hỏi và phát triển kỹ năng để tạo ra những sản phẩm web hiện đại, tối ưu và hữu ích.
            </motion.p>
          </motion.section>

          {/* EDUCATION */}
          <motion.section
            className="my-12 sm:my-16 md:my-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-6 text-center"
              variants={itemVariants}
            >
              Học Vấn
            </motion.h2>
            <motion.div
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_6px_20px_rgba(147,51,234,0.4)]"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <FontAwesomeIcon icon={faUniversity} className="text-purple-300 text-2xl sm:text-3xl" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-300">Đại học Trà Vinh</h3>
                  <p className="text-sm text-gray-400 mb-1">Kỹ sư Công nghệ Thông tin, 2021 - 2025</p>
                  <p className="text-sm text-gray-300">
                    Tôi tập trung vào ReactJS, NodeJS, Express, Laravel, .NET và các mô hình như MVC, Clean Architecture, Microservice.
                    Học cách tối ưu quy trình teamwork, quản lý dự án và viết mã sạch, dễ mở rộng.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* TECHNICAL EXPERTISE */}
          <motion.section
            className="my-12 sm:my-16 md:my-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-6 text-center"
              variants={itemVariants}
            >
              Chuyên Môn Kỹ Thuật
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_6px_20px_rgba(147,51,234,0.4)]"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <FontAwesomeIcon icon={faLaptopCode} className="text-purple-300 text-2xl mb-3" />
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Phát Triển Web</h3>
                <p className="text-sm text-gray-300">
                  Xây dựng giao diện ReactJS, backend với NodeJS và Express, RESTful API với JWT.  
                  Ứng dụng Clean Architecture và tối ưu hiệu suất cho sản phẩm.
                </p>
              </motion.div>
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_6px_20px_rgba(147,51,234,0.4)]"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <FontAwesomeIcon icon={faBriefcase} className="text-purple-300 text-2xl mb-3" />
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Quản Lý Dự Án</h3>
                <p className="text-sm text-gray-300">
                  Quản lý quy trình phát triển bằng Scrum. Sử dụng Git và GitHub để phối hợp nhóm và kiểm soát phiên bản hiệu quả.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* JOURNEY & ACHIEVEMENTS */}
          <motion.section
            className="my-12 sm:my-16 md:my-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-6 text-center"
              variants={itemVariants}
            >
              Hành Trình & Thành Tựu
            </motion.h2>
            <div className="flex justify-center overflow-x-auto">
              <Tree
                lineWidth={'2px'}
                lineColor={'#a855f7'}
                lineBorderRadius={'5px'}
                label={
                  <motion.div
                    className="p-4 rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_6px_15px_rgba(147,51,234,0.4)]"
                    variants={itemVariants}
                  >
                    <h3 className="text-lg font-semibold text-purple-200">Hành Trình</h3>
                  </motion.div>
                }
              >
                <TreeNode
                  label={
                    <motion.div className="p-3 rounded-lg bg-purple-950/40" variants={itemVariants}>
                      <h4 className="text-sm font-semibold text-purple-300">Thành Tựu</h4>
                    </motion.div>
                  }
                >
                  <TreeNode
                    label={
                      <motion.div className="p-3 rounded-lg bg-indigo-950/40" variants={itemVariants}>
                        <FontAwesomeIcon icon={faAward} className="text-purple-300 mr-2" />
                        <span className="text-sm text-gray-300">Olympic Tin học 2021 & 2023</span>
                      </motion.div>
                    }
                  />
                  <TreeNode
                    label={
                      <motion.div className="p-3 rounded-lg bg-indigo-950/40" variants={itemVariants}>
                        <FontAwesomeIcon icon={faLaptopCode} className="text-purple-300 mr-2" />
                        <span className="text-sm text-gray-300">Thực hiện nhiều dự án web thực tế</span>
                      </motion.div>
                    }
                  />
                </TreeNode>

                <TreeNode
                  label={
                    <motion.div className="p-3 rounded-lg bg-purple-950/40" variants={itemVariants}>
                      <h4 className="text-sm font-semibold text-purple-300">Kinh Nghiệm Làm Việc</h4>
                    </motion.div>
                  }
                >
                  <TreeNode
                    label={
                      <motion.div className="p-3 rounded-lg bg-indigo-950/40" variants={itemVariants}>
                        <FontAwesomeIcon icon={faBriefcase} className="text-purple-300 mr-2" />
                        <span className="text-sm text-gray-300">TTS tại 365EJSC (2024)</span>
                      </motion.div>
                    }
                  />
                  <TreeNode
                    label={
                      <motion.div className="p-3 rounded-lg bg-indigo-950/40" variants={itemVariants}>
                        <FontAwesomeIcon icon={faBriefcase} className="text-purple-300 mr-2" />
                        <span className="text-sm text-gray-300">Nhân viên tại Rynan Technologies (2025 - nay)</span>
                      </motion.div>
                    }
                  />
                </TreeNode>
              </Tree>
            </div>
          </motion.section>

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
              Sẵn Sàng Hợp Tác
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8"
              variants={itemVariants}
            >
              Tôi luôn sẵn sàng đồng hành cùng bạn trong các dự án lập trình và sáng tạo công nghệ.
            </motion.p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-300 shadow-xl font-semibold text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
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

export default About;
