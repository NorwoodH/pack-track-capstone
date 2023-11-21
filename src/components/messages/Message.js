import { Link } from "react-router-dom"
import { MessageDeleteButton } from "./MessageDelete"


export const Message = ({ message }) => {
    const localPackTrackUser = localStorage.getItem("activeUser")
    const packTrackUserObject = JSON.parse(localPackTrackUser)

    if (message.userId === packTrackUserObject.id) {
        return <section className="message">
            <div className="user-button">{message.user?.fullName}: {message.message}        <MessageDeleteButton messageId={message.id} />
            </div>

        </section>
    }
    return <div className="message">{message.user?.fullName}: {message.message}</div>

}
