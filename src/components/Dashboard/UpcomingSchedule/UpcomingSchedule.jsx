import React from 'react';
import { appointments } from '../../../data/mockData';

const UpcomingSchedule = () => {
const thursdayAppts = appointments.filter(a => a.day === "Thursday");
const saturdayAppts = appointments.filter(a => a.day === "Saturday");

return (
<div className="upcoming-schedule">
    <h3>The Upcoming Schedule</h3>
    
    <div className="day-group">
    <h4>On Thursday</h4>
    {thursdayAppts.map(appt => (
        <div key={appt.id} className="appointment-card">
        <h5>{appt.title}</h5>
        <p>{appt.time}</p>
        </div>
    ))}
    </div>
    
    <div className="day-group">
    <h4>On Saturday</h4>
    {saturdayAppts.map(appt => (
        <div key={appt.id} className="appointment-card">
        <h5>{appt.title}</h5>
        <p>{appt.time}</p>
        </div>
    ))}
    </div>
</div>
);
};

export default UpcomingSchedule;