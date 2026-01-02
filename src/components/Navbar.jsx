import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Research', path: '/research' },
        { name: 'Publications', path: '/publications' },
        { name: 'People', path: '/people' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'CV & Portfolio', path: '/cv' },
        { name: 'Open Positions', path: '/positions' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
                ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm'
                : 'bg-white/50 backdrop-blur-sm border-transparent py-4'
                }`}
        >
            <div className="mx-6 md:mx-10 flex items-center h-12">
                {/* Logo & Identity Container - Left Aligned */}
                <div className="flex items-center gap-6 mr-24 shrink-0">
                    {/* Real Logo - Removed circle, increased size */}
                    <div className="w-16 h-16 flex items-center justify-center">
                        <img src="/assets/logo_new.png" alt="ECSR Lab Logo" className="w-full h-full object-contain" />
                    </div>

                    <NavLink to="/" className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight whitespace-nowrap">
                        ECSR <span className="text-accent">Lab</span>
                    </NavLink>
                </div>

                {/* Desktop Navigation - Left Aligned next to identity */}
                <div className="hidden xl:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-[17px] font-medium transition-all duration-200 relative group py-1 ${isActive ? 'text-accent' : 'text-slate-600 hover:text-accent'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 opacity-50'}`}></span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button - Pushed to right */}
                <button
                    className="xl:hidden ml-auto text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-lg font-medium py-2 px-4 rounded-lg transition-colors ${isActive ? 'bg-accent/10 text-accent' : 'text-slate-600 hover:bg-slate-50 hover:text-accent'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
