import React from 'react';
import FaPlus from 'react-icons/lib/fa/plus';

export const Header = () =>{
    return(
        <header className="main-header">
            <h1 className="logo">Pets</h1>
            <button className="form-toggler">
                <FaPlus/>
            </button>
        </header>
    );
};