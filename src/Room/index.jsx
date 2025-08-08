import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomId } = useParams();
    const elementRef = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            try {
                const appID = 269557652;
                const serverSecret = "fa629121e0fcd4c7a65c5ba52bde2b20";
                const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                    appID,
                    serverSecret,
                    roomId,
                    Date.now().toString(),
                    "Kashyap"
                );

                const zc = ZegoUIKitPrebuilt.create(kitToken);
                zc.joinRoom({
                    container: elementRef.current,
                    sharedLinks: [
                        {
                            name: 'Copy Link',
                            url: `http://localhost:5173/room/${roomId}`,
                        },
                    ],
                    scenario: {
                        mode: ZegoUIKitPrebuilt.OneONoneCall,
                    },
                    showScreenSharingButton: true,
                });
            } catch (error) {
                console.error("Error initializing meeting:", error);
            }
        };

        if (elementRef.current) {
            myMeeting();
        }
    }, [roomId]);

    const containerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000', // Optional: Set a background color
        zIndex: 1000, // Ensure it's on top of other elements
    };

    const videoCallStyle = {
        width: '100%',
        height: '100%',
    };

    return (
        <div style={containerStyle}>
            <div ref={elementRef} style={videoCallStyle} />
        </div>
    );
};

export default RoomPage;
