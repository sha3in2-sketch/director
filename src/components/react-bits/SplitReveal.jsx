import { motion } from 'framer-motion';

const SplitReveal = ({ leftContent, rightContent, className = '' }) => {
    return (
        <div className={`grid md:grid-cols-2 gap-12 items-start ${className}`}>
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                {leftContent}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
                {rightContent}
            </motion.div>
        </div>
    );
};

export default SplitReveal;
