import React from 'react'
import WhatsappLOGO from "../images/WhatsappLOGO.png"

function HomePage() {
  return (
    <>

      {/* navbar  */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <b>SUNSHINE CAMPING</b> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* main content  */}
      <div className="headings mt-5 ms-5">

        <h6 style={{ color: "#110e0e5c" }}>PAWANA LAKE</h6>
        <h1><b>SUNSHINE CAMPING</b> </h1>
        <h6>Pawna Dam	&sbquo; Near Hilton	&sbquo; Kadav Maval	&sbquo; Pune 410 406</h6>
      </div>





<div className='whatsapp' style={{textAlign:"end"}}>

      <a href="https://wa.me/9067661322">
        <img alt="Chat on WhatsApp" src={WhatsappLOGO} style={{width:"20vh", height:"20vh",position:"sticky"}} />
      </a>
</div>


    </>
  )
}

export default HomePage
