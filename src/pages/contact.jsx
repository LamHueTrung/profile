import { motion } from 'framer-motion';
import SideBar from '../partials/sidebar';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faComment, faCopy } from '@fortawesome/free-solid-svg-icons';
import { faTiktok, faGithub as faGithubBrand, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

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

function Contact() {
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
    navigator.clipboard.writeText('lamhuetrung.dev@gmail.com');
    setCopyStatus('copied');
    setTimeout(() => setCopyStatus(null), 2000);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 relative overflow-hidden">
      <SideBar />
      <div className="flex-1 p-4 sm:p-6 md:p-8 text-white relative z-10">
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
              Liên Hệ Với Tôi
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Bạn có dự án hoặc ý tưởng cần hợp tác? Gửi tin nhắn hoặc kết nối qua các kênh bên dưới để cùng tạo ra điều tuyệt vời.
            </motion.p>
          </motion.section>

          {/* CONTACT GRID */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* FORM */}
            <motion.div
              className="w-full md:w-2/3 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_6px_20px_rgba(147,51,234,0.4)]"
              variants={itemVariants}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-200 mb-4 sm:mb-6">Gửi Tin Nhắn</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-purple-300 text-sm sm:text-base" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 rounded-lg bg-purple-950/30 text-white border border-purple-500 focus:outline-none focus:border-purple-400 transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-purple-300 text-sm sm:text-base" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 rounded-lg bg-purple-950/30 text-white border border-purple-500 focus:outline-none focus:border-purple-400 transition-colors duration-300 text-sm sm:text-base"
                    placeholder="Nhập email của bạn"
                    required
                  />
                </div>
                <div className="relative">
                  <FontAwesomeIcon icon={faComment} className="absolute left-3 top-3 text-purple-300 text-sm sm:text-base" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 rounded-lg bg-purple-950/30 text-white border border-purple-500 focus:outline-none focus:border-purple-400 transition-colors duration-300 text-sm sm:text-base"
                    rows="5"
                    placeholder="Nhập nội dung tin nhắn"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-300 shadow-xl font-semibold text-sm sm:text-base"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Gửi Tin Nhắn
                </motion.button>

                {submitStatus === 'warning' && (
                  <motion.p
                    className="text-xs sm:text-sm text-green-400 mt-2 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Chức năng này đang được phát triển.
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p
                    className="text-xs sm:text-sm text-red-400 mt-2 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Vui lòng điền đầy đủ thông tin!
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* INFO */}
            <motion.div
              className="w-full md:w-1/3 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-950/50 to-indigo-950/50 shadow-[0_6px_20px_rgba(147,51,234,0.4)]"
              variants={itemVariants}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-200 mb-4 sm:mb-6">Thông Tin Liên Hệ</h2>
              <div className="space-y-5 sm:space-y-6">
                <motion.div
                  className="flex items-center justify-between"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-purple-300 text-base" />
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
                  <FontAwesomeIcon icon={faTiktok} className="mr-3 text-purple-300 text-base" />
                  <span className="text-sm opacity-80">tiktok.com/@huetrungcoder</span>
                </motion.a>

                <motion.a
                  href="https://github.com/LamHueTrung"
                  className="flex items-center hover:text-purple-300 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <FontAwesomeIcon icon={faGithubBrand} className="mr-3 text-purple-300 text-base" />
                  <span className="text-sm opacity-80">github.com/LamHueTrung</span>
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/namphong.lam.12/"
                  className="flex items-center hover:text-purple-300 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <FontAwesomeIcon icon={faFacebookMessenger} className="mr-3 text-purple-300 text-base" />
                  <span className="text-sm opacity-80">facebook.com/LamHueTrung</span>
                </motion.a>
              </div>
            </motion.div>
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
              Hãy Kết Nối Với Tôi!
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-xl mx-auto"
              variants={itemVariants}
            >
              Tôi luôn sẵn sàng lắng nghe ý tưởng của bạn và cùng nhau tạo ra những giải pháp công nghệ tuyệt vời nhất.
            </motion.p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
