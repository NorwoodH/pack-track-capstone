
//import { useState, useEffect } from "react";
import { GearEntry } from "./GearEntry";
//import { useNavigate } from "react-router-dom";

export const GearList = ({gearEntries, deleteGearEntry, updateGearState}) => {
  const myFunc = (total, num) => {
    return total + num;
  }
  const weightTotal = () => { 
    const weight = gearEntries.map(x=> + x.weight).reduce(myFunc, 0)
  console.log(weight)
  return weight
}



  return(
    <>
    {
      gearEntries.map((singleGear) => <GearEntry key={`gear--${singleGear.id}`} singleGear = {singleGear} deleteGearEntry={deleteGearEntry} updateGearState={updateGearState}/> )
    }

    
  
   <div className= "gearWeight"> 
   Total pack weight: {weightTotal()}
    </div></>
  )
}
