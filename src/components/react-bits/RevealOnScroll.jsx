import { motion } from 'framer-motion';

const RevealOnScroll = ({ children, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RevealOnScroll;
