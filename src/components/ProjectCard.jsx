import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-panel rounded-xl overflow-hidden group cursor-pointer relative"
            onClick={() => onClick(project)}
        >
            <div className="h-48 overflow-hidden relative">
                <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">View Details</span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-secondary)] transition-colors">
                        {project.title}
                    </h3>
                    <FiArrowUpRight className="text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors" />
                </div>

                <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-2">
                    {project.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--glass-border)]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
