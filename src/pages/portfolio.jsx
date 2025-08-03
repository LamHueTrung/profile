import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SideBar from '../partials/sidebar';
import { useState } from 'react';
import Swal from 'sweetalert2';

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

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 4px 15px rgba(147, 51, 234, 0.4)' },
  tap: { scale: 0.95 }
};
function Portfolio() {
    const [filter, setFilter] = useState('all');
    const handleViewMore = (project) => {
        if(project.url === 'private') {
            Swal.fire({
                title: 'Thông báo',
                text: 'Đây là thông tin bảo mật, không thể truy cập.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        } 
        Swal.fire({
          title: 'Thông tin truy cập',
          html: `
            ${project.info}
            <p class="mt-4 text-sm text-gray-400">Đang chuyển hướng trong 30 giây...</p>
          `,
          icon: 'info',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            window.open(project.url, '_blank');
          }
        });
      };
    const projects = [
        {
            id: 1,
            title: 'TDGM Victory System',
            category: 'NodeJS',
            url: 'https://tdgm-victory-microserver.up.railway.app/',
            info: "<p><strong>Tài khoản:</strong> LamHueTrung</p><p><strong>Mật khẩu:</strong> P@ssword123</p>",
            description: 'Dự án này là một hệ thống web giúp tự động hóa và tối ưu hóa việc quản lý thiết bị dạy học và quà tặng.',
            image: '/img/project/tdgm-victory-system.jpg',
        },
        {
            id: 2,
            title: 'E Course Online',
            category: 'NodeJS',
            url: 'https://ithub-learning.onrender.com/',
            info: "<p><strong>Tài khoản admin:</strong> LamHueTrung</p><p><strong>Mật khẩu:</strong> P@ssword123</p>",
            description: 'Website khoá học self-learning online xây dựng các tính năng dựa trên trang web F8.com.',
            image: '/img/project/ithub-learning.jpg',
        },
        {
            id: 3,
            title: 'SIS-Intern System',
            category: 'NodeJS',
            url: 'https://ithub-learning.onrender.com/',
            info: "<p><strong>Tài khoản admin:</strong> admin@sistern.com</p><p><strong>Mật khẩu:</strong> admin</p><p><strong>Tài khoản sinh viên:</strong> lamhuetrung@gmail.com</p><p><strong>Mật khẩu:</strong> lamhuetrung</p><p><strong>Tài khoản giảng viên:</strong> nguyenbaoan@gmail.com</p><p><strong>Mật khẩu:</strong> nguyenbaoan</p>",
            description: 'Hệ thống quản lý quá trình thực tập của sinh viên, tập trung chủ yếu vào quy trình, code còn nhiều lỗi và chưa hoàn thiện.',
            image: '/img/project/sis-intern-system.jpg',
        },
        {
            id: 4,
            title: 'UI/UX Travel',
            category: 'UI/UX',
            url: 'https://lamhuetrung-travel.netlify.app/',
            info: "<p><strong>Tài khoản admin:</strong> Không có</p><p><strong>Mật khẩu:</strong> Không có</p>",
            description: 'Thiết kế website travel blog đây là sản phẩm đầu tay khi tôi làm việc với ReactJS.',
            image: '/img/project/travel-ui-ux.jpg',
        },
        {
            id: 5,
            title: 'Shop TND',
            category: 'Laravel',
            url: 'https://dientoandammay-c907c7f4dac8.herokuapp.com/',
            info: "<p><strong>Tài khoản admin:</strong> admin@admin.com</p><p><strong>Mật khẩu:</strong> admin</p>",
            description: 'Shop bán đồ điện tử đầy đủ chức năng, đồ án môn học điện toán đám mây.',
            image: '/img/project/dientoandammay.jpg',
        },
        {
            id: 6,
            title: 'Quản lý tiệm tạp hóa',
            category: 'Laravel',
            url: 'https://www.tiktok.com/@huetrungcoder/video/7514585029893295367',
            info: "<p>Xem video demo nhé, do hết kinh phí không thể public được...</p>",
            description: 'Website quản lý bán hàng cho tiệm tạp hóa Nhi Thảnh, đây là đồ án môn học Mã nguồn mở.',
            image: '/img/project/nhithanh.jpg',
        },
        {
            id: 7,
            title: 'Play Together',
            category: 'Laravel',
            url: 'http://playtogetherlucky.kesug.com/',
            info: "<p><strong>Tài khoản admin:</strong>tự đăng ký</p><p><strong>Mật khẩu:</strong>tự tạo</p>",
            description: 'Trang web sự kiện tặng quà cho game Play Together, viết cho 1 cá nhân hoạt động trong lĩnh vực game.',
            image: '/img/project/playtogether.jpg',
        },
        {
            id: 8,
            title: 'Quản lý đồ án',
            category: 'Laravel',
            url: 'private',
            info: "<p><strong>Tài khoản admin:</strong>tự đăng ký</p><p><strong>Mật khẩu:</strong>tự tạo</p>",
            description: 'Đồ án môn học, website quản lý các source code đồ án dành cho cá nhân.',
            image: '/img/project/quanlydoan.jpg',
        },
        {
            id: 9,
            title: 'Shop điện tử',
            category: 'PHP',
            url: 'private',
            info: "<p><strong>Tài khoản admin:</strong>tự đăng ký</p><p><strong>Mật khẩu:</strong>tự tạo</p>",
            description: 'Website bán sản phẩm thiết bị điện tử, quản lý kho, tích hợp thanh toán.',
            image: '/img/project/cmt247.jpg',
        },
        {
            id: 10,
            title: 'ChatLht',
            category: 'NodeJS',
            url: 'https://chatlht.netlify.app/',
            info: "<p><strong>Tài khoản admin:</strong>LamHueTrung</p><p><strong>Mật khẩu:</strong>Lâu quá hổng nhớ</p>",
            description: 'Website App chat real time, đây là ứng dụng viết riêng cho nhóm lập trình LHT.',
            image: '/img/project/chatlht.jpg',
        },
        {
            id: 11,
            title: '2Love Chat',
            category: 'UI/UX',
            url: 'https://www.figma.com/design/GxOYw6LyS32R3mPMocek3T/404-NotFound-Hi-Fi?node-id=7-2&t=wrhB8xRtLzMAnZO0-1',
            info: "<p>Thiết kế trên figma.</p>",
            description: 'Thiết kế giao diện ứng dụng hẹn hò 2Love, đây là sản phẩm môn học Tương tác người-máy.',
            image: '/img/project/2love.png',
        },
        {
            id: 12,
            title: '+20 website khác',
            category: 'Order',
            url: 'private',
            info: "<p>Đây là thông tin bảo mật nhầm tránh bị bản quyền nên không thể tiết lộ.</p>",
            description: 'Khoảng 6 website cho các doanh nghiệp cá nhân về quản lý quán cà phê, trang thông tin, trường học, shop quần áo và một số đồ án cho sinh viên. Vì đây là thông tin bảo mật nên tôi không thể đính kèm trên đây.',
            image: '/img/project/private.jpg',
        }
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

    return (
        <div className="flex min-h-screen bg-gray-900">
            <SideBar />
            <div className="flex-1 p-8 text-white">
                <div className="container mx-auto max-w-5xl">
                    {/* Header Section */}
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-6"
                            variants={itemVariants}
                        >
                            Sản phẩm của tôi
                        </motion.h1>
                        <motion.p
                            className="text-lg opacity-80 mb-8 leading-relaxed"
                            variants={itemVariants}
                        >
                            Khám phá các dự án nổi bật của tôi, từ thiết kế website, giao diện người dùng, đến các dự án freelance sáng tạo.
                        </motion.p>
                    </motion.section>

                    {/* Filter Buttons */}
                    <motion.div
                        className="flex gap-4 mb-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {['all', 'NodeJS', 'Laravel', 'PHP', 'UI/UX', 'Order'].map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    filter === category
                                        ? 'bg-purple-600 text-white shadow-[0_4px_15px_rgba(147,51,234,0.4)]'
                                        : 'bg-purple-950/50 text-purple-300 hover:bg-purple-800/50'
                                }`}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                {category === 'all' ? 'All' : category}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-purple-300 mb-2">{project.title}</h3>
                                    <p className="text-sm opacity-70 mb-4">{project.description}</p>
                                    <motion.button
                                        onClick={() => handleViewMore(project)}
                                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors duration-300"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Xem thêm
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;