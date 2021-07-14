import logo from './logo.svg';
import './App.css';
import React, {Componen, useEffect, useState} from "react"
import data from './data'

function App() {
  const [data1,setData] = useState({
    firstName : ' ',
    lastName : ' '
  }
  )
  
//useEffect(() => {
  const getData = ()=>{
      setData(data)
  }
  //getData()
//},[])
    return (
    <div>
      <button onClick = {() => getData()}>Display</button>
      Name: {data1.firstName} 
      Last Name : {data1.lastName}      
    </div>
  )
}

export default App

