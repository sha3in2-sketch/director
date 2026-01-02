import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const ImageWithRevealCaption = ({ src, alt, caption, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <figure
                className={`relative group overflow-hidden rounded-xl cursor-pointer ${className}`}
                onClick={() => setIsOpen(true)}
            >
                <div className="overflow-hidden aspect-video bg-slate-100">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        src={src}
                        alt={alt}
                        className="w-full h-full object-contain p-2"
                    />
                </div>
                <motion.figcaption
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3 text-sm text-slate-500 italic text-center"
                >
                    {caption}
                </motion.figcaption>
            </figure>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-xl shadow-2xl p-2 flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex-1 overflow-auto flex items-center justify-center min-h-0">
                                <img
                                    src={src}
                                    alt={alt}
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                />
                            </div>

                            <div className="p-4 text-center bg-white">
                                <p className="text-lg font-medium text-slate-800">
                                    {caption}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageWithRevealCaption;
