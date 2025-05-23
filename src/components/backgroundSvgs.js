import React from 'react';

export const MovQuarterCircle = ({ fill = "#4672f4" }) => {
    return (
        <svg className="background-element" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="100" height="100" fill={fill} />

            <path fill="none" stroke="#f8f6f1" stroke-width="5" d="M100,0 A100,100 0 0,1 0,100" stroke-dasharray="0,314" id="circle3">
                <animate attributeName="stroke-dasharray" from="0,314" to="314,0" dur="2s" repeatCount="indefinite" />
            </path>

            <path fill="none" stroke="#ff9d42" stroke-width="5" d="M100,0 A70,70 0 0,1 0,100" stroke-dasharray="0,220" id="circle2">
                <animate attributeName="stroke-dasharray" from="0,220" to="220,0" dur="2s" repeatCount="indefinite" />
            </path>

            <path fill="none" stroke="#f8f6f1" stroke-width="5" d="M100,0 A50,50 0 0,1 0,100" stroke-dasharray="0,157" id="circle1">
                <animate attributeName="stroke-dasharray" from="0,157" to="157,0" dur="2s" repeatCount="indefinite" />
            </path>

        </svg>

    );
};

export const MovingTriangles = ({ width = 100, height = 100, fill = "#4672f4", color1 = "#f8f6f1", color2 = "ff9d42" }) => {
    const midpoint = width / 2;

    const numberOfTriangle = parseInt(height / midpoint + 1);

    return (<svg className="background-element" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width={width} height={height} fill={fill} />
        {[...Array(numberOfTriangle)].map((_, i) =>
            <polygon points={`0,${(i + 1) * midpoint} ${midpoint},${i * midpoint} ${width},${(i + 1) * midpoint}`}>
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    from="0,0"
                    to={i === 0 ? `${midpoint},0` : `0,${-midpoint}`}
                    begin="0s"
                    dur="2s"
                    keyTimes="0;0.30;0.50;1"
                    repeatCount="indefinite"
                    additive="replace" />
                {
                    i === 0 &&
                    <animateTransform
                        attributeName="transform"
                        type="scale"
                        from="1"
                        to="0"
                        begin="0s"
                        dur="2s"
                        repeatCount="indefinite"
                        additive="sum" />
                }
                <animate
                    attributeName="fill"
                    values={i % 2 === 0 ? `${color1};${color1};${color2};${color2}` : `${color2};${color2};${color1};${color1}`}
                    keyTimes="0;0.499;0.50;1"
                    dur="4s"
                    repeatCount="indefinite" />
            </polygon>)}



    </svg>


    );
};

export const Triangle = ({ width = 20, height = 20, fill = "#4672f4", angle }) => {

    return (<svg className="background-element" width={width} height={height}  xmlns="http://www.w3.org/2000/svg">
        
            <polygon points={`0,0 ${width},${height/2} 0,${height}`} fill={fill}>
                
            </polygon>
    </svg>


    );
};

export const MovingSemicircle = ({ width = 100, height = 100, fill = "#4672f4", circleColor1 = "#ffc610", circleColor2 = "#f8f6f1" }) => {
    const midpoint = width / 2;
    const radius = width / 3;

    const numberOfTriangle = parseInt(height / radius + 1);

    return (
        <svg className="background-element" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="color" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color={circleColor1} />
                    <stop offset="49%" stop-color={circleColor1} />
                    <stop offset="50%" stop-color={circleColor2} />
                    <stop offset="100%" stop-color={circleColor2} />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width={width} height={height} fill={fill} />

            {[...Array(numberOfTriangle)].map((_, i) =>
                <path d={`M ${midpoint},${(i) * (radius * 2)} A ${radius},${radius}  0 1,0 ${midpoint},${(i + 1) * (radius * 2)}`} fill="url(#color)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        from="0,0"
                        to={`0,${-radius * 2}`}
                        begin="2s"
                        dur="2s"
                        keyTimes="0;0.49;0.50;1"
                        repeatCount="indefinite"
                        additive="replace" />

                </path>
            )}
            {[...Array(numberOfTriangle)].map((_, i) =>
                <path d={`M ${midpoint},${(i - 1) * (radius * 2) - radius} A ${radius},${radius} 0 0,1 ${midpoint},${(i) * (radius * 2) - radius}`} fill="url(#color)" >
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        from="0,0"
                        to={`0,${radius * 2}`}
                        begin="2s"

                        dur="2s"
                        keyTimes="0;0.49;0.50;1"
                        repeatCount="indefinite"
                        additive="replace" />

                </path>
            )}
        </svg>
    );
};

export const Staircase = ({ width = 100, height = 100, fill = "#4672f4" }) => {
    return (
        <svg className="background-element" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <mask id={`stairsw${width}h${height}`}>
                <rect x="0" y="0" width={width} height={height} fill="white" />
                <rect x={width / 3} y="0" height={height / 3} width={width * 2 / 3} fill="black" />
                <rect x={width * 2 / 3} y="0" height={height * 2 / 3} width={width / 3} fill="black" />
            </mask>
            <rect x="0" y="0" width={width} height={height} fill={fill} mask={`url(#stairsw${width}h${height})`} />
        </svg>
    );
};

export const Staircase2 = ({ width = 100, height = 100, fill = "#4672f4" }) => {
    return (
        <svg className="background-element" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <mask id={`stairs2w${width}h${height}`}>
                <rect x="0" y="0" width={width} height={height} fill="white" />
                <rect x="0" y={height / 3} width={width / 3} height={height * 2 / 3} fill="black" />
                <rect x="0" y={height * 2 / 3} width={width * 2 / 3} height={height / 3} fill="black" />
            </mask>

            <rect x="0" y="0" width={width} height={height} fill={fill} mask={`url(#stairs2w${width}h${height})`} />
        </svg>
    );
};
export const Empty = ({ width = 100, height = 100, fill = "none" }) => {
    return (
        <svg className="background-element" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width={width} height={height} fill={fill} />
        </svg>
    );
};

export const RectCutSemicircle = ({ width = 100, height = 50, fill = "#4672f4" }) => {
    return (

        <svg className="background-element" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <mask id="semicircleClip">
                <rect x="0" y="0" width={width} height={height} fill="white" />
                <circle cx={width / 2} cy={height} r={width / 3} fill="black" />
            </mask>

            <rect x="0" y="0" width={width} height={height} fill={fill} mask="url(#semicircleClip)" />
        </svg>
    );
};


export const Semicircle = ({ size = 100, fill = "#4672f4" }) => {
    return (

        <svg className="background-element" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <mask id="semicircle">
                <circle cx={size / 2} cy={size / 2} r={size / 2} fill="white" />
                <circle cx={size / 2} cy={size / 2} r={size / 4} fill="black" />
            </mask>

            <rect x="0" y="0" width={size} height={size / 2} fill={fill} mask="url(#semicircle)" />
        </svg>
    );
};
export const SemicirclesInSquare = ({ size = 100, fill = "#4672f4" }) => {
    return (

        <svg className="background-element" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
            <mask id="semicircleinsquare">
                <circle cx={size / 2} cy={0} r={size / 2} fill="white" />
                <circle cx={size / 2} cy={size} r={size / 2} fill="white" />
            </mask>

            <rect x="0" y="0" width={size} height={size} fill={fill} mask="url(#semicircleinsquare)" />
        </svg>
    );
};

export const SemicirclesOnRectangle = ({
    text = "Introduction to AI",
    index = -1,
    fill = "#4672f4",
    textColor = "#000",
}) => {
    const splitTextIntoLines = (text, maxLineLength) => {
        const words = text.split(" ");
        const lines = [];
        let currentLine = "";

        words.forEach((word) => {
            if ((currentLine + word).length <= maxLineLength) {
                currentLine += (currentLine ? " " : "") + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        });

        if (currentLine) lines.push(currentLine);

        return lines;
    };

    const textLines = splitTextIntoLines(text, 30);
    return (
        <svg
            className="background-element"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%", maxWidth: "400px" }}
        >

            <mask id="semicircleonsquare">
                <circle cx="50" cy="50" r="50" fill="white" />
                <rect x="0" y="50" width="100" height="50" fill="white" />
            </mask>

            {/* Background rectangle with semicircle cut-out */}
            <rect x="0" y="0" width="100" height="100" fill={fill} mask="url(#semicircleonsquare)" />


            {/* Heading */}
            {index > -1 && <text
                x="50%"
                y="40%"
                fill="var(--color4)"
                fontSize="8"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontWeight: 900 }}
            >
                #Module {index + 1}
            </text>}

            {/* Main text */}
            <text
                x="50%"
                y="60%"
                fill={textColor}
                fontSize="6"
                textAnchor="middle"
                dominantBaseline="middle"
            >
                {textLines.map((line, index) => (
                    <tspan
                        key={index}
                        x="50%"
                        dy={index === 0 ? 0 : "1.2em"} // Offset subsequent lines
                    >
                        {line}
                    </tspan>
                ))}
            </text>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "16.67%", // 1/6th of the width
                    height: "16.67%", // 1/6th of the height
                }}
            >
                <Staircase width={100} height={100} fill={textColor} />
            </div>
        </svg>
    );
};



export const Semicircles = ({ size = 100, number = 3, fill = "#4672f4" }) => {
    return (
        <svg className="background-element" width={size} height={size * number / 2} xmlns="http://www.w3.org/2000/svg">
            <mask id="semicircles">
                <circle cx={size / 2} cy={size} r={size / 2} fill="white" />
            </mask>
            {[...Array(number)].map((_, i) => <>
                <mask id={`semicircle${i}`}>
                    <circle cx={size / 2} cy={(i + 1) * size / 2} r={size / 2} fill="white" />
                </mask>
                <rect x={0} y={i * size / 2} width={size} height={size / 2} fill={fill} mask={`url(#semicircle${i})`} />

            </>
            )}
        </svg>
    );
};

export const StarSVG = ({ n = 5, size = 100, fill = "#4672f4", stroke = "black", strokeWidth = 2 }) => {
    if (n < 3) {
        throw new Error("Number of corners 'n' must be at least 3.");
    }


    const generateStarPoints = () => {
        const points = [];
        const angle = (2 * Math.PI) / n; // Angle between each point
        var innerRadius = size / (n === 3 ? 6 : (n < 6 ? 4 : (n > 10 ? 2.5 : 3))); // Inner radius for curved effect

        const outerRadius = size / 2; // Outer radius of the star

        for (let i = 0; i < 2 * n; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius; // Alternate between outer and inner radius
            const x = size / 2 + radius * Math.cos(i * angle / 2); // X-coordinate
            const y = size / 2 - radius * Math.sin(i * angle / 2); // Y-coordinate (SVG Y-axis is inverted)
            points.push(`${x},${y}`);
        }

        return points.join(" ");
    };

    return (
        <svg className="background-element"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon
                points={generateStarPoints()}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};


export const NextIconCircle = ({ width = 100, fill = "#4672f4", direction = "right" }) => {
    const getRotation = (direction) => {
        switch (direction) {
            case "left":
                return "rotate(180 50 50)";
            case "up":
                return "rotate(-90 50 50)";
            case "down":
                return "rotate(90 50 50)";
            case "right":
            default:
                return "rotate(0 50 50)";
        }
    };

    return (
        <svg width={width} height={width} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Circle */}
            <circle cx="50" cy="50" r="45" stroke="black" stroke-width="2" fill={fill} />

            {/* First Next Icon */}
            <path d="M30 30 L50 50 L30 70" stroke="black" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" transform={getRotation(direction)} />
            <path d="M55 30 L75 50 L55 70" stroke="black" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" transform={getRotation(direction)} />

            {/* Second Next Icon */}
            {/* <path d="M40 30 L60 50 L40 70" stroke="black" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" transform={`translate(20, 0) ${getRotation(direction)}`} />
            <path d="M50 30 L70 50 L50 70" stroke="black" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" transform={`translate(20, 0) ${getRotation(direction)}`} /> */}
        </svg>
    );
};

