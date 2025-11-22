import React from 'react';
import { profile } from '../data/projects';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-[var(--glass-border)] bg-[var(--bg-secondary)] text-center">
            <p className="text-[var(--text-secondary)] text-sm">
                Made with <span className="text-red-500">❤️</span> — {profile.name}
            </p>
            <p className="text-[var(--text-secondary)] text-xs mt-2 opacity-60">
                © {new Date().getFullYear()} All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
