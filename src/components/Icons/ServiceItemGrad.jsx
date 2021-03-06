import React from 'react';

const ServiceItemGrad = ({className, ...props}) => {
    return (
        <svg className={className + " "} width="337" height="241" viewBox="0 0 337 241" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_1301_478)">
<path d="M0.5 0.5H336.5V177.559C336.5 183.752 334.106 189.706 329.818 194.175L292.454 233.116C287.928 237.833 281.674 240.5 275.137 240.5H0.5V0.5Z" fill="url(#paint0_linear_1301_478)" fill-opacity="0.1"/>
<path d="M1.5 1.5H335.5V177.559C335.5 183.494 333.205 189.2 329.096 193.483L291.733 232.424C287.395 236.944 281.401 239.5 275.137 239.5H1.5V1.5Z" stroke="url(#paint1_linear_1301_478)" stroke-width="2"/>
</g>
<defs>
<filter id="filter0_b_1301_478" x="-119.5" y="-119.5" width="576" height="480" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="60"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1301_478"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1301_478" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1301_478" x1="-64.1129" y1="638.913" x2="291.609" y2="638.913" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.24"/>
</linearGradient>
<linearGradient id="paint1_linear_1301_478" x1="-58.9998" y1="453.999" x2="108.699" y2="799.046" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.28"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

    );
}

export default ServiceItemGrad;
