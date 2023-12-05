import React from 'react'

const child = ({item}) => {
  return (
    <>
    <button onClick={()=>{item('hello baiya')}}>click</button>
    </>
  )
}

export default child