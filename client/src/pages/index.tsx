import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.h1
      initial={{ x: 0, y: 0 }}
      animate={{ x: 10, y: 10, rotate: 360 }}
      transition={{
        ease: 'easeOut',
        duration: 1,
      }}
    >
      Nextjs
    </motion.h1>
  );
}
