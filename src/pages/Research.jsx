import FadeIn from '../components/react-bits/FadeIn';
import HoverLiftCard from '../components/react-bits/HoverLiftCard';
import AnimatedCardGrid from '../components/react-bits/AnimatedCardGrid';

const Research = () => {

    const ongoingProjects = [
        {
            title: "AIoT-based Water Monitoring Technologies",
            description:
                "Development of intelligent water monitoring systems using AI and IoT for large-scale applications.",
            applications: [
                "DRDO-funded (2024)",
                "Role: Co-PI",
                "Project Cost: ~ INR 5 Cr"
            ]
        },
        {
            title: "Hybrid Solar Thermal Power and Desalination Plant",
            description:
                "Design of a novel hybrid solar thermal system integrated with desalination for remote and off-grid regions.",
            applications: [
                "Funded by DST (2023)",
                "Role: Co-PI",
                "Project Cost: INR 1.47 Cr"
            ]
        },
        {
            title: "Frugal Oral Care Irrigation Device",
            description:
                "Development of a cost-effective oral care irrigation device to reduce the risk of ventilator-associated pneumonia.",
            applications: [
                "Funded by MSME (2023)",
                "Role: PI",
                "Project Cost: INR 15 Lakh"
            ]
        },
        {
            title: "Pressure Ulcer Prevention Mattress",
            description:
                "Design of a vented, horizontally laid air-column mattress for preventing pressure ulcers in critically ill patients.",
            applications: [
                "Funded by MSME (2023)",
                "Role: PI",
                "Project Cost: INR 15 Lakh"
            ]
        },
        {
            title: "Thermoelectric Heat Exchanger Design",
            description:
                "Multiphysics simulations for designing efficient heat exchangers for automotive thermoelectric generators.",
            applications: [
                "Funded by DRDO",
                "Role: PI",
                "Project Period: 2021–2023",
                "Project Cost: INR 15.18 Lakh"
            ]
        },
        {
            title: "Automotive Thermoelectric Power Generators",
            description:
                "Development of advanced designs for thermoelectric power generators for exhaust energy recovery.",
            applications: [
                "Seed Grant, IIT Jodhpur",
                "Role: PI",
                "Project Period: 2021–2024",
                "Project Cost: INR 25 Lakh"
            ]
        }
    ];

    const completedProjects = [
        {
            title: "Smart Graded-Water Supply Grid",
            description:
                "Design and deployment of a smart graded-water supply grid for efficient water distribution.",
            applications: [
                "Funded by JCKIC",
                "Role: PI",
                "Project Period: 2021–2023"
            ]
        },
        {
            title: "Ice-Freezing Type Heat Exchanger",
            description:
                "Design and optimization of ice-freezing heat exchangers focusing on size, weight, and power reduction.",
            applications: [
                "Funded by DRDO (DLJ)",
                "Role: Co-PI",
                "Project Period: 2020–2022"
            ]
        },
        {
            title: "Thermal Energy Storage for Energy Conservation",
            description:
                "Investigation of thermal energy storage solutions to enhance energy conservation.",
            applications: [
                "ASEM-DUO Fellowship Programme",
                "Role: PI",
                "Project Period: 2021–2022"
            ]
        },
        {
            title: "Local Heating Concepts for Power Balancing",
            description:
                "Research on localized heating strategies for grid power balancing.",
            applications: [
                "Funded by ForskEL – Energy Storage & Integration",
                "Role: Member",
                "Project Period: 2017–2019"
            ]
        },
        {
            title: "Steam Concrete Storage",
            description:
                "Development of concrete-based thermal storage for steam generation applications.",
            applications: [
                "Funded by EUDP",
                "Role: Member",
                "Project Period: 2017"
            ]
        },
        {
            title: "Advanced Thermodynamic Cycles (THERMCYC)",
            description:
                "Research on advanced thermodynamic cycles utilizing low-temperature heat sources.",
            applications: [
                "Funded by EUDP",
                "Role: Member",
                "Project Period: 2014–2017"
            ]
        },
        {
            title: "Electrochemical CO₂ Capture and Release",
            description:
                "Energy-efficient electrochemical systems for CO₂ capture and release.",
            applications: [
                "Funded by DOE (USA) – ARPA-E",
                "Role: Member",
                "Project Period: 2013–2016"
            ]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[#F7F9FB]">
            <div className="container mx-auto px-6 mb-24">

                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Sponsored Research Projects
                    </h1>
                    <div className="w-20 h-1 bg-accent mb-12"></div>
                    <p className="text-xl text-slate-600 max-w-4xl mb-20 leading-relaxed">
                        Our research activities are supported by national and international funding agencies
                        and span fundamental studies to applied engineering solutions.
                    </p>
                </FadeIn>

                {/* ================= ONGOING PROJECTS ================= */}
                <FadeIn>
                    <h2 className="text-3xl font-bold text-slate-800 mb-10">
                        Ongoing Projects
                    </h2>
                </FadeIn>

                <AnimatedCardGrid>
                    {ongoingProjects.map((project, index) => (
                        <HoverLiftCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            applications={project.applications}
                        />
                    ))}
                </AnimatedCardGrid>

                {/* ================= COMPLETED PROJECTS ================= */}
                <FadeIn>
                    <h2 className="text-3xl font-bold text-slate-800 mt-24 mb-10">
                        Completed Projects
                    </h2>
                </FadeIn>

                <AnimatedCardGrid>
                    {completedProjects.map((project, index) => (
                        <HoverLiftCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            applications={project.applications}
                        />
                    ))}
                </AnimatedCardGrid>

            </div>
        </div>
    );
};

export default Research;
