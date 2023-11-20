import React, { useEffect, useState, useRef } from 'react';
import "../messages/messages.css"
import { useLocation } from 'react-router';
import { getMessages } from './MessageAPIManager';


export const AddMessage = () => {

    const location=useLocation()

    const pageReload = () => {
        window.location.reload();
    }


    const localPackTrackUser = localStorage.getItem("activeUser")
    const packTrackUserObject = JSON.parse(localPackTrackUser)

    const [message, setMessage] = useState({
        userId: packTrackUserObject.id,
        message: ""
    });

    const [messageAdded, setMessageAdded] = useState(false);

    const postNewMessage = () => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(pageReload())
    };

    useEffect(() => {
        if (messageAdded) {
            setMessageAdded(false)
        }
    }, [messageAdded])

    
    const messageChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    }

return (
    <div className="container-fluid d-flex justify-content-between align-items-center fixed-bottom">
        <div className="message-add-container" >
            <input className="message-form" type="text" name="message" value={message.message} onChange={messageChange} />
            <button  className="message-add-button" onClick={postNewMessage}>Add Message</button>
        </div>
        </div>
)


}