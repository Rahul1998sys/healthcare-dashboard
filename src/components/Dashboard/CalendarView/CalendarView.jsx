import React from 'react';

const CalendarView = () => {
const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const dates = ['25', '26', '27', '28', '29', '30', '31'];
const appointments = [
['10:00', '08:00', '12:00', '10:00', '', '12:00', '10:00'],
['11:00', '09:00', '', '13:00', '14:00', '14:00', '10:00'],
['12:00', '10:00', '13:00', '', '16:00', '15:00', '11:00']
];

return (
<div className="calendar-view">
    <h3>October 2021</h3>
    <table>
    <thead>
        <tr>
        {days.map((day) => (
            <th key={day}>{day}</th>
        ))}
        </tr>
    </thead>
    <tbody>
        <tr>
        {dates.map((date) => (
            <td key={date}>{date}</td>
        ))}
        </tr>
        {appointments.map((row, i) => (
        <tr key={i}>
            {row.map((time, j) => (
            <td key={`${i}-${j}`}>{time}</td>
            ))}
        </tr>
        ))}
    </tbody>
    </table>
</div>
);
};

export default CalendarView;