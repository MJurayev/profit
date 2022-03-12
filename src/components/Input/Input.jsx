import React from 'react';
import "./Input.scss"
const Input = ({className, ...props}) => {
    return (
        <input className={'myInput ' + className} {...props} /> 
    );
}

export default Input;
