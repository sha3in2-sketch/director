import FadeIn from '../components/react-bits/FadeIn';
import RevealOnScroll from '../components/react-bits/RevealOnScroll';
import LogoLoop from '../components/react-bits/LogoLoop';
import AnimatedButton from '../components/react-bits/AnimatedButton';
import StaggeredFade from '../components/react-bits/StaggeredFade';
import SoftHoverCard from '../components/react-bits/SoftHoverCard';
import { ArrowRight, Zap, Thermometer, Battery } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import energyWave from '/assets/energy-wave.png'; // Direct import
import iitjLogo from '../assets/iitj-logo.png';

const Home = () => {
    const navigate = useNavigate();

    const sdgLogos = [
        { src: "/assets/sdg/sdg-4.png", alt: "SDG 4: Quality Education" },
        { src: "/assets/sdg/sdg-3.png", alt: "SDG 3: Good Health and Well-being" },
        { src: "/assets/sdg/sdg-6.png", alt: "SDG 6: Clean Water and Sanitation" },
        { src: "/assets/sdg/sdg-7.png", alt: "SDG 7: Affordable and Clean Energy" },
        { src: "/assets/sdg/sdg-9.png", alt: "SDG 9: Industry, Innovation and Infrastructure" },
        { src: "/assets/sdg/sdg-11.png", alt: "SDG 11: Sustainable Cities and Communities" },
        { src: "/assets/sdg/sdg-12.png", alt: "SDG 12: Responsible Consumption and Production" },
        { src: "/assets/sdg/sdg-13.png", alt: "SDG 13: Climate Action" },
        { src: "/assets/sdg/sdg-17.png", alt: "SDG 17: Partnerships for the Goals" }
    ];

    return (
        <div className="min-h-screen relative">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 z-0">
                    <img
                        src={energyWave}
                        alt="Background"
                        className="w-full h-full object-cover opacity-35 blur-[8px] scale-110 thermal-hover duration-700 hover:opacity-100"
                    />
                    {/* Strong overlay to wash out the image and ensure text readability */}
                    <div className="absolute inset-0 bg-white/70 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/85 z-20 transition-opacity duration-700 group-hover:opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <FadeIn delay={0.2}>
                        <img src={iitjLogo} alt="IIT Jodhpur" className="h-20 mb-4 inline-block drop-shadow-sm" />
                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight drop-shadow-sm">
                            Energy Conversion & <span className="text-gradient">Storage Research</span> Laboratory
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-xl text-slate-700 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                            Advancing sustainable energy conversion, storage, and thermal systems through rigorous interdisciplinary research.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <AnimatedButton
                                onClick={() => navigate('/research')}
                                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-lg shadow-sky-500/30 px-8 py-3"
                            >
                                Explore Research
                            </AnimatedButton>
                            <AnimatedButton
                                onClick={() => navigate('/publications')}
                                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-lg shadow-sky-500/30 px-8 py-3"
                            >
                                View Publications
                            </AnimatedButton>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <RevealOnScroll className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">Pioneering Sustainable Solutions</h2>
                        <div className="text-lg text-slate-600 leading-relaxed text-justify mb-10 space-y-6">
                            <p>
                                Energy conversion and storage technologies play a key role in the sustainable use of energy. At the Energy Conversion and Storage Research (ECSR) Lab, we design and develop thermal energy systems for efficient utilization of energy sources, their conversion, and storage, with particular reference to renewables. Our research aims to improve understanding of energy transport phenomena in thermal-fluid systems, hydraulic performance, improved process design, reduced energy consumption, and increased reliability, using both experimental and computational techniques. ECSR strongly emphasizes collaborative research with industry and institutions. Currently, we are collaborating with DRDO, IT Versum, KIT Germany, Space Research Institute Austria, Aalborg University Denmark, and Institute of Earth Physics and Space Science Hungary on various topics of global significance.
                            </p>
                            <p>
                                Our work contributes towards the following Sustainable Development Goals (SDGs):
                            </p>
                        </div>

                        <div className="mb-8">
                            <LogoLoop
                                logos={sdgLogos}
                                speed={75}
                                gap={100}
                                logoHeight={100}
                                fadeOut={true}
                                pauseOnHover={true}
                                scaleOnHover={true}
                                ariaLabel="Sustainable Development Goals"
                            />
                        </div>
                    </RevealOnScroll>

                    {/* Research Highlights */}
                    <StaggeredFade className="grid md:grid-cols-3 gap-8">
                        <SoftHoverCard
                            icon={Zap}
                            title="Energy Conversion"
                            description="Developing efficient systems for converting thermal and renewable energy into usable power."
                        />
                        <SoftHoverCard
                            icon={Battery}
                            title="Energy Storage"
                            description="Advanced research into battery technologies, thermal storage, and next-gen storage materials."
                        />
                        <SoftHoverCard
                            icon={Thermometer}
                            title="Thermal Management"
                            description="Innovative cooling solutions for electronics, batteries, and high-performance industrial systems."
                        />
                    </StaggeredFade>

                    <div className="text-center mt-16">
                        <RevealOnScroll>
                            <AnimatedButton variant="ghost" onClick={() => navigate('/positions')}>
                                <span className="flex items-center gap-2">
                                    We are hiring PhD Scholars & JRFs <ArrowRight size={16} />
                                </span>
                            </AnimatedButton>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
