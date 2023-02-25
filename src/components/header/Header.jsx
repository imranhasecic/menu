import React from 'react'
import classes from "./Header.css"
import {BsChevronDown} from "react-icons/bs"
import {BsMouse} from "react-icons/bs"
export default function header() {
  return (
    <div>
      <header className={classes.header}>
          <h1>Enjoy Our Cuisine</h1>
              <div className='mouse'>
                  <BsMouse />
              </div>              
              <div className='first'><BsChevronDown /></div>
              <div className='second'><BsChevronDown /></div>
              <div className='third'><BsChevronDown /></div>          
      </header>
    </div>
  )
}
