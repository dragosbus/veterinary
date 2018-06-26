import React from 'react';


export const AddPet = props => {
    /*because you can't make an appointment in the past,
        the min date for the calendar should be today
    */
    let today = new Date().toISOString().substr(0, 10);
    //variables for ref for inputs
    let name, time;

    const makeApt = e =>{
        e.preventDefault();
        props.makeApt(name.value, time);
    };

    return(
        <form id="add-pet" onSubmit={makeApt}>
            <input ref={val=>name=val} type="text" className="pet-name" placeholder="Name"/>
            <input ref={val=>time=val} type="date" min={today}/>
        </form>
    );
};