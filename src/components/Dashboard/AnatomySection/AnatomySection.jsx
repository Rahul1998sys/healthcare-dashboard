import React from 'react';
import { healthStatus } from '../../../data/mockData';
import humanBodyImage from '../../../assets/humanbody.jpg';

const AnatomySection = () => {
return (
<div className="anatomy-section">
    <div className="human-body">
    <img src= {humanBodyImage} alt="Human Body" />
    
    {healthStatus.map((item) => (
        <div 
        key={item.id} 
        className={`status-marker ${item.status}`}
        style={{ 
            position: 'absolute',
            top: item.top,
            left: item.left
        }}
        >
        {item.name}
        </div>
    ))}
    </div>
</div>
);
};

export default AnatomySection;