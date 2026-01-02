import { motion } from 'framer-motion';
import React from 'react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const AnimatedCardGrid = ({ children, className = '' }) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCardGrid;
