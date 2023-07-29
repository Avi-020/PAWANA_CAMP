import React from 'react'
import WhatsappLOGO from "../images/WhatsappLOGO.png"
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
// @import '~mdb-ui-kit/css/mdb.min.css';


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





{/* <!-- Carousel wrapper --> */}
<div
  id="carouselBasicExample"
  className="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  {/* <!-- Indicators --> */}
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  {/* <!-- Inner --> */}
  <div className="carousel-inner">
    {/* <!-- Single item --> */}
    <div className="carousel-item active">
      <img
        src="https://s3.ap-south-1.amazonaws.com/townscript-production/images/8eb2c690-f830-48de-ba88-e40adbe844f8.jpg"
        className="d-block w-100"
        alt="Sunset Over the City"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>PAWANA LAKE SUNSHINE CAMPING</h5>
        
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item">
      <img
        src="https://www.tripadvisortour.com/wp-content/uploads/2022/03/Pawna-Camping-6.jpeg"
        className="d-block w-100"
        alt="Canyon at Nigh"
      />
      <div className="carousel-caption d-none d-md-block">
      <h5>PAWANA LAKE SUNSHINE CAMPING</h5>

      </div>
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item">
      <img
        src="https://roundtheworld.in/wp-content/uploads/2021/05/Pawna-lake-Camp-J-06.jpeg"
        className="d-block w-100"
        alt="Cliff Above a Stormy Sea"
      />
      <div className="carousel-caption d-none d-md-block">
      <h5>PAWANA LAKE SUNSHINE CAMPING</h5>

      </div>
    </div>
  </div>
  {/* <!-- Inner -->

  <!-- Controls --> */}
  <button
    className="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* <!-- Carousel wrapper --> */}



<div style={{textAlign:"center",marginTop:"2vh"}}>

<h3>Pakages</h3>
</div>





{/* card to offering */}
{/* <!-- Carousel wrapper --> */}
<div
  id="carouselMultiItemExample"
  className="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>
  
  {/* <!-- Inner --> */}
  <div className="carousel-inner py-4">
    {/* <!-- Single item --> */}
    <div className="carousel-item active">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                className="card-img-top"
                alt="Waterfall"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the cards content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the cards content.
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the cards content.
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the cards content.
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/185.webp"
                className="card-img-top"
                alt="Storm Clouds"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the cards content.
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/186.webp"
                className="card-img-top"
                alt="Hot Air Balloons"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the cards content.
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Single item --> */}
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/187.webp"
                className="card-img-top"
                alt="Peaks Against the Starry Sky"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the cards content.
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/188.webp"
                className="card-img-top"
                alt="Bridge Over Water"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the cards content.
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/189.webp"
                className="card-img-top"
                alt="Purbeck Heritage Coast"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the cards content.
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Inner --> */}
  {/* <!-- Controls --> */}
  <div className="d-flex justify-content-center mb-4">
    <button
      className="carousel-control-prev position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
{/* <!-- Carousel wrapper --> */}









{/* footer of whatsapp */}
<div className='whatsapp' style={{textAlign:"end"}}>

      <a href="https://wa.me/9067661322">
        <img alt="Chat on WhatsApp" src={WhatsappLOGO} style={{width:"20vh", height:"20vh",position:"sticky"}} />
      </a>
</div>
    </>
  )
}

export default HomePage
