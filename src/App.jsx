import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'



function App() {
  
  
  
  const [country, setCountry] = useState("")
  const [countryData, setCountryData] = useState()
  
  const callCountry= function(){
    
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res)=>{
      
      return res.json();
      
    })
    .then(data=>{
      setCountryData(data);
    })
  }

  const countryName=(e)=>{
    e.preventDefault();
    callCountry()
    
  }
  const changed=(e)=>{
   const countryName=(e.target.value)
    setCountry(countryName);
  }
  
 
  return (
    <div>
      {
        countryData && countryData.map((item, index)=>{
           return (<div><h2 key={index}>{(item.name.common)}</h2>
           <img src={item.flags.png} alt="countryflag"/>
           {console.log(index)}
           </div>
           )
        })
      }

      
      <form onSubmit={countryName}>
        <input name="name" id="name" onChange={changed}></input>
      <button>Know</button>
      </form>
    </div>
  )
}

export default App
