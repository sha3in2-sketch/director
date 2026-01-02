import FadeIn from '../components/react-bits/FadeIn';
import RevealOnScroll from '../components/react-bits/RevealOnScroll';
import LogoLoop from '../components/react-bits/LogoLoop';

const Publications = () => {
    const publicationPortfolioLogos = [
        {
            src: "/assets/portfolio-scholar.png",
            alt: "Google Scholar Profile"
        },
        {
            src: "/assets/portfolio-citations.png",
            alt: "Citation Metrics"
        },
        {
            src: "/assets/portfolio-domains.png",
            alt: "Research Domains"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[#F7F9FB]">
            <div className="container mx-auto px-6 mb-24">

                {/* ================= JOURNALS ================= */}
                <RevealOnScroll>
                    <section className="mb-20">
                        <h1 className="text-2xl font-bold text-slate-800 mb-8">
                            Journal Publications
                        </h1>

                        <ol className="list-decimal space-y-4 pl-6 text-slate-700 leading-relaxed text-justify">
                            <li>
                                Kansara, K., Singh, S., Dwivedi, N.K., Khodachenko, M.L.,
                                <em> Probing the melting dynamics in a phase change Rayleigh–Bénard system under low gravity conditions</em>,
                                International Journal of Heat and Mass Transfer, 234, 126073, 2024. IF: 5.0
                            </li>

                            <li>
                                Kansara, K., Singh, S., Dwivedi, N.K., Khodachenko, M.L.,
                                <em> Investigating combined effects of varying gravity and heat flux direction on the melting dynamics of phase change material in space</em>,
                                Acta Astronautica, 220, pp. 427-448, 2024. IF: 3.1
                            </li>

                            <li>
                                Sharma, A., Abhinand, S., Kothadia, H., Singh, S., & Mondal, B.,
                                <em> Experimental analyses of solidification phenomena in an ice-based thermal energy storage system</em>,
                                Applied Thermal Engineering, 236, 121888, 2024. IF: 6.1
                            </li>

                            <li>
                                Singh, S., Chaudhary, M., Sørensen, K.,
                                <em> Demonstration of real-time monitoring in smart graded-water supply grid: an institutional case study</em>,
                                AQUA - Water Infrastructure, Ecosystems and Society, 72 (11), pp. 2152–2169, 2023. IF: 4.3
                            </li>

                            <li>
                                Dwivedi, N.K., Singh, S., Khodachenko, M.L., Kislyakova, K.G., Kis, A.,
                                <em> Jovian Magnetosheath Turbulence Driven by Whistler</em>,
                                Physica Scripta, 99(4), 045028, 2024. IF: 2.6
                            </li>

                            <li>
                                Sharma, A., Kothadia, H., Singh, S., & Mondal, B.,
                                <em> Solidification of nanoparticle-based PCM in a fin-aided triplex-tube energy storage system for cooling applications</em>,
                                Thermal Science and Engineering Progress, 42, 101872, 2023. IF: 5.1
                            </li>

                            <li>
                                Sharma, A., Sontakke, S., Kothadia, H., & Singh, S.,
                                <em> Experimental Analysis of the Influential Factors Upon Mixed Convection Flow in Horizontal Pipes</em>,
                                ASME Journal of Heat and Mass Transfer, 145 (9), 2023. IF: 2.1
                            </li>

                            <li>
                                Sharma, A., Patel, P., Singh, S., Mondal, B., & Kothadia, H.,
                                <em> Numerical study of ice freezing process on fin aided thermal energy storage system</em>,
                                International Communications in Heat and Mass Transfer, 130, 105792, 2022. IF: 6.4
                            </li>

                            <li>
                                Sharma, A., Patel, P., Singh, S., Sharma, M., Mondal, B., & Kothadia, H.,
                                <em> Numerical study of tube diameter effects on solidification of PCM in a compact heat exchanger</em>,
                                Journal of Enhanced Heat Transfer, 29, 2022. IF: 2.403
                            </li>

                            <li>
                                Sharma, A., Patel, P., Singh, S., Sharma, M., Mondal, B., & Kothadia, H.,
                                <em> A numerical study of refrigerant tube diameter effect on enhancing the phase change process</em>,
                                Journal of Enhanced Heat Transfer, (Article) 10.1615/JEnhHeatTransf.2022040453, 2022. IF: 2.403
                            </li>

                            <li>
                                Kumar, K., & Singh, S.,
                                <em> Investigating thermal stratification under multiple transient operations of hot water storage tank</em>,
                                Energy Reports, 7 (2021), pp. 7186-7199. IF: 4.7
                            </li>

                            <li>
                                Singh, S., & Dwivedi, N.,
                                <em> Impact of thermal contact resistance on thermal-hydraulic characteristics of double fin-and-tube heat exchanger</em>,
                                Advances in Fluid and Thermal Engineering, Lecture Notes in Mechanical Engineering, Springer Nature Singapore, 2021. pp. 187–197.
                            </li>

                            <li>
                                Mangla, B., Dwivedi, N.K., Sharma, D.K., Bardhan, A., Rajput, A., & Singh, S.,
                                <em> Low latitude, topside ionosphere composition and its variation with changeable solar activity</em>,
                                Indian Journal of Radio and Space Physics, Volume 50, Pages 190-197, 2021.
                            </li>

                            <li>
                                Singh, S., Sørensen, K., Condra, T., Batz, S.S., & Kristensen, K.,
                                <em> Investigation on transient performance of a large-scale packed-bed thermal energy storage</em>,
                                Applied Energy, vol. 239, pp. 1114-1129, 2019. https://doi.org/10.1016/j.apenergy.2019.01.260. IF: 10.1
                            </li>

                            <li>
                                Singh, S., Sørensen, K., & Condra, T.J.,
                                <em> Investigation of Vortex Generator Enhanced Double-Fin and Tube Heat Exchanger</em>,
                                Journal of Heat Transfer, vol. 141, no. 2, 021802, 2019. https://doi.org/10.1115/1.4042050. IF: 2.1
                            </li>

                            <li>
                                Välikangas, T., Singh, S., Sørensen, K., & Condra, T.J.,
                                <em> Fin-and-tube heat exchanger enhancement with a combined herringbone and vortex generator design</em>,
                                International Journal of Heat and Mass Transfer, vol. 118, pp. 602-616, 2018. https://doi.org/10.1016/j.ijheatmasstransfer.2017.11.006. IF: 5
                            </li>

                            <li>
                                Singh, S., Sørensen, K., Simonsen, A.S., & Condra, T.J.,
                                <em> Implications of fin profiles on overall performance and weight reduction of a fin and tube heat exchanger</em>,
                                Applied Thermal Engineering, vol. 115, pp. 962–976, 2017. https://doi.org/10.1016/j.applthermaleng.2017.01.043. IF: 6.1
                            </li>

                            <li>
                                Dwivedi, N.K., & Singh, S.,
                                <em> Inertial range spectrum of field-aligned whistler turbulence</em>,
                                Physica Scripta, vol. 92, 035001, 2017. https://doi.org/10.1088/1402-4896/aa5950. IF: 2.6
                            </li>

                            <li>
                                Singh, S., Sørensen, K., & Condra, T.J.,
                                <em> Investigation of material efficient fin patterns for cost-effective operation of fin and tube heat exchanger</em>,
                                Applied Thermal Engineering, vol. 126, pp. 903-914, 2017. https://doi.org/10.1016/j.applthermaleng.2017.08.010. IF: 6.1
                            </li>

                            <li>
                                Kyriakidis, F., Sørensen, K., Singh, S., & Condra, T.J.,
                                <em> Modeling and optimization of integrated exhaust gas recirculation and multi-stage waste heat recovery in marine engines</em>,
                                Energy Conversion and Management, vol. 151, pp. 286-295, 2017. https://doi.org/10.1016/j.enconman.2017.09.004. IF: 9.9
                            </li>

                            <li>
                                Dwivedi, N.K., & Singh, S.,
                                <em> Nonlinear whistler wave model for lion roars in the Earth’s magnetosheath</em>,
                                Astrophysics and Space Science, vol. 362, no. 172, 2017. https://doi.org/10.1007/s10509-017-3156-2. IF: 1.8
                            </li>

                            <li>
                                Singh, S., Stechel, E.B., & Buttry, D.A.,
                                <em> Transient modeling of electrochemically assisted CO2 capture and release</em>,
                                Journal of Electroanalytical Chemistry, vol. 799, pp. 156-166, 2017. IF: 4.1
                            </li>

                            <li>
                                Singh, S., Sørensen, K., & Condra, T.J.,
                                <em> Influence of the degree of thermal contact in fin and tube heat exchanger: A numerical analysis</em>,
                                Applied Thermal Engineering, vol. 107, pp. 612-624, 2016. IF: 6.1
                            </li>

                            <li>
                                Singh, S., & Kumar, S.,
                                <em> Performance evaluation of solar dryer system for optimal operation: Mathematical modelling and experimental validation</em>,
                                International Journal of Sustainable Energy, vol. 33, no. 1, pp. 141-158, 2014. IF: 3.1
                            </li>

                            <li>
                                Singh, S., & Kumar, S.,
                                <em> Solar drying for different test conditions: Proposed framework for estimation of specific energy consumption and CO2 emissions mitigation</em>,
                                Energy, vol. 51, pp. 27-36, 2013. IF: 9
                            </li>

                            <li>
                                Singh, S., & Kumar, S.,
                                <em> Comparative Thermal Performance Study of Indirect and Mixed-Mode Solar Dryers</em>,
                                International Journal of Sustainable Energy Development, vol. 1, no. 1/2, pp. 6-13, 2012. IF: 13.66
                            </li>

                            <li>
                                Singh, S., & Kumar, S.,
                                <em> Development of convective heat transfer correlations for common designs of solar dryer</em>,
                                Energy Conversion and Management, vol. 64, pp. 403-414, 2012. IF: 9.9
                            </li>

                            <li>
                                Singh, S., & Kumar, S.,
                                <em> New approach for thermal testing of solar dryer: Development of generalized drying characteristic curve</em>,
                                Solar Energy, vol. 86, no. 7, pp. 1981-1991, 2012. IF: 6
                            </li>

                            <li>
                                Singh, S., & Kumar, S.,
                                <em> Testing method for thermal performance-based rating of various solar dryer designs</em>,
                                Solar Energy, vol. 86, no. 1, pp. 87-98, 2012. IF: 6
                            </li>
                        </ol>
                    </section>
                </RevealOnScroll>

                {/* ================= CONFERENCES ================= */}
                <RevealOnScroll>
                    <section className="mb-20">
                        <h3 className="text-2xl font-bold text-slate-800 mb-8">
                            Conference Proceedings
                        </h3>

                        <ol className="list-decimal space-y-4 pl-6 text-slate-700 leading-relaxed text-justify">
                            <li>
                                Singh, A., Maheshwari, A., Singh, S.,
                                <em> Digital Twin Framework for Leakages Detection in Large-scale Water Distribution Systems: A Case Study of IIT-Jodhpur Campus</em>,
                                International Conference on Advances in Control and Optimization of Dynamical Systems (ACODS 2024), IFAC-PapersOnLine, 57, pp. 292–297.
                            </li>

                            <li>
                                Singh, S., Kansara, K., Dwivedi, N.K., Khodachenko, M.L.,
                                <em> Accessing the Melting Dynamics of Phase Change Material Under Reduced Gravity Conditions</em>,
                                ASME Fluids Engineering Division Summer Meeting (FEDSM2024), July 15-17, 2024, Anaheim, USA.
                            </li>

                            <li>
                                Kansara, K., Singh, S., Dwivedi, N.K., Khodachenko, M.L.,
                                <em> Investigating the Influence of Mutual Orientation Between Heat Flux and Gravity on the Melting Dynamics of Phase Change Material</em>,
                                ASME FEDSM 2024, July 15-17, 2024, Anaheim, USA.
                            </li>

                            <li>
                                Sahu, D., Kansara, K., Singh, S.,
                                <em> Influence of Geometric Parameters on Power Generation from a Thermoelectric Module</em>,
                                In: Singh, K.M., Dutta, S., Subudhi, S., Singh, N.K. (eds) Fluid Mechanics and Fluid Power, Volume 6. FMFP 2022. Lecture Notes in Mechanical Engineering. Springer, Singapore. (2024)
                            </li>

                            <li>
                                Kansara, K., Singh, S.,
                                <em> Accommodating Volume Expansion Effects During Solid–Liquid Phase Change—A Comparative Study</em>,
                                In: Singh, K.M., Dutta, S., Subudhi, S., Singh, N.K. (eds) Fluid Mechanics and Fluid Power, Volume 5. FMFP 2022. Lecture Notes in Mechanical Engineering. Springer, Singapore. (2024)
                            </li>

                            <li>
                                Chauhan, S., & Singh, S.,
                                <em> Investigation of Hydraulic Response to Leakage Scenarios in Water Distribution Network Using EPANET: Case study of IIT Jodhpur</em>,
                                Roorkee Water Conclave 2024, IIT Roorkee, India.
                            </li>

                            <li>
                                Chauhan, S., & Singh, S.,
                                <em> Modeling of Leakage Scenarios in Water Distribution Network using EPANET</em>,
                                International Conference on Water 2024, International Institute of Water, IIW, Jodhpur, India.
                            </li>

                            <li>
                                Verma, S., & Singh, S.,
                                <em> Multiphysics Modeling of Thermoelectric Unicouple and Comparison of Electrical Performance with Different Thermoelectric Materials</em>,
                                2nd International Conference on Thermo-Fluids and System Design (ICTFSD) 2024, 4th-5th April 2024, BIT Mesra, Ranchi, India.
                            </li>

                            <li>
                                Veer, C., Singh, S., & Ram, J.,
                                <em> Improvement in Flow Distribution for Effective Thermal Management in Thermoelectric Generator for Waste Heat Recovery</em>,
                                In: Tyagi, R.K., Gupta, P., Das, P., Prakash, R. (eds) Advances in Engineering Materials. FLAME 2022. Lecture Notes in Mechanical Engineering. Springer, Singapore. (2024)
                            </li>

                            <li>
                                Sharma, A., Kothadia, H.B., Singh, S.,
                                <em> Analysis of Mixed Convection Strength under Laminar and Turbulent Flow</em>,
                                Proceedings of the International Symposium on Turbulence, Heat and Mass Transfer, 10th International Symposium on Turbulence, Heat and Mass Transfer (THMT 2023), September 11-15, 2023, Rome, Italy.
                            </li>

                            <li>
                                Singh, S., & Rautela, J.,
                                <em> Numerical study of packed bed thermal energy storage with natural sandstone rock as a filler material</em>,
                                AIP Conf. Proc. 2863 (1), 020008, 2023.
                            </li>

                            <li>
                                Kulkarni, T., Maheshwari, A., & Singh, S.,
                                <em> Dynamic Model Development for Management of Water Distribution System</em>,
                                2nd Canadian IWA-Young Water Professional Conference 2023, June 1-3, Vancouver, BC.
                            </li>

                            <li>
                                Kansara, K., & Singh, S.,
                                <em> Effect of Inverting Heat Source Direction on the Melting of Phase Change Material under the Influence of Microgravity Environment</em>,
                                Advances in Fluid and Thermal Engineering. FLAME 2022. Lecture Notes in Mechanical Engineering. Springer, Singapore, pp. 95–105, 2023. https://doi.org/10.1007/978-981-99-2382-3_8
                            </li>

                            <li>
                                Kansara, K., Veer, C., & Singh, S.,
                                <em> Investigating Pin Fin Configurations on Automotive Exhaust Heat Exchanger Surface for Thermoelectric Generation</em>,
                                Proceedings of the 26th National and 4th International ISHMT-ASTFE Heat and Mass Transfer Conference, December 17-20, 2021, IIT Madras, pp. 1875-1880. DOI: 10.1615/IHMTC-2021.2830
                            </li>

                            <li>
                                Sharma, A., Singh, S., Mondal, B., & Kothadia, H.,
                                <em> Investigating the effects of snowflake-shaped fin configurations on PCM solidification</em>,
                                Proceedings of the 26th National and 4th International ISHMT-ASTFE Heat and Mass Transfer Conference, December 17-20, 2021, IIT Madras, pp. 2137-2143. DOI: 10.1615/IHMTC-2021.3230
                            </li>

                            <li>
                                Rai, S., & Singh, S.,
                                <em> Numerical investigation of turbulent heat transfer enhancement in partially corrugated tube using water based nanofluids</em>,
                                Proceedings of the 26th National and 4th International ISHMT-ASTFE Heat and Mass Transfer Conference, December 17-20, 2021, IIT Madras, pp. 2625-263x. DOI: 10.1615/IHMTC-2021.3970
                            </li>

                            <li>
                                Rai, S., & Singh, S.,
                                <em> Performance Enhancement of Finned Tube Heat Exchanger using New Vortex Generator</em>,
                                Journal of Physics: Conference Series, Volume 2178, International Symposium on Fluids and Thermal Engineering (FLUTE 2021) 22 July 2021, J. Phys.: Conf. Ser. 2178 012002, 2022. DOI: 10.1088/1742-6596/2178/1/012002
                            </li>

                            <li>
                                Sharma, A., Patel, P., Singh, S., Sharma, M., Mondal, B., & Kothadia, H.,
                                <em> Numerical study of tube diameter effects on solidification of PCM in a compact heat exchanger</em>,
                                International Symposium on Fluids and Thermal Engineering (FLUTE – 2021), July 22, 2021, AMITY, India.
                            </li>

                            <li>
                                Kumar, K., & Singh, S.,
                                <em> Investigating Thermal Stratification in a Hot Water Storage Tank during Charging Mode</em>,
                                FLUTE-2021, Journal of Physics: Conference Series, Volume 2178 012001, 2022. DOI: 10.1088/1742-6596/2178/1/012001
                            </li>

                            <li>
                                Kumar, K., & Singh, S.,
                                <em> A CFD Investigation of Turbulent Mixing in Horizontal T-joint</em>,
                                Proceedings of the 8th International and 47th National Conference on Fluid Mechanics and Fluid Power (FMFP 2020), December 9-11, 2020, IIT Guwahati, Assam, India.
                            </li>

                            <li>
                                Rai, S., & Singh, S.,
                                <em> Open-sourced CFD Simulation of Natural Convection in an Enclosure</em>,
                                Proceedings of the 8th International and 47th National Conference on Fluid Mechanics and Fluid Power (FMFP 2020), December 9-11, 2020, IIT Guwahati, Assam, India.
                            </li>

                            <li>
                                Remiro, L.C., Singh, S., & Iov, F.,
                                <em> Flexible district heating network model that predicts mass flow, pressure and temperature losses</em>,
                                5th International Conference on Smart Energy Systems: 4th Generation, 2019.
                            </li>

                            <li>
                                Singh, S., & Sørensen, K.,
                                <em> Dynamic Performance Analysis of Large-Scale Packed Bed Truncated Conical Thermal Energy Storage</em>,
                                Proceedings of the ASME-JSME-KSME 2019 8th Joint Fluids Engineering Conference, July 28–August 1, 2019, San Francisco, California, USA. https://doi.org/10.1115/AJKFluids2019-5680
                            </li>

                            <li>
                                Singh, S., & Sørensen, K.,
                                <em> Dynamic model of a heat pump-based house heating system</em>,
                                Proceedings of the 59th SIMS Conference on Simulation and Modelling (SIMS 2018), Linköping University Electronic Press, vol. 153, 2018. https://doi.org/10.3384/ecp1815387
                            </li>

                            <li>
                                Singh, S., Sørensen, K., Bojesen, C., & Nielsen, M.P.,
                                <em> Physical modelling of heat pump for simultaneous space heating and hot water demand</em>,
                                4th International Conference on Smart Energy Systems and 4th Generation District Heating. Aalborg University, pp. 302-303, 2018.
                            </li>

                            <li>
                                Singh, S., & Sørensen, K.,
                                <em> Concrete thermal energy storage for steam generation: A numerical investigation</em>,
                                Proceedings of the 58th Conference on Simulation and Modelling (SIMS 2017), Linköping University Electronic Press, pp. 234-240, 2017. https://doi.org/10.1115/AJKFluids2019-5680
                            </li>

                            <li>
                                Välikangas, T., Pajunen, S., Baczkiewicz, J., Singh, S., & Sørensen, K.,
                                <em> Effect of natural convection and radiation inside of a hollow beam in a standard fire</em>,
                                Proceedings of the 58th SIMS Conference on Simulation and Modelling (SIMS 2017), pp. 121-127, 2017.
                            </li>

                            <li>
                                Singh, S., & Sørensen, K.,
                                <em> Numerical investigation of conjugate heat transfer and flow performance of a fin and tube heat exchanger with vortex generators</em>,
                                Proceedings of the 58th SIMS Conference on Simulation and Modelling (SIMS 2017), 2017.
                            </li>

                            <li>
                                Singh, S., Sørensen, K., & Condra, T.J.,
                                <em> Numerical Modeling of Fin and Tube Heat Exchanger for Waste Heat Recovery</em>,
                                The First Pacific Rim Thermal Engineering Conference, March 13-17, 2016, Waikoloa Beach, Hawaii, USA.
                            </li>

                            <li>
                                Singh, S., Sørensen, K., & Condra, T.J.,
                                <em> Parametric CFD Analysis to Study the Influence of Fin Geometry on the Performance of a Fin and Tube Heat Exchanger</em>,
                                Proceedings of the 2016 9th EUROSIM Congress on Modelling and Simulation, IEEE Computer Society Press, 2016.
                            </li>

                            <li>
                                Singh, S., Sørensen, K., & Condra, T.J.,
                                <em> Performance study of a fin and tube heat exchanger with different fin geometry</em>,
                                Proceedings of the ECOS 2016, 2016.
                            </li>

                            <li>
                                Singh, S., Sørensen, K., & Condra, T.J.,
                                <em> Multiphysics Numerical Modeling of a Fin and Tube Heat Exchanger</em>,
                                Proceedings of the 56th Conference on Simulation and Modelling (SIMS 56), Linköping, Sweden, October 7-9, 2015.
                            </li>

                            <li>
                                Singh, S., & Kumar, S.,
                                <em> Development of Simple Drying Model for Performance Prediction of Solar Dryer: Theoretical Analysis</em>,
                                Proceedings of International Conference on Energy Security, Global warming and Climate (SOLARIS-2012), I.K. International Publishers, February 7, 2012, Varanasi, India.
                            </li>

                            <li>
                                Kumar, S., & Singh, S.,
                                <em> Evaluation of Specific Energy Consumption During Solar Drying of Cylindrical Potato Samples for Different Thickness and Loading Densities</em>,
                                Proceedings of SOLARIS-2012, February 7, 2012, Varanasi, India.
                            </li>

                            <li>
                                Kumar, S., & Singh, S.,
                                <em> Performance evaluation of forced convection mixed-mode solar dryer: Experimental investigation</em>,
                                World Congress on Sustainable Technologies (WCST 2011), 2011, London, United Kingdom.
                            </li>

                            <li>
                                Kumar, S., & Singh, S.,
                                <em> Influence of air flow circulation and absorbed thermal energy on convective heat transfer during operation of mixed-mode solar dryer</em>,
                                8th International Conference on Heat Transfer, Fluid Mechanics and Thermodynamics (HEFAT-2011), 2011, Mauritius.
                            </li>

                            <li>
                                Singh, S., & Kumar, S.,
                                <em> Thermal test procedure for mixed mode solar dryer</em>,
                                World Congress on Sustainable Technologies, WCST 2011, 2011.
                            </li>

                            <li>
                                Singh, S., & Kumar, S.,
                                <em> Comparative Study on Heat Transfer of Natural Convection Cabinet and Mixed-Mode Solar Dryers: An Experimental Investigation</em>,
                                Proceedings of ENERSTATE 2010, December 27, 2010, Dehradun, India.
                            </li>

                            <li>
                                Kumar, S., & Singh, S.,
                                <em> Methodologies for Determination of Forced Convective Heat Transfer Coefficient for Indirect and Mixed Mode Solar Dryers</em>,
                                Proceedings of ENERSTATE 2010, December 27, 2010, Dehradun, India.
                            </li>
                        </ol>
                    </section>
                </RevealOnScroll>

                {/* ================= BOOK CHAPTERS ================= */}
                <RevealOnScroll>
                    <section className="mb-20">
                        <h3 className="text-2xl font-bold text-slate-800 mb-8">
                            Book Chapters
                        </h3>

                        <ol className="list-decimal space-y-4 pl-6 text-slate-700 leading-relaxed text-justify">
                            <li>
                                DevRoy, A., Prakash, O., Singh, S., Kumar, A.,
                                <em> Application of software in predicting thermal behaviour of solar stills</em>,
                                Green Energy and Technology, Springer, 2019.
                            </li>

                            <li>
                                Singh, S.,
                                <em> Thermal testing methods for solar dryers</em>,
                                Green Energy and Technology, Springer, 2017.
                            </li>
                        </ol>
                    </section>
                </RevealOnScroll>

                {/* ================= PATENTS ================= */}
                <RevealOnScroll>
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-8">
                            Patents
                        </h2>

                        <ol className="list-decimal space-y-4 pl-6 text-slate-700 leading-relaxed text-justify">
                            <li>
                                Dr. Nikhil Kothari, Dr. Shobhana Singh, Ramkishore Jangid,
                                <em> Oral Care Irrigation Device for Maintaining Oral Hygiene</em>,
                                Patent No. 202211051961, 2024 (Published).
                            </li>

                            <li>
                                Dr. Nikhil Kothari, Dr. Shobhana Singh, Mitanshu Sharma,
                                <em> Pressure ulcers or bed sores preventing air bubble-based mattress</em>,
                                Patent No. 202211060577, 2024 (Published).
                            </li>
                        </ol>
                    </section>
                </RevealOnScroll>

                {/* ================= PORTFOLIO ================= */}
                <RevealOnScroll>
                    <section className="mt-24 mb-12">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-slate-800 mb-4">
                                Publication Portfolio
                            </h2>
                            <p className="text-slate-600 text-xl font-medium">
                                Research visibility, impact metrics, and subject focus areas
                            </p>
                        </div>

                        <LogoLoop
                            logos={publicationPortfolioLogos}
                            speed={70}
                            gap={120}
                            logoHeight={350}
                            fadeOut
                            pauseOnHover
                            scaleOnHover
                            ariaLabel="Publication portfolio loop"
                        />
                    </section>
                </RevealOnScroll>

            </div>
        </div>
    );
};

export default Publications;
