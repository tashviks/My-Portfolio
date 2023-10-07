import { motion } from "framer-motion";

const AnimatePage = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      delay: 0.1,
      ease: [0, 0.71, 0.2, 1.01]}}
    >
    {children}
    </motion.div>
  );
};
export default AnimatePage;
