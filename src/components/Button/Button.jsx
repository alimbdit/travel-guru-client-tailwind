import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn btn-warning">{children}</button>
    );
};

export default Button;