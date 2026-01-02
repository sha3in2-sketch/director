import { motion } from 'framer-motion';

const PopUp = ({ children, delay = 0, duration = 0.5, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration,
                delay,
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default PopUp;
