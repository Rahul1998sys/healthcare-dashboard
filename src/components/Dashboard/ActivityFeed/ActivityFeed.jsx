import React from 'react';

const ActivityFeed = () => {
return (
<div className="activity-feed">
    <h3>Activity</h3>
    <p>3 appointments on this week</p>
    
    <div className="bar-chart">
    {/* Simple CSS bar chart */}
    <div className="bar" style={{ height: '60%' }}></div>
    <div className="bar" style={{ height: '30%' }}></div>
    <div className="bar" style={{ height: '45%' }}></div>
    <div className="bar" style={{ height: '75%' }}></div>
    <div className="bar" style={{ height: '50%' }}></div>
    <div className="bar" style={{ height: '90%' }}></div>
    <div className="bar" style={{ height: '25%' }}></div>
    </div>
</div>
);
};

export default ActivityFeed;