import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, className = '', variant = 'primary', href }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-2 rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
        primary: "bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500",
        outline: "border border-slate-300 text-slate-700 hover:border-sky-500 hover:text-sky-500 focus:ring-slate-400",
        ghost: "text-slate-600 hover:text-sky-500 hover:bg-slate-50",
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </Component>
    );
};

export default AnimatedButton;
