import { motion } from 'framer-motion'
import AnimatedBackground from '../components/AnimatedBackground'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatedBackground />
      <HeroSection />
    </motion.div>
  )
}
