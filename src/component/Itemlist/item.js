import React from 'react'
import List from './list'
const item = () => {
    const items=['Ayyapan','sabs','karthick'];
  return (
    <div>
    <h1>displaying the number of list</h1>
    <List item = {items}/>
    </div>
  )
}

export default item