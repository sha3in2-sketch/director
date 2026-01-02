
const ThermalSVG = () => (
    <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <filter id="thermal-map" colorInterpolationFilters="sRGB">
            <feColorMatrix
                type="matrix"
                values="
        0.33 0.33 0.33 0 0
        0.33 0.33 0.33 0 0
        0.33 0.33 0.33 0 0
        0 0 0 1 0"
                result="grayscale"
            />
            <feComponentTransfer colorInterpolationFilters="sRGB" result="thermal">
                <feFuncR type="table" tableValues="0 0 0 1 1 1" />
                <feFuncG type="table" tableValues="0 0 1 1 0 0" />
                <feFuncB type="table" tableValues="0 1 1 0 0 0" />
            </feComponentTransfer>
        </filter>
    </svg>
);

export default ThermalSVG;
