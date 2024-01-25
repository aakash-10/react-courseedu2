import React from 'react'
// import { useLocation } from "react-router-dom"
// import Search from '../allcourses/Search'

function Back(props) {

  // const location = useLocation()

  return (
    <>
    <section className='back'>
            <h1>{props.title}</h1>
            <div >
            {/* {location.pathname.split("/")[1] === "courses" && <Search/>} */}
            </div>
        </section>
        <div className='margin'>
          
        </div>
    </>
  )
}

export default Back


