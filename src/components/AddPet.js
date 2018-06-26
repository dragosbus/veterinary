import React from 'react';


export const AddPet = props => {
    /*because you can't make an appointment in the past,
        the min date for the calendar should be today
    */
    let today = new Date().toISOString().substr(0, 10);
    //variables for reference the inputs
    let name, time, owner, notes;

    const makeApt = e =>{
        e.preventDefault();
        props.makeApt(name.value, owner.value, time.value, notes.value);
    };

    return(
        <form className="add-pet" onSubmit={makeApt}>
            <input ref={val=>name=val} type="text" className="pet-name" placeholder="Name"/>
            <input ref={val=>owner=val} type="text" className="pet-owner" placeholder="Owner"/>
            <input ref={val=>time=val} type="date" min={today}/>
            <textarea ref={val=>notes=val} className="notes" placeholder="Notes about Pet"></textarea>
            <button type="submit">Add</button>
        </form>
    );
};