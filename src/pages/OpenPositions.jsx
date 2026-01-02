import FadeIn from '../components/react-bits/FadeIn';
import RevealOnScroll from '../components/react-bits/RevealOnScroll';
import InfoCard from '../components/react-bits/InfoCard';
import AnimatedButton from '../components/react-bits/AnimatedButton';
import { ExternalLink } from 'lucide-react';

const OpenPositions = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#F7F9FB]">
            <div className="container mx-auto px-6 mb-20">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Open Positions
                    </h1>
                    <div className="w-20 h-1 bg-accent mb-12"></div>

                    <p className="text-xl text-slate-600 max-w-3xl mb-16 leading-relaxed">
                        The Energy Conversion and Storage Research (ECSR) Lab at IIT Jodhpur
                        invites applications from motivated and academically strong candidates
                        to join sponsored and collaborative research projects.
                    </p>
                </FadeIn>

                <div className="space-y-12">

                    {/* JRF & PhD Positions */}
                    <RevealOnScroll>
                        <InfoCard title="JRF & Ph.D. Positions" className="border-l-4 border-l-accent">
                            <p className="mb-4">
                                The ECSR Lab is seeking academically bright candidates for fully funded
                                <strong> Junior Research Fellow (JRF)</strong> and <strong>Ph.D.</strong> positions
                                under a sponsored research project involving <strong>Indo-German collaboration</strong>
                                with KIT, Germany.
                            </p>

                            <h4 className="font-bold text-slate-800 mb-2">Eligible Disciplines:</h4>
                            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                                <li>Mechanical Engineering</li>
                                <li>Design and Manufacturing</li>
                                <li>Materials Science & Engineering</li>
                                <li>Metallurgical & Materials Engineering</li>
                                <li>Aerospace Engineering</li>
                                <li>Physics</li>
                            </ul>

                            <h4 className="font-bold text-slate-800 mb-2">Qualifications:</h4>
                            <p className="mb-6">
                                B.Tech / B.E. / M.Tech / M.E. / M.Sc. with a strong academic record.
                                Preference will be given to candidates with <strong>NET/GATE</strong> qualification.
                            </p>

                            <h4 className="font-bold text-slate-800 mb-2">Research Exposure:</h4>
                            <p className="mb-6">
                                Selected candidates will gain hands-on research experience by working
                                with interdisciplinary teams at <strong>IIT Jodhpur</strong> and
                                <strong> Karlsruhe Institute of Technology (KIT), Germany</strong>,
                                enhancing skills for future academic or professional careers.
                            </p>

                            <AnimatedButton href="mailto:shobhana@iitj.ac.in?subject=Application%20for%20the%20position%20of%20JRF%20or%20Ph.D">
                                Apply via Email
                            </AnimatedButton>
                        </InfoCard>
                    </RevealOnScroll>

                    {/* B.Tech / M.Tech Projects & Internships */}
                    <RevealOnScroll>
                        <InfoCard title="JRF & Ph.D. Positions" className="border-l-4 border-l-accent">
                            <p className="mb-4">
                                The Energy Conversion and Storage Research (ECSR) Lab at IIT Jodhpur
                                is seeking academically bright candidates for fully funded
                                <strong> Junior Research Fellow (JRF)</strong> and
                                <strong> Ph.D.</strong> positions under a sponsored research project
                                with <strong>Indo-German collaboration</strong> involving KIT, Germany.
                            </p>

                            <h4 className="font-bold text-slate-800 mb-2">Eligible Disciplines:</h4>
                            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                                <li>Mechanical Engineering</li>
                                <li>Design and Manufacturing</li>
                                <li>Materials Science & Engineering</li>
                                <li>Metallurgical & Materials Engineering</li>
                                <li>Aerospace Engineering</li>
                                <li>Physics</li>
                            </ul>

                            <h4 className="font-bold text-slate-800 mb-2">Qualifications:</h4>
                            <p className="mb-6">
                                B.Tech / B.E. / M.Tech / M.E. / M.Sc. with a strong academic record.
                                Preference will be given to candidates with <strong>NET/GATE</strong>
                                qualification.
                            </p>

                            <h4 className="font-bold text-slate-800 mb-2">Research Exposure:</h4>
                            <p className="mb-6">
                                Selected candidates will work with interdisciplinary teams at
                                <strong> IIT Jodhpur</strong> and
                                <strong> Karlsruhe Institute of Technology (KIT), Germany</strong>,
                                gaining strong experimental and computational research experience.
                            </p>

                            {/* Email CTA */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <AnimatedButton href="mailto:shobhana@iitj.ac.in?subject=Application%20for%20the%20position%20of%20JRF%20or%20Ph.D">
                                    Apply via Email
                                </AnimatedButton>

                                <a
                                    href="mailto:shobhana@iitj.ac.in?subject=Application%20for%20the%20position%20of%20JRF%20or%20Ph.D"
                                    className="text-accent font-medium hover:underline flex items-center gap-2"
                                >
                                    shobhana@iitj.ac.in <ExternalLink size={16} />
                                </a>
                            </div>
                        </InfoCard>
                    </RevealOnScroll>


                </div>
            </div>
        </div>
    );
};

export default OpenPositions;