import React from 'react';
import { navLinks } from '../../data/mockData';
import {
    RiDashboardLine, RiHistoryLine, RiCalendarLine, 
    RiCalendarEventLine, RiBarChartLine, RiFlaskLine,
    RiChat1Line, RiCustomerServiceLine, RiSettingsLine
} from 'react-icons/ri';

const iconComponents = {
    RiDashboardLine,
    RiHistoryLine,
    RiCalendarLine,
    RiCalendarEventLine,
    RiBarChartLine,
    RiFlaskLine,
    RiChat1Line,
    RiCustomerServiceLine,
    RiSettingsLine
};

const Sidebar = () => {
return (
<nav className="sidebar">
    <h3 className="sidebar-title">General</h3>
    <ul className="nav-links">
    {navLinks.map((link) => {
        const Icon = iconComponents[link.icon];
        return (
        <li key={link.id} className="nav-item">
            <Icon className="nav-icon" />
            <span>{link.name}</span>
        </li>
        );
    })}
    </ul>
</nav>
);
};

export default Sidebar;