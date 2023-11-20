import { useEffect, useState } from "react"

export const LocationSelect = ({handleControlledInputChange, TripEntry}) => {
    const [locations, setLocations] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [newLocation , setNewLocation] = useState({})

    const handleControlledInputChangeHere = (e) => {

        const newNewLocation = {...newLocation}
    
        newNewLocation[`${e.target.name}`] = e.target.value
    
        setNewLocation(newNewLocation)
     }

     const saveNewLocation = (e) => {
        e.preventDefault()
        return fetch("http://localhost:8088/trips", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newLocation),
          }).then(() => {
            return fetch("http://localhost:8088/events")
            .then(r => r.json())
            .then(tripLocations => setLocations(tripLocations))
          })
          .then(() => setShowForm(false))
     }

    useEffect(() =>{
        fetch("http://localhost:8088/events")
        .then(r => r.json())
        .then(eventLocations => setLocations(eventLocations))
    },[])

    return ( 
        
        !showForm ?
        <div className="field has-addons">
            <label className="label">Location</label>
            <div className="control">
          
                        <div className="select">
                          <select name="locationId" onChange={handleControlledInputChange} value={TripEntry.locationId}>
                            <option>Enter Location</option>
                                {
                                 locations.map(location => <option key={location.id} value={location.id}>{location.locationName}</option>)
                                }
                          </select>
                        </div>
                    </div>
                        <div className="control" >
                            <button className="btn btn-primary" onClick={()=> {
                                setShowForm(!showForm)
                            }}>Add a location</button>
                        </div>
                        
        </div> 
        :

        <div className="field has-addons">
  <div className="control">
    <input className="input" name="locationName" type="text" placeholder="Add a location" value={newLocation.name} onChange={handleControlledInputChangeHere} />
  </div>
  <div className="control">
    <button className="btn btn-primary" onClick={saveNewLocation}>
      Add
    </button>
  </div>
</div>
    )
}