import React from 'react';
import { healthStatus } from '../../../data/mockData';

const HealthCards = () => {
return (
<div className="health-cards">
    {healthStatus.map((item) => (
    <div key={item.id} className={`health-card ${item.status}`}>
        <h4>{item.name}</h4>
        <p>{item.date}</p>
        <div className={`status-indicator ${item.status}`}>
        {item.status === 'good' ? '✓' : '✗'}
        </div>
    </div>
    ))}
</div>
);
};

export default HealthCards;