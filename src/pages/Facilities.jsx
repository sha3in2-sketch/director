import FadeIn from '../components/react-bits/FadeIn';
import ImageWithRevealCaption from '../components/react-bits/ImageWithRevealCaption';
import FadeInSection from '../components/react-bits/FadeInSection';

const Facilities = () => {
    const facilities = [
        {
            src: "/assets/facilities-1.png",
            alt: "Thermoelectric Generator (TEG) for Waste Heat Recovery",
            caption: "Thermoelectric Generator (TEG) for Waste Heat Recovery: Testbench for the Charaterization of TEGs"
        },
        {
            src: "/assets/facilities-2.jpg",
            alt: "Heat Transfer Laboratory",
            caption: "Heat Transfer Lab in the Department of Mechanical Engineering"
        },
        {
            src: "/assets/facilities-3.png",
            alt: "Analogue Second Class Pyranometer",
            caption: "Analogue Second Class Pyranometer"
        },
        {
            src: "/assets/facilities-4.jpg",
            alt: "Finned Heat Exchangers",
            caption: "Finned Heat Exchangers"
        },
        {
            src: "/assets/facilities-5.png",
            alt: "TEG Module Characterisation Setup",
            caption: "TEG Module Characterisation Setup"
        },
        {
            src: "/assets/facilities-6.png",
            alt: "Multicore Workstations Tyrone Camarero SS400TA-55",
            caption: "Multicore Workstations (Tyrone Camarero SS400TA-55) for CFD and multiphysics simulations"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[#F7F9FB]">
            <div className="container mx-auto px-6 mb-20">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                        Research Facilities
                    </h1>
                    <div className="w-20 h-1 bg-accent mb-12"></div>

                    <div className="text-xl text-slate-600 max-w-4xl mb-16 space-y-6 leading-relaxed text-justify">
                        <p>
                            The Energy Conversion and Storage Research (ECSR) Lab combines the multiphysics approach with CFD to study thermal energy systems and conversion technologies. The ECSR team is developing objective-oriented CFD models to investigate the thermal-hydraulic behavior of energy systems, such as thermal energy storage, thermoelectric generators, and finned-tube heat exchangers.
                        </p>
                        <p>
                            The lab is equipped with state-of-the-art research facilities for scientific research and teaching. The lab facilitates computational resources such as multicore workstations, multiphysics modeling, and simulation software (COMSOL Multiphysics, ANSYS, OpenFOAM, MATLAB, EPANET, etc.) for the design and analysis of energy systems.
                        </p>

                        <div className="pt-8">
                            <h3 className="text-2xl font-bold text-slate-800 mb-6">
                                Selected equipment in the lab to support innovative research and teaching activities:
                            </h3>
                            <ol className="list-decimal space-y-4 pl-6 text-justify">
                                <li>
                                    <strong>Thermoelectric generator testbed</strong> for measurement of the efficiency, power generation, I-V curve and heat flux through thermoelectric modules. This equipment will support tests at high temperatures up to 400˚C. Long term life of the module can be tested under practical thermal cycles of different applications.
                                </li>
                                <li>
                                    <strong>Hot air stand</strong> for the generation of hot air up to 400˚C for multiple applications over a wide range of flow rates. This equipment can support the testing of different heat exchanger designs for heating and cooling applications.
                                </li>
                                <li>
                                    <strong>Cooling Unit</strong> for providing cooled flow to test different types of heat sinks over a wide range of temperatures from -20°C to 80°C.
                                </li>
                                <li>
                                    <strong>Mixed-mode, Indirect, and Cabinet Solar dryer systems</strong> for performance testing and evaluation under natural and forced convection operation modes.
                                </li>
                                <li>
                                    <strong>Pyranometer</strong> to measure solar radiation received by a plane surface, in W/m², from a 180 ° field of view angle. It is ideal for general solar radiation measurements in (agro-)meteorological networks and PV monitoring.
                                </li>
                            </ol>
                        </div>
                    </div>
                </FadeIn>

                <FadeInSection>
                    <h2 className="text-2xl font-bold text-slate-800 mb-10 pl-4 border-l-4 border-accent">
                        Selected Laboratory Facilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {facilities.map((facility, index) => (
                            <ImageWithRevealCaption
                                key={index}
                                src={facility.src}
                                alt={facility.alt}
                                caption={facility.caption}
                            />
                        ))}
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default Facilities;