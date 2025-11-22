import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { profile } from '../data/projects';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Work', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--glass-border)] z-50 flex items-center justify-between px-6">
                <span className="font-bold text-lg text-[var(--text-primary)]">{profile.name}</span>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(true)} className="text-[var(--text-primary)]">
                        <FiMenu size={24} />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-[var(--bg-secondary)] flex flex-col p-8 md:hidden"
                    >
                        <div className="flex justify-end mb-12">
                            <button onClick={() => setIsOpen(false)} className="text-[var(--text-primary)]">
                                <FiX size={24} />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-8 text-2xl font-bold text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-[var(--text-primary)] hover:text-[var(--accent-primary)]"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/assets/resume.pdf"
                                target="_blank"
                                className="text-[var(--text-primary)] hover:text-[var(--accent-primary)]"
                            >
                                Resume
                            </a>
                        </nav>

                        <div className="mt-auto flex justify-center gap-8">
                            <a href={profile.social.github} className="text-[var(--text-secondary)]"><FiGithub size={24} /></a>
                            <a href={profile.social.linkedin} className="text-[var(--text-secondary)]"><FiLinkedin size={24} /></a>
                            <a href={profile.social.instagram} className="text-[var(--text-secondary)]"><FiInstagram size={24} /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
