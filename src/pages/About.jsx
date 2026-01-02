import FadeIn from '../components/react-bits/FadeIn';
import SplitReveal from '../components/react-bits/SplitReveal';
import RevealOnScroll from '../components/react-bits/RevealOnScroll';
import InfoCard from '../components/react-bits/InfoCard';
import FadeInSection from '../components/react-bits/FadeInSection';

const About = () => {
    return (
        <div className="pt-24 min-h-screen">
            <div className="container mx-auto px-6 mb-20">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Us</h1>
                    <div className="w-20 h-1 bg-accent mb-12"></div>
                </FadeIn>

                <div className="mb-24">
                    <SplitReveal
                        leftContent={
                            <div>
                                <h2 className="text-3xl font-bold text-slate-800 mb-4">Principal Investigator</h2>
                                <h3 className="text-xl text-accent font-medium mb-6">Dr. Shobhana Singh</h3>
                                <div className="space-y-4 text-slate-700 leading-relaxed text-[17px]">
                                    <p>
                                        Dr. Shobhana Singh is an experienced researcher and Associate professor in the Department of Mechanical Engineering at IIT Jodhpur. She received her Ph.D. from IIT Delhi and spent six years abroad working as postdoc and Assistant Professor at Arizona State University, USA, and Aalborg University, Denmark.
                                    </p>
                                    <p>
                                        She has over twelve years of research and teaching experience, focusing on energy systems that facilitates the transition towards sustainability by designing and optimizing thermal systems as critical units for energy generation, management, and storage. At the Energy Conversion and Storage Research (ECSR) Lab, her team develops computational numerical models of energy systems and components, as well as their applications.
                                    </p>
                                    <p>
                                        Another focus area is transitioning to smarter and sustainable solutions to water supply. She works on various aspects of water management, such as real-time monitoring and analysis of water distribution, hydraulic modeling to simulate critical scenarios, and developing Digital Twins that replicate real system in virtual models that serve as the basis for experimentation on drinking water distribution networks. Experimental research at ECSR includes facilities for performance tests on thermoelectric generator for waste heat recovery, research on heat transfer in energy storage systems and heat exchangers.
                                    </p>
                                    <p>
                                        Beyond scholarly activities, she is also committed to contributing to society and serves at multiple positions, including Editorial Board Member at Nature-Scientific Reports, Treasurer of ASME's Women in Engineering Group India, Principal Member in the Mechanical Engineering Division at the Bureau of Indian Standards, Executive Director at spin-off Medvocare Pvt. Ltd. India, and Research Expert at ITVersum KG, Austria.
                                    </p>
                                </div>
                            </div>
                        }
                        rightContent={
                            <div className="flex justify-end pr-4 md:pr-10">
                                <div className="relative aspect-[3/4] w-48 rounded-xl overflow-hidden shadow-lg">
                                    <img
                                        src="/assets/pi_new.png"
                                        alt="Dr. Shobhana Singh"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>

                <FadeInSection>
                    <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">Lab Vision</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <InfoCard title="Innovation">
                            <p>
                                To develop efficient, scalable, and environmentally sustainable energy solutions that address global energy needs. We focus on cutting-edge research in thermal management and renewable integration.
                            </p>
                        </InfoCard>
                        <InfoCard title="Mentorship">
                            <p>
                                To train the next generation of engineers and researchers in rigorous experimental and analytical techniques. We foster an environment of curiosity, integrity, and interdisciplinary collaboration.
                            </p>
                        </InfoCard>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default About;
