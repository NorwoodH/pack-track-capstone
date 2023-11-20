import { useState } from "react"
import { useNavigate } from "react-router-dom";



export const TripForm = ({}) => {
 const [TripEntry, setTripEntry] = useState({})

 const navigate = useNavigate()
 const activeUser = localStorage.getItem("activeUser");
	const activeUserObject = JSON.parse(activeUser);

 const handleControlledInputChange = (e) => {

    const newTripEntry = {...TripEntry}

    newTripEntry[`${e.target.name}`] = e.target.value

    setTripEntry(newTripEntry)
 }

 const saveEntry = (e) => {
    e.preventDefault()

    const entryToSend = {...TripEntry}
    entryToSend.userId = activeUserObject.id
    if(entryToSend.title && entryToSend.dateTime && entryToSend.entryText ){
        fetch("http://localhost:8088/trips", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entryToSend),
        }).then(r => r.json())
        .then(r => setTripEntry({}))
        .then(() => navigate("/trips"))
 }}

    return ( 
        <form onSubmit={saveEntry}>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input name="title" className="input" type="text" placeholder="Name your trip" value={TripEntry.title} onChange={handleControlledInputChange}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Date</label>
                <div className="control">
                    <input className="input" type="Date" name="dateTime" value={TripEntry.dateTime}  onChange={handleControlledInputChange}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Location</label>
                <div className="control">
                    <input name="location" className="input" type="text" placeholder="Name your location" value={TripEntry.location} onChange={handleControlledInputChange}/>
                </div>
                </div>
            <div className="field">
                <label className="label">Trip</label>
                <div className="control">
                    <textarea name="entryText" className="textarea" placeholder="Trip description ..." value={TripEntry.entryText}  onChange={handleControlledInputChange}></textarea> 
                </div>
            </div>

            <div className="control">
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
     
        </form>
    )
}
