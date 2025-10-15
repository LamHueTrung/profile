import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SideBar from '../partials/sidebar';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

// Animation variants
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
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 4px 15px rgba(147,51,234,0.5)' },
  tap: { scale: 0.95 },
};

function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Sidebar auto adjustment
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

  const handleViewMore = (project) => {
    if (project.url === 'private') {
      Swal.fire({
        title: 'Thông báo',
        text: 'Đây là thông tin bảo mật, không thể truy cập.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          title: 'text-xl sm:text-2xl font-bold text-purple-600',
          confirmButton:
            'bg-purple-600 text-white hover:bg-purple-500 rounded-full px-6 py-2 font-semibold transition-all duration-300',
        },
      });
      return;
    }
    Swal.fire({
      title: 'Thông tin truy cập',
      html: `${project.info}<p class="mt-4 text-xs sm:text-sm text-gray-400">Đang chuyển hướng...</p>`,
      icon: 'info',
      showConfirmButton: false,
      timer: 10000,
      timerProgressBar: true,
      didOpen: () => Swal.showLoading(),
      willClose: () => window.open(project.url, '_blank'),
      customClass: {
        title: 'text-xl sm:text-2xl font-bold text-purple-600',
        htmlContainer: 'text-sm sm:text-base text-gray-700',
      },
    });
  };

  const projects = [
    {
      id: 1,
      title: 'TDGM Victory System',
      category: 'NodeJS',
      url: 'https://tdgm-victory-microserver.up.railway.app/',
      info: '<p><strong>Tài khoản:</strong> LamHueTrung</p><p><strong>Mật khẩu:</strong> P@ssword123</p>',
      description:
        'Hệ thống web giúp tự động hóa và tối ưu hóa việc quản lý thiết bị dạy học và quà tặng.',
      image: '/img/project/tdgm-victory-system.jpg',
    },
    {
      id: 2,
      title: 'E Course Online',
      category: 'NodeJS',
      url: 'https://ithub-learning.onrender.com/',
      info: '<p><strong>Tài khoản admin:</strong> LamHueTrung</p><p><strong>Mật khẩu:</strong> P@ssword123</p>',
      description:
        'Website khoá học self-learning online dựa trên F8.com, tối ưu UX và API backend.',
      image: '/img/project/ithub-learning.jpg',
    },
    {
      id: 3,
      title: 'SIS-Intern System',
      category: 'NodeJS',
      url: 'https://sisterntvu-bangbaocao.netlify.app/',
      info: '<p><strong>Admin:</strong> admin@sistern.com / admin</p><p><strong>Giảng viên:</strong> nguyenbaoan@gmail.com / nguyenbaoan</p>',
      description:
        'Hệ thống quản lý quá trình thực tập sinh viên. Ứng dụng ReactJS, NodeJS, MongoDB.',
      image: '/img/project/sis-intern-system.jpg',
    },
    {
      id: 4,
      title: 'UI/UX Travel',
      category: 'UI/UX',
      url: 'https://lamhuetrung-travel.netlify.app/',
      info: 'Thiết kế giao diện ReactJS blog du lịch với hiệu ứng cuộn mượt.',
      description: 'Sản phẩm đầu tay về UI/UX, chú trọng trải nghiệm thị giác.',
      image: '/img/project/travel-ui-ux.jpg',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="flex min-h-screen bg-gray-900">
      <SideBar onToggle={(open) => setIsSidebarOpen(open)} />
      <div
        className="flex-1 p-4 sm:p-6 md:p-8 text-white transition-all duration-300"
        style={{ marginLeft: isSidebarOpen ? `${sidebarWidth}px` : '0' }}
      >
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.section
            className="text-center py-6 sm:py-8 md:py-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-3 sm:mb-5"
              variants={itemVariants}
            >
              Danh Mục Dự Án
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-gray-300 opacity-90 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Một số sản phẩm tiêu biểu của tôi trong lĩnh vực phát triển phần mềm và thiết kế giao diện người dùng.
            </motion.p>
          </motion.section>

          {/* Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {['all', 'NodeJS', 'Laravel', 'PHP', 'UI/UX', 'Order'].map(
              (category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-purple-600 text-white shadow-[0_4px_15px_rgba(147,51,234,0.5)]'
                      : 'bg-purple-950/50 text-purple-300 hover:bg-purple-800/50'
                  }`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {category === 'all' ? 'Tất cả' : category}
                </motion.button>
              )
            )}
          </motion.div>

          {/* Projects */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gradient-to-br from-purple-950/50 to-indigo-950/50 rounded-2xl overflow-hidden shadow-[0_6px_20px_rgba(147,51,234,0.4)]"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 25px rgba(147,51,234,0.6)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base opacity-80 mb-4">
                    {project.description}
                  </p>
                  <motion.button
                    onClick={() => handleViewMore(project)}
                    className="px-4 sm:px-5 py-1.5 sm:py-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-300 text-sm sm:text-base font-semibold"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Xem chi tiết
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.section
            className="text-center mt-12 sm:mt-16 md:mt-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold text-purple-300 mb-3 sm:mb-5"
              variants={itemVariants}
            >
              Muốn Xem Thêm Dự Án?
            </motion.h2>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-300 shadow-xl font-semibold text-sm sm:text-base"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Liên hệ để hợp tác
            </motion.button>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
