import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/projects';
import energyWave from '/assets/energy-wave.png'; // Try direct import or just verify path

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 relative overflow-hidden">
            {/* Background Image - DEBUG MODE: Full Visibility */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
                {/* Visual debug indicator: Green border */}
                <div className="absolute inset-0 border-4 border-green-500 z-50 pointer-events-none opacity-50" />

                <img
                    src={energyWave}
                    alt="Background"
                    className="w-full h-full object-cover opacity-100 blur-none scale-100"
                />
            </div>

            {/* Spotlight Effect - Reduced opacity to see image better */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent-primary)] rounded-full blur-[120px] opacity-10 pointer-events-none z-0" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--accent-secondary)] rounded-full blur-[120px] opacity-10 pointer-events-none z-0" />

            <div className="max-w-4xl z-10 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                >
                    <span className="block text-[var(--text-primary)]">{profile.name} —</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] animate-gradient">
                        {profile.role}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed"
                >
                    {profile.tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-medium hover:bg-[var(--accent-secondary)] transition-colors shadow-lg shadow-[var(--accent-primary)]/25"
                    >
                        View Projects
                    </a>
                    <a
                        href="/assets/resume.pdf"
                        target="_blank"
                        className="px-8 py-3 glass-panel text-[var(--text-primary)] rounded-lg font-medium hover:bg-white/5 transition-colors border border-[var(--glass-border)]"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
