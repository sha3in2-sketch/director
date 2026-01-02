import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, subtitle, description, isLast }) => {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                {!isLast && <div className="w-0.5 flex-1 bg-slate-200 my-2"></div>}
            </div>
            <div className="pb-12">
                <span className="text-sm font-bold text-accent tracking-wider">{year}</span>
                <h3 className="text-xl font-bold text-slate-800 mt-1">{title}</h3>
                <p className="text-slate-500 font-medium mb-2">{subtitle}</p>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{description}</p>
            </div>
        </div>
    );
};

const VerticalTimeline = ({ items }) => {
    return (
        <div className="max-w-3xl mx-auto py-8">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <TimelineItem {...item} isLast={index === items.length - 1} />
                </motion.div>
            ))}
        </div>
    );
};

export default VerticalTimeline;
