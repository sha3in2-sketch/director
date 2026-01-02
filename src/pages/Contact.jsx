import FadeIn from '../components/react-bits/FadeIn';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="container mx-auto px-6 mb-20">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Contact Us</h1>
                    <div className="w-20 h-1 bg-accent mb-12"></div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12">
                    <FadeIn delay={0.2} className="space-y-8">
                        <div>
                            {/* Get in Touch heading removed */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent shadow-sm shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-700">Email</h4>
                                    <p className="text-slate-600">shobhana@iitj.ac.in</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent shadow-sm shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-700">Phone</h4>
                                    <p className="text-slate-600">+91-291-280-XXXX</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent shadow-sm shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-700">Address</h4>
                                    <p className="text-slate-600">
                                        Room No. XXX, Department of Mechanical Engineering<br />
                                        Indian Institute of Technology Jodhpur<br />
                                        NH 62, Nagaur Road, Karwar<br />
                                        Jodhpur 342037, Rajasthan, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0}>
                        <div className="bg-white p-4 rounded-xl shadow-lg h-96 relative overflow-hidden">
                            {/* Placeholder for Map */}
                            <iframe
                                title="Department of Mechanical Engineering, IITJ"
                                src="https://maps.google.com/maps?q=Department%20of%20Mechanical%20Engineering%2C%20IITJ%20NH%2065%2C%20Nagaur%20Road%2C%20Jodhpur%2C%20Jheepasani%2C%20Rajasthan%20342037&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="eager"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default Contact;
