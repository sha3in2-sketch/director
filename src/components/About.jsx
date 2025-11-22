import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/projects';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '2+' },
        { label: 'Projects Completed', value: '15+' },
        { label: 'Cups of Coffee', value: '∞' },
    ];

    return (
        <section id="about" className="py-20 px-6 md:px-16 bg-[var(--bg-secondary)]/50 relative">
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
                        About Me
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                        {profile.bio}
                    </p>
                    <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed italic border-l-4 border-[var(--accent-primary)] pl-4">
                        "{profile.mantra}"
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {profile.passions.map((passion) => (
                            <span
                                key={passion}
                                className="px-4 py-2 rounded-full glass-panel text-sm text-[var(--text-primary)] hover:border-[var(--accent-secondary)] transition-colors cursor-default"
                            >
                                {passion}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass-panel p-6 rounded-xl text-center hover:bg-white/5 transition-colors"
                        >
                            <h3 className="text-4xl font-bold text-[var(--accent-primary)] mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-[var(--text-secondary)]">{stat.label}</p>
                        </motion.div>
                    ))}

                    {/* Toolbelt Preview */}
                    <div className="sm:col-span-2 glass-panel p-6 rounded-xl">
                        <h4 className="text-[var(--text-primary)] font-semibold mb-4 text-center">Tech Stack</h4>
                        <div className="flex justify-center gap-6 flex-wrap text-2xl text-[var(--text-secondary)]">
                            {/* Icons would go here, using text for now */}
                            <span>React</span>
                            <span>Tailwind</span>
                            <span>Framer</span>
                            <span>Arduino</span>
                            <span>Python</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
