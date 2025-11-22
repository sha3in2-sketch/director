import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[var(--text-primary)]">
                    Selected Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[var(--bg-secondary)] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--glass-border)] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--accent-primary)] transition-colors z-10"
                            >
                                <FiX size={24} />
                            </button>

                            <div className="h-64 md:h-96 w-full relative">
                                <img
                                    src={selectedProject.img}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />
                            </div>

                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
                                    {selectedProject.title}
                                </h2>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag) => (
                                        <span key={tag} className="text-sm px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                                    {selectedProject.description}
                                </p>

                                {/* Arduino Demo Visualization */}
                                {selectedProject.id === 1 && (
                                    <div className="mb-8 p-6 glass-panel rounded-xl border border-[var(--accent-primary)]/30">
                                        <h4 className="text-[var(--text-primary)] font-semibold mb-4">Interactive Demo Preview</h4>
                                        <div className="flex justify-center gap-4">
                                            <motion.div
                                                animate={{ backgroundColor: ["#333", "#ef4444", "#333"] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                                className="w-12 h-12 rounded-full border-2 border-gray-600"
                                            />
                                            <motion.div
                                                animate={{ backgroundColor: ["#333", "#22c55e", "#333"] }}
                                                transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
                                                className="w-12 h-12 rounded-full border-2 border-gray-600"
                                            />
                                            <motion.div
                                                animate={{ backgroundColor: ["#333", "#3b82f6", "#333"] }}
                                                transition={{ duration: 1, delay: 1, repeat: Infinity }}
                                                className="w-12 h-12 rounded-full border-2 border-gray-600"
                                            />
                                        </div>
                                        <p className="text-center text-xs text-[var(--text-secondary)] mt-2">LED Sequence Simulation</p>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h4 className="text-[var(--text-primary)] font-semibold mb-3">Tools Used</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {selectedProject.tools?.map(tool => (
                                            <div key={tool} className="flex items-center gap-2 text-[var(--text-secondary)]">
                                                <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                                                {tool}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-medium hover:bg-[var(--accent-secondary)] transition-colors"
                                    >
                                        <FiExternalLink /> Live Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 px-6 py-3 glass-panel text-[var(--text-primary)] rounded-lg font-medium hover:bg-white/5 transition-colors"
                                    >
                                        <FiGithub /> View Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
