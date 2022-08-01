import React from 'react'
import './Project.css'

export default function Project(props) {
    const data = props.data;
    return (
    <div className='project-container'>
        <div className='inner-container'>
            <h1 className='cool-font2 uline'>{data.name}</h1>
            <h1 className='cool-font'>{data.about}</h1>
            <h1 className='cool-font'>{data.learnt}</h1>
            <img src={data.img} alt="" />
            <h3 className='fa fa-github'><a href={data.link}> To Github</a></h3>
        </div>
    </div>
    )
}
