import React ,{useState} from 'react'

export default function SpotCheck1() {
  const [cuurNumber , setNumber] = useState(0);

  const increas = ()=> setNumber(cuurNumber +1)
  const dencreas = ()=> setNumber(cuurNumber -1) 
  

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <h2>{cuurNumber}</h2>
        <button onClick={increas}> increas</button>
        <button onClick={dencreas}> dencreas</button>

      </div>
    </div>
  )
}