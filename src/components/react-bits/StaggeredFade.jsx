import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const StaggeredFade = ({ children, className = '' }) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {React.Children.map(children, (child) => (
                <motion.div variants={item}>{child}</motion.div>
            ))}
        </motion.div>
    );
};
import React from 'react';
export default StaggeredFade;
