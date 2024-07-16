import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Contact() {

  const [contact, SetContact] = useState({});

  const handleInput=(e)=>{
    let name = e.target.name;
    let email = e.target.email;
    let phone = e.target.phone;
    let project = e.target.project;


    let value=e.target.value;
    SetContact(values=>({...values,
      [name]:value,
      [email]:value,
      [phone]:value,
      [project]:value
    }));

  }

  const handleSubmit=()=>{
    console.log(contact);
    const url = `http://127.0.0.1:8000/contact/`;
    axios.post(url,contact).then((response)=>{
        alert("info successfully");
    })

  }


  return (
    <>
      <div>
        <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black Radius ">
                  <div className="card-body p-md-5">
                    <h1 className="cont" >CONTACT ME !</h1>
                    <div className="row justify-content-center">


                      <div  className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1">
                        <img src="https://anishhh20.github.io/anish-portfolio/images/contact1.jpg" className="img-fluid" alt="Sample image"/>
                      </div>


                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                              <input type="text" id="form3Example1c" onChange={handleInput} className="form-control" />
                           
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                              <input type="email" id="form3Example3c" onChange={handleInput} className="form-control" />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">  
                            <label className="form-label" htmlFor="form3Example4c">Your Mobile Number</label>
                            <input type="tel" id="form3Example4c" onChange={handleInput} className="form-control" />
                            
                            
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example4c">Leave a comment about How's this project.😒</label>
                              <input type="text" id="form3Example4c" onChange={handleInput} className="form-control" />
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" data-mdb-button-init data-mdb-ripple-init onClick={handleSubmit} className="btn btn-primary btn-lg" >Send</button>
                          </div>
                        </form>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
