export const LinkArrow = ({
    size,
    height,
    width,
    rotate,
    fill
}) => {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" transform={`rotate(${rotate})`}>
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={fill || "var(--nextui-colors-border)"} stroke="none">
                <path d="M1782 4858 l3 -243 1238 -5 1237 -5 -2120 -2120 -2120 -2120 172
-172 173 -173 2122 2122 2123 2123 0 -1238 0 -1237 245 0 245 0 0 1655 0 1655
-1660 0 -1660 0 2 -242z"/>
            </g>
        </svg>

    );
};
