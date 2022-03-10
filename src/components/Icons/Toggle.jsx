import React from 'react';

const Toggle = ({open}) => {
    return (
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M60.9375 51.5625C63.5263 51.5625 65.625 53.6612 65.625 56.25C65.625 58.8388 63.5263 60.9375 60.9375 60.9375H14.0625C11.4737 60.9375 9.375 58.8388 9.375 56.25C9.375 53.6612 11.4737 51.5625 14.0625 51.5625H60.9375ZM60.9375 32.8125C63.5263 32.8125 65.625 34.9112 65.625 37.5C65.625 40.0888 63.5263 42.1875 60.9375 42.1875H14.0625C11.4737 42.1875 9.375 40.0888 9.375 37.5C9.375 34.9112 11.4737 32.8125 14.0625 32.8125H60.9375ZM60.9375 14.0625C63.5263 14.0625 65.625 16.1612 65.625 18.75C65.625 21.3388 63.5263 23.4375 60.9375 23.4375H14.0625C11.4737 23.4375 9.375 21.3388 9.375 18.75C9.375 16.1612 11.4737 14.0625 14.0625 14.0625H60.9375Z" fill={ open ? '#0A0B11' : 'white'}/>
        </svg>
    );
}

export default Toggle;
