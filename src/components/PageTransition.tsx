import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const pageVariants: Variants = {
  initial: (custom: { isBack: boolean }) => ({
    opacity: 0,
    y: custom.isBack ? -30 : 30,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      when: 'beforeChildren',
      staggerChildren: 0.1
    },
  },
  exit: (custom: { isBack: boolean }) => ({
    opacity: 0,
    y: custom.isBack ? 30 : -30,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Don't scroll on first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  // Determine if this is a back navigation
  const isBack = navigationType === 'POP';

  return (
    <AnimatePresence 
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={pathname}
        custom={{ isBack }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
