import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tree, TreeNode } from 'react-organizational-chart';
import SideBar from '../partials/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faLaptopCode, faAward, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

// Animation variants for smooth transitions
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
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
      setIsSidebarOpen(isLargeScreen); // Mở sidebar trên màn hình lớn
      setSidebarWidth(sidebar ? sidebar.offsetWidth : isLargeScreen ? 72 : 0); // 72px là độ rộng mặc định của sidebar trên desktop
    };
    updateSidebarState();
    window.addEventListener('resize', updateSidebarState);
    // Lắng nghe sự kiện từ sidebar nếu có toggle
    const handleSidebarToggle = (e) => {
      if (e.detail && e.detail.open !== undefined) {
        setIsSidebarOpen(e.detail.open);
        setSidebarWidth(e.detail.open ? 64 : 0); // 64px là độ rộng sidebar trên mobile khi mở
      }
    };
    window.addEventListener('sidebarToggle', handleSidebarToggle);
    return () => {
      window.removeEventListener('resize', updateSidebarState);
      window.removeEventListener('sidebarToggle', handleSidebarToggle);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900">
      <SideBar onToggle={(open) => setIsSidebarOpen(open)} />
      <div
        className="flex-1 p-2 sm:p-3 md:p-4 text-white transition-all duration-300"
        style={{ marginLeft: isSidebarOpen ? `${sidebarWidth}px` : '0' }}
      >
        <div className="container mx-auto max-w-5xl sm:max-w-6xl">
          {/* Header Section */}
          <motion.section
            className="text-center py-3 sm:py-4 md:py-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-1 sm:mb-2 md:mb-3 text-center"
              style={{ lineHeight: '1.5rem sm:1.75rem md:2rem lg:2.5rem' }}
              variants={itemVariants}
            >
              Về Tôi - Lâm Huệ Trung
            </motion.h1>
            <motion.p
              className="text-xs sm:text-sm md:text-base opacity-80 mb-1 sm:mb-2 md:mb-3 leading-relaxed max-w-sm sm:max-w-md md:max-w-xl mx-auto"
              variants={itemVariants}
            >
              Một Fullstack Developer với hành trình từ những dòng code đầu tiên tại Đại học Trà Vinh đến việc xây dựng các ứng dụng web hiện đại, tôi luôn nỗ lực mang lại giá trị qua công nghệ.
            </motion.p>
          </motion.section>

          {/* Education Section */}
          <motion.section
            className="my-3 sm:my-4 md:my-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-base sm:text-lg md:text-xl font-semibold text-purple-300 mb-1 sm:mb-2 md:mb-3 text-center"
              variants={itemVariants}
            >
              Học Vấn
            </motion.h2>
            <motion.div
              className="relative p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-md sm:shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: '0 4px 15px rgba(147,51,234,0.5)' }}
            >
              <div className="flex items-start">
                <div>
                <FontAwesomeIcon icon={faUniversity} className="text-purple-300 text-sm sm:text-base md:text-lg mr-1 sm:mr-2" />
                  <h3 className="text-sm sm:text-base font-semibold text-purple-300 mb-1">Đại học Trà Vinh</h3>
                  <p className="text-xs opacity-70 mb-1">Kỹ sư Công nghệ Thông tin, 2021 - 2025</p>
                  <p className="text-xs sm:text-sm opacity-70">
                    Tại đây, tôi đã xây dựng nền tảng vững chắc về lập trình web, phát triển API, và quản lý dự án. Tôi tập trung vào các công nghệ như ReactJS, NodeJS, Express, Laravel, Dotnet và các mô hình như microservice, MVC và Clean Architecture, đồng thời rèn luyện kỹ năng làm việc nhóm qua các dự án thực tế.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Technical Expertise Section */}
          <motion.section
            className="my-3 sm:my-4 md:my-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-base sm:text-lg md:text-xl font-semibold text-purple-300 mb-1 sm:mb-2 md:mb-3 text-center"
              variants={itemVariants}
            >
              Chuyên Môn Kỹ Thuật
            </motion.h2>
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              <motion.div
                className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-md sm:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(147,51,234,0.5)' }}
              >
                <FontAwesomeIcon icon={faLaptopCode} className="text-purple-300 text-sm sm:text-base md:text-lg mb-1 sm:mb-2" />
                <h3 className="text-sm sm:text-base font-semibold text-purple-300 mb-1">Phát Triển Web</h3>
                <p className="text-xs sm:text-sm opacity-70">
                  Thành thạo xây dựng giao diện với ReactJS, quản lý backend với NodeJS và Express, thiết kế RESTful API sử dụng JWT và bcrypt. Tôi cũng áp dụng MVC và Clean Architecture để đảm bảo mã nguồn sạch và dễ bảo trì.
                </p>
              </motion.div>
              <motion.div
                className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-md sm:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(147,51,234,0.5)' }}
              >
                <FontAwesomeIcon icon={faLaptopCode} className="text-purple-300 text-sm sm:text-base md:text-lg mb-1 sm:mb-2" />
                <h3 className="text-sm sm:text-base font-semibold text-purple-300 mb-1">Quản Lý Dự Án</h3>
                <p className="text-xs sm:text-sm opacity-70">
                  Sử dụng Scrum để quản lý quy trình phát triển, cùng với Git và GitHub để kiểm soát phiên bản. Tôi có kinh nghiệm xử lý lỗi, phân quyền người dùng, và tối ưu hóa hiệu suất ứng dụng.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Journey & Achievements Section */}
          <motion.section
            className="my-3 sm:my-4 md:my-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-base sm:text-lg md:text-xl font-semibold text-purple-300 mb-1 sm:mb-2 md:mb-3 text-center"
              variants={itemVariants}
            >
              Hành Trình & Thành Tựu
            </motion.h2>
            <div className="overflow-x-auto sm:overflow-x-visible">
              <Tree
                lineWidth={'1px'}
                lineColor={'#a855f7'}
                lineBorderRadius={'5px'}
                label={
                  <motion.div
                    className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-md sm:shadow-lg"
                    variants={itemVariants}
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-purple-300">Hành Trình & Thành Tựu</h3>
                  </motion.div>
                }
              >
                {/* Achievements Branch */}
                <TreeNode
                  label={
                    <motion.div
                      className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-md sm:shadow-lg"
                      variants={itemVariants}
                    >
                      <h3 className="text-xs sm:text-sm font-semibold text-purple-300">Thành Tựu</h3>
                    </motion.div>
                  }
                >
                  <TreeNode
                    label={
                      <motion.div
                        className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-md sm:shadow-lg"
                        variants={itemVariants}
                      >
                        <div className="flex flex-col sm:flex-row items-start">
                          <FontAwesomeIcon icon={faAward} className="text-purple-300 text-sm mr-1 sm:mr-2 mb-1 sm:mb-0" />
                          <div>
                            <h4 className="text-xs font-semibold text-purple-300 mb-1">Olympic Tin học</h4>
                            <p className="text-xs opacity-70 mb-1">2021 & 2023</p>
                            <p className="text-xs sm:text-sm opacity-70">
                              Tham gia Olympic Tin học Quốc gia 2021 và đạt giải Khuyến khích cấp trường 2023.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    }
                  />
                  <TreeNode
                    label={
                      <motion.div
                        className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-md sm:shadow-lg"
                        variants={itemVariants}
                      >
                        <div className="flex flex-col sm:flex-row items-start">
                          <FontAwesomeIcon icon={faLaptopCode} className="text-purple-300 text-sm mr-1 sm:mr-2 mb-1 sm:mb-0" />
                          <div>
                            <h4 className="text-xs font-semibold text-purple-300 mb-1">Dự Án Thực Tế</h4>
                            <p className="text-xs opacity-70 mb-1">2021 - 2025</p>
                            <p className="text-xs sm:text-sm opacity-70">
                              Phát triển các dự án web tại trường với ReactJS, NodeJS, MongoDB, Laravel, Vue, Dotnet, SQL.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    }
                  />
                </TreeNode>
                {/* Work Experience Branch */}
                <TreeNode
                  label={
                    <motion.div
                      className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-md sm:shadow-lg"
                      variants={itemVariants}
                    >
                      <h3 className="text-xs sm:text-sm font-semibold text-purple-300">Kinh Nghiệm Làm Việc</h3>
                    </motion.div>
                  }
                >
                  <TreeNode
                    label={
                      <motion.div
                        className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-md sm:shadow-lg"
                        variants={itemVariants}
                      >
                        <div className="flex flex-col sm:flex-row items-start">
                          <FontAwesomeIcon icon={faBriefcase} className="text-purple-300 text-sm mr-1 sm:mr-2 mb-1 sm:mb-0" />
                          <div>
                            <h4 className="text-xs font-semibold text-purple-300 mb-1">TTS - 365EJSC</h4>
                            <p className="text-xs opacity-70 mb-1">2024</p>
                            <p className="text-xs sm:text-sm opacity-70">
                              Xây dựng API với Dotnet, áp dụng mô hình Clean Architecture.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    }
                  />
                  <TreeNode
                    label={
                      <motion.div
                        className="relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-md sm:shadow-lg"
                        variants={itemVariants}
                      >
                        <div className="flex flex-col sm:flex-row items-start">
                          <FontAwesomeIcon icon={faBriefcase} className="text-purple-300 text-sm mr-1 sm:mr-2 mb-1 sm:mb-0" />
                          <div>
                            <h4 className="text-xs font-semibold text-purple-300 mb-1">Nhân Viên - Rynan Technologies</h4>
                            <p className="text-xs opacity-70 mb-1">2025 - Hiện tại</p>
                            <p className="text-xs sm:text-sm opacity-70">
                              Phát triển chuyển đổi số nông nghiệp.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    }
                  />
                </TreeNode>
              </Tree>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            className="my-3 sm:my-4 md:my-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-base sm:text-lg md:text-xl font-semibold text-purple-300 mb-1 sm:mb-2 md:mb-3 text-center"
              variants={itemVariants}
            >
              Sẵn Sàng Hợp Tác
            </motion.h2>
            <motion.p
              className="text-xs sm:text-sm md:text-base opacity-80 mb-1 sm:mb-2 md:mb-3 max-w-xs sm:max-w-sm md:max-w-md mx-auto"
              variants={itemVariants}
            >
              Bạn đang tìm kiếm một Fullstack Developer để biến ý tưởng thành hiện thực? Hãy liên hệ để chúng ta cùng tạo ra những sản phẩm công nghệ ấn tượng!
            </motion.p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors duration-300 shadow-md text-xs sm:text-sm"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(147,51,234,0.5)' }}
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