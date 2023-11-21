//import { useState, useEffect } from "react";
import { TripEntry } from "./TripEntry";
//import { getAllTripEntries } from "./TripAPIManager";
//import { useNavigate } from "react-router-dom";

//gets a list of all trips from api 

export const TripList = ({tripEntries, deleteTripEntry, updateTripState}) => {
  return (
    <>
  {
    tripEntries.map((singleTrip) => <TripEntry key={`trip--${singleTrip.id}`} singleTrip = {singleTrip} deleteTripEntry={deleteTripEntry} updateTripState={updateTripState}/> )
  }
</>
)
}

