import React from 'react';


export const AddPet = props => {
    let today = (new Date().toLocaleDateString()).replace(/\//g,'-');
    let name;

    const makeApt = e =>{
        e.preventDefault();
        props.makeApt(name.value, today);
    };

    return(
        <form id="add-pet" onSubmit={makeApt}>
            <input ref={val=>name=val} type="text" className="pet-name" placeholder="Name"/>
            <input type="date" min="2018-06-01"/>
        </form>
    );
};