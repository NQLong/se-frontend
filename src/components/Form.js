import React from "react";

const Input = (props) => {
    const { value, onChange, iconClass, className, placeholder } = props

    return (
        <div className={"input-box" +(className?` ${className}`:"")}>
            {iconClass && <i className={iconClass} /> }
            <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

const Button = (props) => {
    const {children, text, onClick, className} = props
    return (
        <div className={"text-box center-content" +(className?` ${className}`:"")} onClick={onClick}>
            {children || text}
        </div>
    )
}

const Form = () =>{}
export {
    Input,
    Button,
};

export default Form;
