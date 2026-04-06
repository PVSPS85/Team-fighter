import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li>Overview</li>
                <li>Upload</li>
                <li>History</li>
                <li>Compare</li>
                <li>Insights</li>
                <li>Chatbot</li>
                <li>Settings</li>
            </ul>
        </aside>
    );
};

export default Sidebar;

