import { motion } from 'framer-motion';

const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
};

const ProfileCard = ({ name, role, research, image, isPrincipal = false }) => {
    return (
        <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className={`bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 ${isPrincipal ? 'md:flex md:items-center p-0' : 'p-6'}`}
        >
            {isPrincipal ? (
                <>
                    <div className="md:w-1/3 aspect-square md:aspect-auto h-full relative overflow-hidden">
                        {/* Placeholder for image if not present, but expecting image prop */}
                        <div className="w-full h-full bg-slate-200">
                            {image && <img src={image} alt={name} className="w-full h-full object-cover" />}
                        </div>
                    </div>
                    <div className="p-8 md:w-2/3">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{name}</h3>
                        <p className="text-accent font-medium mb-4">{role}</p>
                        <p className="text-slate-600 mb-6 leading-relaxed">{research}</p>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full mb-4 overflow-hidden">
                        {image ? <img src={image} alt={name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-slate-300">N/A</div>}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{name}</h3>
                    <p className="text-sm text-accent mb-2">{role}</p>
                    {research && <p className="text-xs text-slate-500">{research}</p>}
                </div>
            )}
        </motion.div>
    );
};

export default ProfileCard;
