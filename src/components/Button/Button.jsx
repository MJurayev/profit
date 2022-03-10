import React from 'react';
import "./Button.scss"
const Button = ({children, className, ...props}) => {
    return (
        <a className={`btn ${className}` } {...props}>
            {children}
        </a>
    );
}

export default Button;
