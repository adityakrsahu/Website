import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
        <div className='container'>
            <div>
                <div></div>
                <div>
                    <h1>ABOUT ME !</h1>
                    <h4>Student and a Developer</h4>
                    <h4>with Different Programming lang</h4>
                    <h4>Connect over:  <Link to="https://www.linkedin.com/in/aditya-kumar-068169212/">LinkedIn👈</Link>  </h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default About;