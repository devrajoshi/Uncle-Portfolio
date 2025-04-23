// Common animation variants for consistent use across components

// Staggered container animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Fade in animation (from bottom)
export const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

// Fade in animation (from left)
export const fadeInLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

// Fade in animation (from right)
export const fadeInRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

// Scale in animation
export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  transition: { type: "spring", stiffness: 300 }
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

// Card hover effect
export const cardHover = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0.2)" },
  hover: { 
    scale: 1.03, 
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    y: -5
  }
};

// Button animations
export const buttonAnimation = {
  tap: { scale: 0.95 },
  hover: { scale: 1.05 }
};

// List item stagger animation
export const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};

// Image reveal animation
export const imageReveal = {
  hidden: { 
    clipPath: "inset(0 100% 0 0)",
    opacity: 0
  },
  visible: { 
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

// Text character reveal animation
export const characterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
};