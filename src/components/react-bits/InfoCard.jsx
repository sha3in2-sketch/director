import { motion } from 'framer-motion';

const InfoCard = ({ title, children, className = '' }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`p-8 bg-white rounded-2xl border border-slate-100 transition-all duration-300 ${className}`}
        >
            <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>
            <div className="text-slate-600 leading-relaxed">
                {children}
            </div>
        </motion.div>
    );
};

export default InfoCard;
