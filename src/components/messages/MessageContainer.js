import { Link } from "react-router-dom"
import { MessageList } from "./MessageList"
import { AddMessage } from "./AddMessage"
import { MessageDetails } from "./MessageDetails"
import "../messages/messages.css"


export const MessageContainer = ({ }) => {

    


    return (
        <div>
        <MessageList />
        <MessageDetails />
        <AddMessage />
        </div>
    )

}