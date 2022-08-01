import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  console.log(props)
  const buttons = props.pageNames.map((page, i) => {
      return <button className='bttn' key={i} name={i} onClick={() => {props.changePage(i)}} >{page}</button>
  })
  return (
    <div className="nav-container">
        {buttons}

    </div>
  )
}
