import React, { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        if (value.trim()) {
            navigate(`/room/${value}`);
        }
    }, [navigate, value]);

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
    backgroundImage: '',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'Arial, sans-serif',
    };
    

    const formContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        minWidth: '320px',
    };

    const inputStyle = {
        padding: '10px',
        margin: '10px 0',
        width: '100%',
        maxWidth: '300px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    };

    const buttonStyle = {
        padding: '10px',
        marginTop: '10px',
        width: '100%',
        maxWidth: '300px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#2D8CFF',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
    };

    const titleStyle = {
        fontSize: '28px',
        marginBottom: '8px',
        color: '#333',
    };

    const subtitleStyle = {
        fontSize: '16px',
        marginBottom: '20px',
        color: '#666',
    };

    return (
        <div style={containerStyle}>
            <div style={formContainerStyle}>
                <h1 style={titleStyle}>Web rtc Meet</h1>
                <p style={subtitleStyle}>Your private and secure meeting space.</p>
                <input
                    type="text"
                    placeholder="Enter Room code"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={inputStyle}
                />
                <button onClick={handleJoinRoom} style={buttonStyle}>
                    Join
                </button>
            </div>
        </div>
    );
};

export default HomePage;
