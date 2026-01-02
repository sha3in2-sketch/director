import { motion } from 'framer-motion';

const SoftHoverCard = ({ title, description, icon: Icon, className = '' }) => {
    return (
        <motion.div
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 group ${className}`}
        >
            {Icon && (
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <Icon size={28} className="drop-shadow-sm" />
                </div>
            )}
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </motion.div>
    );
};

export default SoftHoverCard;
