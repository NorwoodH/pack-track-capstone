
import { useEffect, useState } from "react"


export const TripEntry = ({singleTrip }) => {
  const [showForm, setShowForm] = useState(false)
  const [editTrip, setEditTrip] = useState({})

useEffect(() => {
  setEditTrip(singleTrip)
},[])

const handleControlledInputChange = (e) => {

  const newTripEntry = {...editTrip}

  newTripEntry[`${e.target.name}`] = e.target.value

  setEditTrip(newTripEntry)
}

const updateEntry = (e) => {
  e.preventDefault()

  const entryToSend = {...editTrip}
  entryToSend.tripId = 1

      fetch(`http://localhost:8088/trips/${editTrip.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryToSend),
      }).then(r=> r.json())
      .then(() => {
        setShowForm(false)
        })
      
}

 const deleteTripEntry = (deleteTrip) => {
  if(singleTrip.id){
      return <button onClick={() => {
          fetch(`http://localhost:8088/trips/${deleteTrip}`, {
              method: "DELETE"
          })
      }} className= "delete">Delete</button>
  }
  else {
      return ""
  }
}

   return <>
   {!showForm ? 
    <article className="trip">
 
          <div className="trip-header">
           <p>{singleTrip.title}</p>
           
    </div>
    <div className="trip-body">
      </div>
      <div>Location: {singleTrip.location}</div>
      <div>Description: {singleTrip.entryText}</div>
      <button className="btn btn-warning" aria-label="edit" onClick={() => setShowForm(!showForm)}>Edit</button>
      <button className="btn btn-danger" aria-label="delete" onClick={() => {
           deleteTripEntry(+singleTrip.id)}}>Delete</button>

    </article>
    :
    <article className="trip">
 
    <div className="trip-header">
    <input name="title"  type="text" placeholder="Trip name" value={editTrip.title} onChange={handleControlledInputChange}/>     <p></p>
     <input type="Date" name="dateTime" value={editTrip.dateTime}  onChange={handleControlledInputChange}/>
</div>
<div className="trip-body">
<input name="entryText" type="text" placeholder="Trip entry field." value={editTrip.entryText}  onChange={handleControlledInputChange} />
</div>
<div className="event-body">
<textarea name="location" className="textarea" placeholder="Trip location field." value={editTrip.location}  onChange={handleControlledInputChange}> </textarea>
</div>

<button className="btn btn-success"  onClick={(e) => updateEntry(e)}>Save</button>
<button className="btn btn-secondary"  onClick={() => setShowForm(!showForm)}>Cancel</button>


</article>
}
    </>
}



