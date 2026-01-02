import RevealOnScroll from './RevealOnScroll';

const FadeInSection = ({ children, className = '' }) => {
    return (
        <section className={`py-20 md:py-32 ${className}`}>
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    {children}
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default FadeInSection;
