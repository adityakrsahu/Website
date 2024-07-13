import React from 'react';

function Contact() {
  return (
    <>
      <div>
        <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: '25px' }}>
                  <div className="card-body p-md-5">
                    <h1 style={{ marginLeft: '270px', color: 'rgb(14 42 253)' }}>CONTACT ME !</h1>
                    <div className="row justify-content-center">


                      <div  className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1">
                        <img src="https://anishhh20.github.io/anish-portfolio/images/contact1.jpg" className="img-fluid" alt="Sample image"/>
                      </div>


                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example1c" className="form-control" />
                              <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <input type="email" id="form3Example3c" className="form-control" />
                              <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <input type="tel" id="form3Example4c" className="form-control" />
                              <label className="form-label" htmlFor="form3Example4c">Your Mobile Number</label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                              <input type="text" id="form3Example4c" className="form-control" />
                              <label className="form-label" htmlFor="form3Example4c">Leave a comment about How's this project.😒</label>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Send</button>
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
