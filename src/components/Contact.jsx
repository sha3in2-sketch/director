import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { profile } from '../data/projects';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate EmailJS sending
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);

        // In production, use emailjs.sendForm here
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    };

    return (
        <section id="contact" className="py-20 px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
                        Get In Touch
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
                        Have a project in mind or just want to say hi? I'm always open to new ideas and collaborations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="glass-panel p-8 rounded-xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">Email</h3>
                                    <a href={`mailto:${profile.email}`} className="text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] transition-colors">
                                        {profile.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)]">
                                    <FiMapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">Location</h3>
                                    <p className="text-[var(--text-secondary)]">Planet Earth</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-xl text-center">
                            <p className="text-[var(--text-secondary)] mb-6">
                                Prefer a direct email?
                            </p>
                            <a
                                href={`mailto:${profile.email}`}
                                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg hover:bg-[var(--accent-primary)] hover:text-white transition-all"
                            >
                                <FiMail /> Send Email
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] outline-none transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full px-8 py-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : <><FiSend /> Send Message</>}
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
