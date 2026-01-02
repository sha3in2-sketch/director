import AnimatedCardGrid from './AnimatedCardGrid';

const GridReveal = ({ children, className = '' }) => {
    return <AnimatedCardGrid className={className}>{children}</AnimatedCardGrid>;
};

export default GridReveal;
