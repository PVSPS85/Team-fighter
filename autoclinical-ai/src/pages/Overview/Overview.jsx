import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Overview.css';

const Overview = () => {
    return (
        <div className="overview">
            <Navbar />
            <Sidebar />
            <main>
                <h2>Welcome back, User's Name</h2>
                <h3>Your AI-powered health intelligence overview</h3>
                {/* Include StatCards and other components */}
            </main>
        </div>
    );
};

export default Overview;

