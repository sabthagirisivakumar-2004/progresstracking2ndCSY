import React from 'react'
import {useContext} from 'react';
import {Theme} from './provider'
const Context = () => {
    const context =useContext(Theme);
  return (
    <div>{context}</div>
  )
}

export default Context