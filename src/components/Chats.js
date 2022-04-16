import React, { useRef, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';


const Chats = () => {

    const history = useHistory();

    

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }
    
      

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    FireChat
                </div>
                <div
                    onClick={handleLogout}
                    className="logout-tab">
                        Logout
                </div>
            </div>
            <ChatEngine
                height="calc(100vh - 66px)" 
                projectID="cecfc1e0-4e57-4eb5-b2a6-235f7dc253dd"
                userName="."
                userSecret="."
            />
        </div>
    )
}


export default Chats;