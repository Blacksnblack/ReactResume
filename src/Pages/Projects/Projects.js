import React from 'react'
import { data } from '../../Data/Projects_Data'
import Project from '../../Comps/Project'
import './Projects.css'

export default function Projects() {
    const [index, setIndex] = React.useState(0)

    const projs = data.map(proj => {
        return <Project data={proj} />
    })  
    function changeProject(i){
        let newIndex = Math.min(Math.max(index+i, 0), projs.length-1)
        setIndex(newIndex)
        console.log(index)
    }
    return (
    <div className="projects-container">
        <button onClick={() => changeProject(-1)}><div className={`arrow left ${index===0 ? "grey" : ""}`}>{"<"}</div></button>
        <div className='middle'>
            {projs[index]}
        </div>
        <button onClick={() => changeProject(1)}><div className={`arrow right ${index===projs.length-1 ? "grey" : ""}`}>{">"}</div></button>
    </div>
    )
}
