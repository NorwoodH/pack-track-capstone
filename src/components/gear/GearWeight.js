
import { useEffect, useState } from "react"


export const WeightSelect = ({handleControlledInputChange, GearEntry}) => {
    const [weights, setWeights] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [newWeight , setNewWeight] = useState({})


    const handleControlledInputChangeHere = (e) => {

        const newNewWeight = {...newWeight}
    
        newNewWeight[`${e.target.name}`] = e.target.value
    
        setNewWeight(newNewWeight)
     }

     const saveNewWeight = (e) => {
        e.preventDefault()
        return fetch("http://localhost:8088/gear", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newWeight),
          }).then(() => {
            return fetch("http://localhost:8088/gear")
            .then(r => r.json())
            .then(gearWeights => setWeights(gearWeights))
          })
          .then(() => setShowForm(false))
     }

    useEffect(() =>{
        fetch("http://localhost:8088/gear")
        .then(r => r.json())
        .then(gearWeights => setWeights(gearWeights))
    },[])

    return ( 
        
        !showForm ?
        <div className="field has-addons">
            <label className="label">Weight</label>
            <div className="control">
          
                        <div className="select">
                          <select name="weightId" onChange={handleControlledInputChange} value={GearEntry.weightId}>
                            <option>Enter Weight</option>
                                {
                                 weights.map(weight => <option key={weight.id} value={weight.id}>{weight.weightName}</option>)
                                }
                          </select>
                        </div>
                    </div>
                        <div className="control" >
                            <button className="btn btn-primary" onClick={()=> {
                                setShowForm(!showForm)
                            }}>Add a weight</button>
                        </div>
                        
        </div> 
        :

        <div className="field has-addons">
  <div className="control">
    <input className="input" name="weightName" type="text" placeholder="Add a weight" value={newWeight.name} onChange={handleControlledInputChangeHere} />
  </div>
  <div className="control">
    <button className="btn btn-primary" onClick={saveNewWeight}>
      Add
    </button>
  </div>
</div>
    )
}
