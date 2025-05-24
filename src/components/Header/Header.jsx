import React from 'react';
import { RiSearchLine, RiNotificationLine, RiAddLine } from 'react-icons/ri';
import profileIcon from '../../assets/profileicon.jpg'

    const Header = () => {
    return (
            <header className="header">
            <div className="logo">Healthcare.</div>

    <div className="search-bar">
        <RiSearchLine className="search-icon" />
        <input type="text" placeholder="Search..." />
        </div>

    <div className="header-actions">
        <RiNotificationLine className="notification-icon" />
        <RiAddLine className="add-icon" />
    <div className="user-profile">
        <img src={profileIcon} alt="User" />
        <span>Rahul Saxena</span>
</div>
</div>
        </header>
    );
};

export default Header;