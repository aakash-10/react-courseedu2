import React from 'react'
import { homeAbout } from '../../data'
import Awrapper from './Awrapper'
import './About.css'

function AboutCard() {
  return (
    <>
    <section className='aboutHome'>
        <div className="container flexSB">
            <div className="left row" style={{padding:"90px"}} >
                <img src="./images/about.webp" alt="" style={{height:"auto",minWidth:"100%"}}/>
            </div>
            <div className="right row">
                  <div id="heading">
                    <h3>LEARN ANYTHING</h3>
                    <h1>Online Learning Expertise</h1>
                    </div>
                    <div className='items'>
                  {homeAbout.map((val)=>(
                    <div className='item flexSB'>
                        <div className='img'>
                            <img className='simage' src={val.cover} alt='' />
                        </div>
                        <div className='text'>
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
                </div>
                
        </div>
    </section>
    <Awrapper/>
    </>
  )
}

export default AboutCard