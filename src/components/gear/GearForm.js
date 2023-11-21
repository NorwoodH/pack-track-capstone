import { useState } from "react"
import { useNavigate } from "react-router-dom";


export const GearForm = ({updateGearState}) => {
 const [GearEntry, setGearEntry] = useState({
    title: '',
    weight: '',
    entryText: ''
 });

 const navigate = useNavigate()
 const activeUser = localStorage.getItem("activeUser");
	const activeUserObject = JSON.parse(activeUser);


 const handleControlledInputChange = (e) => {

    const newGearEntry = {...GearEntry}

    newGearEntry[`${e.target.name}`] = e.target.value

    setGearEntry(newGearEntry)
 }

 const saveEntry = (e) => {
    e.preventDefault()

    const entryToSend = {...GearEntry}

    entryToSend.userId = activeUserObject.id
    if(entryToSend.title && entryToSend.weight && entryToSend.entryText ){
        fetch("http://localhost:8088/gear", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entryToSend),
        })
        .then(r => r.json())
        .then(updateGearState())
        .then(setGearEntry({title: '', weight: '', entryText: ''}))
        .then(() => navigate("/gear"))
 }}


    return ( 
        <form onSubmit={saveEntry}>
            <div className="field">
                <label className="label">Gear Item</label>
                <div className="control">
                    <input name="title" className="input" type="text" placeholder="Enter gear" value={GearEntry.title} onChange={handleControlledInputChange}/>
                </div>
            </div>
            <div className="field">
               {/* date selection commented out for gear as its not needed.
               <label className="label">Date</label>
                <div className="control">
                    <input className="input" type="Date" name="dateTime" value={GearEntry.dateTime}  onChange={handleControlledInputChange}/>
                </div>
                 */}
            </div>
            <div className="field">
                <label className="label">Gear Weight</label>
                <div className="control">
                    <input name="weight" className="input" type="text" placeholder="Enter item weight" value={GearEntry.weight} onChange={handleControlledInputChange}/>
                </div>
                </div>
            <div className="field">
                <label className="label">Gear Description</label>
                <div className="control">
                    <textarea name="entryText" className="textarea" placeholder="Gear description ..." value={GearEntry.entryText}  onChange={handleControlledInputChange}></textarea> 
                </div>
            </div>
            <div className="control">
                <button type="submit" className="btn btn-success">Submit</button>
            </div>
     
        </form>
    )
}
