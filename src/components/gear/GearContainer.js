import { useEffect, useState } from "react"
import { GearList } from "./GearList.js"
import { getAllGearEntries } from "./GearAPIManager.js"
import { GearForm } from "./GearForm.js"


//display list of gear 


export const GearContainer = () => {
    const [gearEntries, setGearEntries ] = useState([])

    useEffect(
        () => {
          getAllGearEntries()
          .then((gearArray) => {
            setGearEntries(gearArray)
          })
        },
        []
      )

      const updateGearState = () => {
        return getAllGearEntries()
          .then((gearArray) => {
            setGearEntries(gearArray)
          })
        }
        const deleteGearEntry = (id)=> {
            return fetch(`  http://localhost:8088/gear/${id}`, {method: "DELETE"})
            .then(updateGearState)
          }


    return (

    <section className="section">
        <div className="container">
            <h1 className="title">
                Gear
            </h1>
            <p className="subtitle">
                 Enter your gear
            </p>
            <div className="columns">
                <div className="column is-three-fifths">
                    <GearForm updateGearState={updateGearState} />
                </div>
                <div className="column">
                   
                </div>
            </div>
            <GearList gearEntries={gearEntries} deleteGearEntry={deleteGearEntry} updateGearState={updateGearState}/>
    </div>
    </section>
    )
}
