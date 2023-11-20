
import { useState, useEffect } from "react";
import { GearEntry } from "./GearEntry";
import { useNavigate } from "react-router-dom";


export const GearList = ({ }) => {

const [gearEntries, setGearEntries] = useState([])
 const navigate = useNavigate()

  useEffect(
    () => {
      fetch("http://localhost:8088/gear")
      .then(response => response.json())
      .then((gearArray) => {
        setGearEntries(gearArray)
      })
    },
    []
  )

    
return (
    <>
    <button onClick={() => navigate("/gear/create")}> Create New Gear </button>
  {
    gearEntries.map((singleGear) => {
    return <>
    <GearEntry key={`gear--${singleGear.id}`} singleGear = {singleGear} /> </>}) 
  }
</>
)
}
