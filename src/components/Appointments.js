import React from "react";
import {AptList} from "./AppointmentElement";

export const Appointments = props => {
  return(
        <ul className='apts'>
            {props.appointments.map((apt, i)=> <AptList key={i} name={apt.name}owner={apt.owner} note={apt.notes} date={apt.time}/>)}
        </ul>
      );
};