import React from "react";
import {AptList} from "./AppointmentElement";

export const Appointments = props => {
  return(
        <ul>
            {props.appointments.map((apt, i)=> <AptList key={i} name={apt.name}/>)}
        </ul>
      );
};