import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ year, items }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mb-6 border-b border-slate-100 pb-6 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left py-2 group"
            >
                <span className="text-3xl font-bold text-slate-800 group-hover:text-accent transition-colors">{year}</span>
                {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 space-y-6">
                            {items.map((pub, idx) => (
                                <div key={idx} className="pl-4 border-l-2 border-slate-100 hover:border-accent transition-colors">
                                    <p className="font-semibold text-slate-800">{pub.title}</p>
                                    <p className="text-slate-600 text-sm mt-1">{pub.authors}</p>
                                    <div className="flex items-center gap-4 mt-2">
                                        <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded">{pub.venue}</span>
                                        {pub.link && (
                                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">
                                                View Publication
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const AccordionList = ({ data }) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            {Object.entries(data).sort(([a], [b]) => b - a).map(([year, items]) => (
                <AccordionItem key={year} year={year} items={items} />
            ))}
        </div>
    );
};

export default AccordionList;
