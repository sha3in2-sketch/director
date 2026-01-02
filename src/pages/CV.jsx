import FadeIn from '../components/react-bits/FadeIn';
import VerticalTimeline from '../components/react-bits/VerticalTimeline';
import AnimatedButton from '../components/react-bits/AnimatedButton';
import { Download } from 'lucide-react';

const CV = () => {
    const timelineData = [
        {
            year: "2024 - Present",
            title: "Assistant Professor",
            subtitle: "Indian Institute of Technology Jodhpur",
            description: "Leading the ECSR Lab, teaching core mechanical engineering courses, and supervising PhD/M.Tech students."
        },
        {
            year: "2022 - 2024",
            title: "Post-Doctoral Fellow",
            subtitle: "Renowned International University",
            description: "Conducted research on next-generation energy storage materials and thermal management of electric vehicles."
        },
        {
            year: "2018 - 2022",
            title: "Ph.D. in Mechanical Engineering",
            subtitle: "Top Tier Institute",
            description: "Thesis: 'Advanced Thermal Management Strategies for High-Power Density Electronics'. Awarded Best Thesis Award."
        },
        {
            year: "2016 - 2018",
            title: "M.Tech in Thermal Engineering",
            subtitle: "Indian Institute of Technology",
            description: "Specialization in Heat Transfer and Fluid Mechanics. GPA: 9.5/10."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="container mx-auto px-6 mb-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">CV & Portfolio</h1>
                        <div className="w-20 h-1 bg-accent mt-6"></div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <AnimatedButton>
                            <span className="flex items-center gap-2">
                                <Download size={18} /> Download Full CV
                            </span>
                        </AnimatedButton>
                    </FadeIn>
                </div>

                <VerticalTimeline items={timelineData} />
            </div>
        </div>
    );
};

export default CV;
