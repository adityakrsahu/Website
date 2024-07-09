import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    < >
    <div className='container'>
    <div>
        <div>
            <h3>Hello, My Name is</h3>
            <h1>Aditya Kumar</h1>
            <p>Fresher learn new technologies and skills. I'm new to the IT 🖥 field. <br/>
            I've built some projects and have good programming knowledge. I need support<br/> 
            to build a better version of myself with extra good programming knowledge.<br/>
            I've seen so many people's ideas floating around the Internet that <br/>
            I've decided to contribute my own. wants to be a part of the<br/>
            software development.</p>
        </div>
        <div>

        </div>
    </div>
    <div>
        <Link to="/">Download Resume !</Link>
    </div>
      </div>
    </>
  )
}

export default Home;
