import React,{useState,createContext, useContext} from 'react'

export const Theme=createContext();
const Provider = () => {
    const [name,setName]=useState('sabs');
  return (
    <Theme.Provider value={name}>
    <Con/>
    </Theme.Provider>
  )
}
const Con= () =>{
    const name=useContext(Theme);
    return(
        <>
        <h1>{name}</h1>
        </>
    )
}

export default Provider