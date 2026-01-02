import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold text-slate-800">ECSR Lab</h3>
                        <p className="text-slate-500 text-sm mt-2">
                            Energy Conversion & Storage Research Laboratory<br />
                            Indian Institute of Technology Jodhpur
                        </p>
                    </div>
                    <div className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} ECSR Lab. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
