import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tree, TreeNode } from 'react-organizational-chart';
import SideBar from '../partials/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faLaptopCode, faAward, faBriefcase } from '@fortawesome/free-solid-svg-icons';

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
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

function About() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen bg-gray-900">
            <SideBar />
            <div className="flex-1 p-8 text-white">
                <div className="container mx-auto max-w-6xl">
                    {/* Header Section */}
                    <motion.section
                        className="text-center py-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-4"
                            style={{ lineHeight: '4.5rem' }}
                            variants={itemVariants}
                        >
                            Về Tôi - Lâm Huệ Trung
                        </motion.h1>
                        <motion.p
                            className="text-xl opacity-80 mb-6 leading-relaxed max-w-4xl mx-auto"
                            variants={itemVariants}
                        >
                            Một Fullstack Developer với hành trình từ những dòng code đầu tiên tại Đại học Trà Vinh <br></br> đến việc xây dựng các ứng dụng web hiện đại, tôi luôn nỗ lực mang lại giá trị qua công nghệ.
                        </motion.p>
                    </motion.section>

                    {/* Education Section */}
                    <motion.section
                        className="my-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2
                            className="text-3xl font-semibold text-purple-300 mb-6 text-center"
                            variants={itemVariants}
                        >
                            Học Vấn
                        </motion.h2>
                        <motion.div
                            className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                        >
                            <div className="flex items-start">
                                <FontAwesomeIcon icon={faUniversity} className="text-purple-300 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold text-purple-300 mb-2">Đại học Trà Vinh</h3>
                                    <p className="text-sm opacity-70 mb-2">Kỹ sư Công nghệ Thông tin, 2021 - 2025</p>
                                    <p className="text-sm opacity-70">
                                        Tại đây, tôi đã xây dựng nền tảng vững chắc về lập trình web, phát triển API, và quản lý dự án. Tôi tập trung vào các công nghệ như ReactJS, NodeJS, Express, Laravel, Dotnet và các mô hình như microservice, MVC và Clean Architecture, đồng thời rèn luyện kỹ năng làm việc nhóm qua các dự án thực tế.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.section>

                    {/* Technical Expertise Section */}
                    <motion.section
                        className="my-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2
                            className="text-3xl font-semibold text-purple-300 mb-6 text-center"
                            variants={itemVariants}
                        >
                            Chuyên Môn Kỹ Thuật
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                            >
                                <FontAwesomeIcon icon={faLaptopCode} className="text-purple-300 text-3xl mb-4" />
                                <h3 className="text-xl font-semibold text-purple-300 mb-2">Phát Triển Web</h3>
                                <p className="text-sm opacity-70">
                                    Thành thạo xây dựng giao diện với ReactJS, quản lý backend với NodeJS và Express, thiết kế RESTful API sử dụng JWT và bcrypt. Tôi cũng áp dụng MVC và Clean Architecture để đảm bảo mã nguồn sạch và dễ bảo trì.
                                </p>
                            </motion.div>
                            <motion.div
                                className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                            >
                                <FontAwesomeIcon icon={faLaptopCode} className="text-purple-300 text-3xl mb-4" />
                                <h3 className="text-xl font-semibold text-purple-300 mb-2">Quản Lý Dự Án</h3>
                                <p className="text-sm opacity-70">
                                    Sử dụng Scrum để quản lý quy trình phát triển, cùng với Git và GitHub để kiểm soát phiên bản. Tôi có kinh nghiệm xử lý lỗi, phân quyền người dùng, và tối ưu hóa hiệu suất ứng dụng.
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Journey & Achievements Section */}
                    <motion.section
                        className="my-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2
                            className="text-3xl font-semibold text-purple-300 mb-6 text-center"
                            variants={itemVariants}
                        >
                            Hành Trình & Thành Tựu
                        </motion.h2>
                        <div className="overflow-x-auto">
                            <Tree
                                lineWidth={'2px'}
                                lineColor={'#a855f7'}
                                lineBorderRadius={'10px'}
                                label={
                                    <motion.div
                                        className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                                        variants={itemVariants}
                                        // whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                                    >
                                        <h3 className="text-xl font-semibold text-purple-300">Hành Trình & Thành Tựu</h3>
                                    </motion.div>
                                }
                            >
                                {/* Achievements Branch */}
                                <TreeNode
                                    label={
                                        <motion.div
                                            className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                                            variants={itemVariants}
                                            // whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                                        >
                                            <h3 className="text-lg font-semibold text-purple-300">Thành Tựu</h3>
                                        </motion.div>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <motion.div
                                                className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                                                variants={itemVariants}
                                                // whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                                            >
                                                <div className="flex items-start">
                                                    <FontAwesomeIcon icon={faAward} className="text-purple-300 text-2xl mr-4" />
                                                    <div>
                                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Olympic Tin học</h4>
                                                        <p className="text-sm opacity-70 mb-2">2021 & 2023</p>
                                                        <p className="text-sm opacity-70">
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
                                                className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                                                variants={itemVariants}
                                                // whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                                            >
                                                <div className="flex items-start">
                                                    <FontAwesomeIcon icon={faLaptopCode} className="text-purple-300 text-2xl mr-4" />
                                                    <div>
                                                        <h4 className="text-md font-semibold text-purple-300 mb-2">Dự Án Thực Tế</h4>
                                                        <p className="text-sm opacity-70 mb-2">2021 - 2025</p>
                                                        <p className="text-sm opacity-70">
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
                                            className="relative p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                                            variants={itemVariants}
                                            // whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                                        >
                                            <h3 className="text-lg font-semibold text-purple-300">Kinh Nghiệm Làm Việc</h3>
                                        </motion.div>
                                    }
                                >
                                    <TreeNode
                                        label={
                                            <motion.div
                                                className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                                                variants={itemVariants}
                                                // whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                                            >
                                                <div className="flex items-start">
                                                    <div>
                                                        <h4 className="text-xl font-semibold text-purple-300 mb-2">TTS - 365EJSC</h4>
                                                        <p className="text-md opacity-70 mb-2">2024</p>
                                                        <p className="text-md opacity-70">
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
                                                className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_4px_20px_rgba(147,51,234,0.3)]"
                                                variants={itemVariants}
                                                // whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(147,51,234,0.5)' }}
                                            >
                                                <div className="flex items-start">
                                                    <FontAwesomeIcon icon={faBriefcase} className="text-purple-300 text-3xl mr-4" />
                                                    <div>
                                                        <h4 className="text-xl font-semibold text-purple-300 mb-2">Nhân Viên - Rynan Technologies</h4>
                                                        <p className="text-md opacity-70 mb-2">2025 - Hiện tại</p>
                                                        <p className="text-md opacity-70">
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
                        className="my-12 text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2
                            className="text-3xl font-semibold text-purple-300 mb-4"
                            variants={itemVariants}
                        >
                            Sẵn Sàng Hợp Tác
                        </motion.h2>
                        <motion.p
                            className="text-lg opacity-80 mb-6 max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            Bạn đang tìm kiếm một Fullstack Developer để biến ý tưởng thành hiện thực? Hãy liên hệ để chúng ta cùng tạo ra những sản phẩm công nghệ ấn tượng!
                        </motion.p>
                        <motion.button
                            onClick={() => navigate('/contact')}
                            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors duration-300 shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(147,51,234,0.5)' }}
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