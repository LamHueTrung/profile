import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SideBar from '../partials/sidebar';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faComment, faCopy, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-solid-svg-icons';
import { faTiktok as faTiktok, faGithub as faGithubBrand, faFacebookMessenger as faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 }
  }
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: '0 6px 20px rgba(147, 51, 234, 0.5)' },
  tap: { scale: 0.95 }
};

function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState(null);
    const [copyStatus, setCopyStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 3000);
            return;
        }
        setSubmitStatus('warning');
        setTimeout(() => setSubmitStatus(null), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('lamhuutrung.dev@gmail.com');
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus(null), 2000);
    };

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
                            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 mb-6 text-center"
                            variants={itemVariants}
                        >
                            Liên Hệ Với Tôi
                        </motion.h1>
                        <motion.p
                            className="text-lg opacity-80 mb-10 leading-relaxed text-center max-w-2xl mx-auto"
                            variants={itemVariants}
                        >
                            Bạn có dự án hoặc ý tưởng cần hợp tác? Hãy gửi tin nhắn hoặc kết nối qua các kênh liên lạc dưới đây!
                        </motion.p>
                    </motion.section>
                    <motion.div
                        className="flex flex-col md:flex-row gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Contact Form */}
                        <motion.div
                            className="w-full md:w-2/3 p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_6px_25px_rgba(147,51,234,0.4)]"
                            variants={itemVariants}
                        >
                            <h2 className="text-2xl font-semibold text-purple-300 mb-6">Gửi Tin Nhắn</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    {/* <label className="block text-sm font-medium opacity-70 mb-2">Họ và Tên</label> */}
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faUser} className="absolute left-3 text-purple-300" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-3 py-2 rounded-lg bg-purple-950/30 text-white border border-purple-600 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                                            placeholder="Nhập họ và tên"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="relative">
                                    {/* <label className="block text-sm font-medium opacity-70 mb-2">Email</label> */}
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 text-purple-300" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-3 py-2 rounded-lg bg-purple-950/30 text-white border border-purple-600 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                                            placeholder="Nhập email của bạn"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="relative">
                                    {/* <label className="block text-sm font-medium opacity-70 mb-2">Tin Nhắn</label> */}
                                    <div className="flex items-start">
                                        <FontAwesomeIcon icon={faComment} className="absolute left-3 mt-2 text-purple-300" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full pl-10 pr-3 py-2 rounded-lg bg-purple-950/30 text-white border border-purple-600 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                                            rows="5"
                                            placeholder="Nhập nội dung tin nhắn"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors duration-300 font-medium"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Gửi Tin Nhắn
                                </motion.button>
                                {submitStatus === 'warning' && (
                                    <motion.p
                                        className="text-sm text-green-400 mt-2 text-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        Chức năng này đang được phát triển.
                                    </motion.p>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.p
                                        className="text-sm text-red-400 mt-2 text-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        Vui lòng điền đầy đủ thông tin!
                                    </motion.p>
                                )}
                            </form>
                        </motion.div>
                        {/* Contact Info */}
                        <motion.div
                            className="w-full md:w-1/3 p-6 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_6px_25px_rgba(147,51,234,0.4)]"
                            variants={itemVariants}
                        >
                            <h2 className="text-2xl font-semibold text-purple-300 mb-6">Thông Tin Liên Hệ</h2>
                            <div className="space-y-5">
                                <motion.div
                                    className="flex items-center justify-between"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <div className="flex items-center">
                                        <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-purple-300" />
                                        <p className="text-sm opacity-80">lamhuetrung.dev@gmail.com</p>
                                    </div>
                                    <motion.button
                                        onClick={handleCopyEmail}
                                        className="text-purple-300 hover:text-purple-200 transition-colors duration-300"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <FontAwesomeIcon icon={faCopy} />
                                    </motion.button>
                                    {copyStatus === 'copied' && (
                                        <motion.span
                                            className="text-xs text-green-400 ml-2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            Đã sao chép!
                                        </motion.span>
                                    )}
                                </motion.div>
                                <motion.a
                                    href="https://www.tiktok.com/@huetrungcoder"
                                    className="flex items-center hover:text-purple-300 transition-colors duration-300"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <FontAwesomeIcon icon={faTiktok} className="mr-3 text-purple-300" />
                                    <span className="text-sm opacity-80">https://www.tiktok.com/@huetrungcoder</span>
                                </motion.a>
                                <motion.a
                                    href="http://github.com/LamHueTrung"
                                    className="flex items-center hover:text-purple-300 transition-colors duration-300"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <FontAwesomeIcon icon={faGithubBrand} className="mr-3 text-purple-300" />
                                    <span className="text-sm opacity-80">github.com/LamHueTrung</span>
                                </motion.a>
                                <motion.a
                                    href="https://www.facebook.com/namphong.lam.12/"
                                    className="flex items-center hover:text-purple-300 transition-colors duration-300"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <FontAwesomeIcon icon={faFacebookMessenger} className="mr-3 text-purple-300" />
                                    <span className="text-sm opacity-80">facebook.com/LamHueTrung</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Contact;