import React from 'react'

const list = ({item}) => {
  return (
     <ul>
    
     { item.map((a,index) => (
        
  <li key={index}>{a}</li>
  ))}
    
    </ul>
  )
}

export default list