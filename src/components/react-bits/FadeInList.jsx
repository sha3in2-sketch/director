import StaggeredFade from './StaggeredFade';

const FadeInList = ({ children, className = '' }) => {
    return (
        <StaggeredFade className={`space-y-4 ${className}`}>
            {children}
        </StaggeredFade>
    );
};

export default FadeInList;
