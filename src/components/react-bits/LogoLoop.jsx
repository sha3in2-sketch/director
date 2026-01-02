import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const LogoLoop = ({
    logos = [],
    speed = 40,
    gap = 40,
    logoHeight = 40,
    fadeOut = true,
    pauseOnHover = true,
    scaleOnHover = true,
    ariaLabel = "Logo loop"
}) => {
    const containerRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const controls = useAnimationControls();

    const copies = 8;

    useEffect(() => {
        const startAnimation = async () => {
            await controls.start({
                x: "-50%",
                transition: {
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }
            });
        };

        if (!selectedImage) {
            startAnimation();
        } else {
            controls.stop();
        }
    }, [controls, speed, selectedImage]);

    const duplicatedLogos = Array(copies).fill(logos).flat();

    return (
        <>
            <div
                className="relative w-full overflow-hidden"
                role="region"
                aria-label={ariaLabel}
                ref={containerRef}
                onMouseEnter={() => pauseOnHover && !selectedImage && controls.stop()}
                onMouseLeave={() => pauseOnHover && !selectedImage && controls.start({
                    x: "-50%",
                    transition: {
                        duration: speed,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }
                })}
            >
                {/* Fade Out Masks */}
                {fadeOut && (
                    <>
                        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[--bg-primary] to-transparent z-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[--bg-primary] to-transparent z-10 pointer-events-none" />
                    </>
                )}

                <motion.div
                    className="flex w-max items-center"
                    style={{ columnGap: `${gap}px` }}
                    animate={controls}
                    initial={{ x: 0 }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(logo)}
                            className={`flex items-center justify-center transition-transform duration-300 cursor-pointer ${scaleOnHover ? "hover:scale-105 active:scale-95" : ""}`}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{ height: `${logoHeight}px`, width: "auto", maxWidth: "none" }}
                                className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-xl shadow-2xl p-4 flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex-1 overflow-auto flex items-center justify-center w-full min-h-0">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                />
                            </div>

                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold text-slate-800">
                                    {selectedImage.alt}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default LogoLoop;
