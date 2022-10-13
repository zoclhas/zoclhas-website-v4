export const CopyIcon = ({ size, height, width }) => {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 512 512"
            preserveAspectRatio="xMidYMid meet"
        >
            <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="var(--nextui-colors-border)"
                stroke="none"
            >
                <path
                    d="M1620 4430 l0 -520 -525 0 -525 0 0 -1870 0 -1870 1465 0 1465 0 0
520 0 520 525 0 525 0 0 1870 0 1870 -1465 0 -1465 0 0 -520z m2610 -1345 l0
-1545 -1145 0 -1145 0 0 1545 0 1545 1145 0 1145 0 0 -1545z m-2610 -685 l0
-1190 780 0 780 0 0 -360 0 -360 -1145 0 -1145 0 0 1550 0 1550 365 0 365 0 0
-1190z"
                />
            </g>
        </svg>
    );
};
