import React from 'react';
import './dashboard.scss'
import hiGif from "../../../assets/images/hiGif.gif"

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <h2>Dashboard</h2>
                <div className="main_content">
                    <div>
                        <img src={hiGif} alt="" />
                        <h3>Taher Mamun</h3>
                    </div>
                    <h1>Welcome to MaxShop</h1>
                </div>
            </div>
        </>
    );
};

export default Dashboard;