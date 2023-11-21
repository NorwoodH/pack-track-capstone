import { useEffect, useState } from "react"


export const GearEntry = ({singleGear , updateGearState }) => {
  const [showForm, setShowForm] = useState(false)
  const [editGear, setEditGear] = useState({})

useEffect(() => {
  setEditGear(singleGear)
},[])

const handleControlledInputChange = (e) => {

  const newGearEntry = {...editGear}

  newGearEntry[`${e.target.name}`] = e.target.value

  setEditGear(newGearEntry)
}

const updateEntry = (e) => {
  e.preventDefault()

  const entryToSend = {...editGear}

      fetch(`http://localhost:8088/gear/${editGear.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryToSend),
      })
      .then(r=> r.json())
      .then(updateGearState)
      .then(() => {setShowForm(false)})
}

const deleteGearEntry = (id)=> {
  return fetch(`  http://localhost:8088/gear/${id}`, {method: "DELETE"})
    .then(updateGearState)
}

   return <>
   {!showForm ? 
    <article className="gear">
 
          <div className="gear-header">
           <p>{singleGear.title}</p>
    </div>
    <div className="gear-body">
      </div>
      <div>Weight: {singleGear.weight}</div>
      <div>Description: {singleGear.entryText}</div>
      <button className="btn btn-warning" aria-label="edit" onClick={() => setShowForm(!showForm)}>Edit</button>
      <button className="btn btn-danger" aria-label="delete" onClick={() => {
         deleteGearEntry(+singleGear.id)}}>Delete</button>

    </article>
    :
    <article className="gear">
 
    <div className="gear-header">
    <input name="title"  type="text" placeholder="Gear name" value={editGear.title} onChange={handleControlledInputChange}/>     <p></p>
   
     {/*<input type="Date" name="dateTime" value={editGear.dateTime}  onChange={handleControlledInputChange}/>*/}
</div>

<div className="gear-body">
<input name="weight" type="text" placeholder="Gear entry field." value={editGear.weight}  onChange={handleControlledInputChange} />
</div>

<div className="gear-body">
<textarea name="entryText" className="textarea" placeholder="Gear location field." value={editGear.entryText}  onChange={handleControlledInputChange}> </textarea>
</div>

<button className="btn btn-success"  onClick={(e) => updateEntry(e)}>Save</button>
<button className="btn btn-secondary"  onClick={() => setShowForm(!showForm)}>Cancel</button>


</article>
}
    </>
}
