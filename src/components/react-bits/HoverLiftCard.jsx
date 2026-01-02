import { motion } from 'framer-motion';

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const HoverLiftCard = ({ title, description, applications, onClick, className = '' }) => {
    return (
        <motion.div
            variants={item}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            onClick={onClick}
            className={`p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}
        >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>

            {applications && (
                <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Applications</h4>
                    <ul className="space-y-2">
                        {applications.map((app, index) => (
                            <li key={index} className="text-slate-500 text-sm flex items-center">
                                <span className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></span>
                                {app}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </motion.div>
    );
};

export default HoverLiftCard;
