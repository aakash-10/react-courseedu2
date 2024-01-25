import React from 'react'
import './Homecard.css'

function HomeCard() {
  return (
    <>
    <section className='homecard'>
     <div className='container'>
     <div className="ow">
                    <div id="heading">
                    {/* <h3>Welcome to CourseEdu</h3> */}
                    <h1>Best Online Education</h1>
                    </div>
                    <p>lorem jsgid uasikdua jhsfikaushofa siuusdfgidf hni. Ciahdo9sif gdfusefgosgdoh eutg73egtgeuffisu wegyrf8wyegd fdvatfs dahsyd8asd gfd ydf6ygf87astx adrw4e ashyfa i8eruf aytrds kusydfczcf atf6wsfd</p>
                  </div>
            </div>
            <div>
              {/* <button>
              <a className="btn btn-primary btn-lg" href="/signup" role="button">Enroll Now 
              <i className="fa fa-long-arrow-alt-right"></i>
              </a>
              </button>
            <button>
            <a className="btn btn-primary btn-lg" href="/courses" role="button">View Courses
            <i className="fa fa-long-arrow-alt-right"></i>
            </a>
            </button> */}
            <p>

          <div style={{display:'flex'}}>
         <div className="linkss" >
           

           <a className="text-light"  href="/signup">GET STARTED NOW</a>
           </div>
           <div className='linkss'>
          <a className='text-light' href='/courses'>VIEW COURSES
           </a>
          
           </div>
          </div>
          
           
          </p>

            </div>
      
    </section>
    </>
  )
}

export default HomeCard