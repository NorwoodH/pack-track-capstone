import { useEffect, useState } from "react"
import { TripList } from "./TripList.js"
import { getAllTripEntries } from "./TripAPIManager.js"
import { TripForm } from "./TripForm.js"

export const TripContainer = () => {
    const [tripEntries, setTripEntries ] = useState([])

    useEffect(
        () => {
          getAllTripEntries()
          .then((tripArray) => {
            setTripEntries(tripArray)
          })
        },
        []
      )

      const updateTripState = () => {
        return getAllTripEntries()
          .then((tripArray) => {
            setTripEntries(tripArray)
          })
        }
        const deleteTripEntry = (id)=> {
            return fetch(`  http://localhost:8088/trips/${id}`, {method: "DELETE"})
            .then(updateTripState)
          }


    return (

    <section className="section">
        <div className="container">
            <h1 className="title">
                Trips
            </h1>
            <p className="subtitle">
                 Plain your trip
            </p>
            <div className="columns">
                <div className="column is-three-fifths">
                    <TripForm updateTripState={updateTripState} />
                </div>
                <div className="column">
                   
                </div>
            </div>
            <TripList tripEntries={tripEntries} deleteTripEntry={deleteTripEntry} updateTripState={updateTripState}/>
    </div>
    </section>
    )
}
