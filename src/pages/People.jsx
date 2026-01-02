import FadeIn from '../components/react-bits/FadeIn';
import GridReveal from '../components/react-bits/GridReveal';
import ProfileCard from '../components/react-bits/ProfileCard';

const People = () => {
    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="container mx-auto px-6 mb-20">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Team</h1>
                    <div className="w-20 h-1 bg-accent mb-12"></div>
                </FadeIn>

                {/* Principal Investigator */}
                <div className="mb-20">
                    <ProfileCard
                        isPrincipal={true}
                        name="Dr. [Full Name]"
                        role="Principal Investigator"
                        research="Leading the research group with a focus on sustainable energy technologies. PhD from [Top University], Post-doc from [Top University]. Expertise in experimental thermodynamics and computational fluid dynamics."
                        image="" // Placeholder
                    />
                </div>

                {/* PhD Scholars */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-accent">PhD Scholars</h2>
                    <GridReveal>
                        <ProfileCard name="Student Name" role="PhD Scholar" research="Thermal Energy Storage" />
                        <ProfileCard name="Student Name" role="PhD Scholar" research="Battery Thermal Management" />
                        <ProfileCard name="Student Name" role="PhD Scholar" research="Renewable Energy Integration" />
                    </GridReveal>
                </div>

                {/* Masters Students */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-accent-green">M.Tech Students</h2>
                    <GridReveal>
                        <ProfileCard name="Student Name" role="M.Tech Scholar" research="Solar Thermal Systems" />
                        <ProfileCard name="Student Name" role="M.Tech Scholar" research="Fluid Mechanics" />
                    </GridReveal>
                </div>

                {/* Alumni */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-slate-400">Alumni</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <h4 className="font-bold text-slate-700">Name Here</h4>
                            <p className="text-xs text-slate-500">PhD, 2023</p>
                            <p className="text-xs text-accent">Now at: Company/Univ</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <h4 className="font-bold text-slate-700">Name Here</h4>
                            <p className="text-xs text-slate-500">M.Tech, 2022</p>
                            <p className="text-xs text-accent">Now at: Company/Univ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;
