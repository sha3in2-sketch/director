import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiYoutube, FiMail } from 'react-icons/fi';
import { profile } from '../data/projects';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
    const navLinks = [
        { name: 'Work', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <aside className="hidden md:flex fixed left-0 top-0 h-screen w-[260px] flex-col bg-[var(--bg-secondary)] border-r border-[var(--glass-border)] z-50 p-8 justify-between">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--accent-primary)] border-b-[var(--accent-secondary)]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <img
                        src="/assets/profile.png"
                        alt={profile.name}
                        className="w-full h-full rounded-full object-cover border-4 border-[var(--bg-primary)] relative z-10"
                    />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-1">{profile.name}</h2>
                <p className="text-sm text-[var(--text-secondary)] mb-6">{profile.role}</p>

                {/* Social Icons */}
                <div className="flex gap-4 mb-8">
                    <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"><FiGithub size={20} /></a>
                    <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"><FiLinkedin size={20} /></a>
                    <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"><FiInstagram size={20} /></a>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4 w-full">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] hover:pl-2 transition-all duration-300 text-lg font-medium"
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="/assets/resume.pdf"
                    target="_blank"
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] hover:pl-2 transition-all duration-300 text-lg font-medium"
                >
                    Resume
                </a>
            </nav>

            {/* Footer/Toggle */}
            <div className="flex justify-between items-center mt-auto pt-8 border-t border-[var(--glass-border)]">
                <span className="text-xs text-[var(--text-secondary)]">© 2024</span>
                <ThemeToggle />
            </div>
        </aside>
    );
};

export default Sidebar;
