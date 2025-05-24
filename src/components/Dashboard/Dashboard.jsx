import React from 'react';
import AnatomySection from './AnatomySection/AnatomySection';
import HealthCards from './Healthcards/Healthcards';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from './ActivityFeed/ActivityFeed';

const Dashboard = () => {
return (
<div className="dashboard">
    <div className="dashboard-row">
    <div className="health-section">
        <AnatomySection />
        <HealthCards />
    </div>
    
    <div className="calendar-section">
        <CalendarView />
    </div>
    </div>
    
    <div className="dashboard-row">
    <UpcomingSchedule />
    <ActivityFeed />
    </div>
</div>
);
};

export default Dashboard;