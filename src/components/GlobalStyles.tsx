import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GlobalStyles = () => {
  const location = useLocation();

  // Add mobile-specific styles
  useEffect(() => {
    // Prevent zoom on input focus on mobile
    const handleTouchStart = (e: TouchEvent) => {
      // Prevent double-tap zoom
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: false });

    // Clean up
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Inline styles that should be applied globally
  const styles = `
    /* Prevent text size adjustment on mobile */
    html {
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
    }
    
    /* Better touch handling for mobile */
    button, a, input, textarea, select, label, [role="button"] {
      touch-action: manipulation;
    }
    
    /* Improve tap targets on mobile */
    @media (max-width: 768px) {
      button, a[role="button"], input[type="button"], input[type="submit"] {
        min-height: 44px;
        min-width: 44px;
      }
    }
    
    /* Smooth scrolling for mobile */
    html {
      scroll-behavior: smooth;
    }
    
    @media (prefers-reduced-motion: reduce) {
      html {
        scroll-behavior: auto;
      }
    }
  `;

  return <style>{styles}</style>;
};

export default GlobalStyles;
