import React from 'react'
import './App.css'
import Navbar from './Comps/Navbar'
import Resume from './Pages/Resume/Resume'
import Projects from './Pages/Projects/Projects'

export default function App() {

  const [currentPage, setCurrentPage] = React.useState(0);
  const key = [
    {"name": "Resume", "obj": <Resume />},
    {"name": "Projects", "obj": <Projects />}
  ]

  // console.log(window.innerWidth)

  function changePage(id) {
    if (id !== currentPage){
      setCurrentPage(id)
      console.log(`Current Page: ${currentPage}`)
    }
  }

  let c_page = key[currentPage].obj 

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} changePage={changePage} pageNames={key.map(p => p.name)} />
      {c_page}
    </div>
  )
}