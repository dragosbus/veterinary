import React from "react";
import AptList from "./AppointmentList";

export const Appointments = props => {
  return(
        <ul>
            {props.appointments.map((apt, i)=> <AptList key={i}/>)}
        </ul>
      );
};