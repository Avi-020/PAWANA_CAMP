import React from 'react'
import WhatsappLOGO from "../images/WhatsappLOGO.png"
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
// @import '~mdb-ui-kit/css/mdb.min.css';
import schedule from "../images/s4.svg"


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
  className="carousel slide carousel-fade mx-2"
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

<p className="ms-3 mt-3"> Looking for an extreme lakeside camping experience&#63; Where you
              will be surrounded by serene nature and forts around the lake&#63;
              We are offering you the convenience to explore Pawna lake. Pawna
              lake the most alluring camping spot in Lonavala. It is 20
              kilometers from Lonavala city center. 110 kilometers from Mumbai
              city&sbquo; and 58 kilometers from Pune city. We are offering you
              the best experience at SUNSHINE CAMPING. We provide a tent
              stay&sbquo; unlimited dinner&sbquo; free snacks&sbquo; and
              delicious barbecue. Not only that&sbquo; but we provide live
              guitar music on specific day to soothe your evening. A campfire
              and adventure activities will add more fun to your trip.</p>
<div style={{textAlign:"center",marginTop:"2vh"}}>


<h2 style={{textAlign:"center"}} >SUNSHINE CAMPING</h2>
<h4 style={{textAlign:"center",color:"rgba(17, 14, 14, 0.36)"}}>SCHEDULE</h4>
<div className="schedule">

<img src={schedule} alt="schedule"  style={{width:"100%",height:"auto"}}/>



</div>





<h3 className='mt-5' style={{textAlign:"center"}}>Pakages</h3>
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
                src="https://pawnacamp.com/storage/2018/11/Pawna-lake-camping-i-display-picture.jpg"
                className="card-img-top"
                alt="Waterfall"
              />
              <div className="card-body">
                <h5 className="card-title">SUNSHINE CAMPING</h5>
                <p className="card-text">
                 Starting From
                <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://pawnacamp.com/storage/2017/11/Pawnacamp-D-location-Aug-28-2022-08-14-AM-01.jpg"
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">SUNSHINE CAMPING</h5>
                <p className="card-text">
                 Starting From
                <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://pawnacamp.com/storage/2022/09/Pawna-camp-C-Family-camp-01.jpg"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">SUNSHINE CAMPING</h5>
                <p className="card-text">
                 Starting From
                <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
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
                src="https://pawnacamp.com/storage/2018/11/Pawna-lake-camping-camp-F-09.jpg"
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title">SUNSHINE CAMPING</h5>
                <p className="card-text">
                 Starting From
                <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://campatpawnalake.com/cdn/shop/products/WhatsAppImage2022-11-17at3.55.30PM.jpg?v=1668699011"
                className="card-img-top"
                alt="Storm Clouds"
              />
              <div className="card-body">
                <h5 className="card-title">SUNSHINE CAMPING</h5>
                <p className="card-text">
                 Starting From
                <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <img
                src="https://pawnacamp.com/storage/2017/09/WhatsApp-Image-2022-12-24-at-3.07.48-PM-683x455.jpeg"
                className="card-img-top"
                alt="Hot Air Balloons"
              />
              <div className="card-body">
                <h5 className="card-title">SUNSHINE CAMPING</h5>
                <p className="card-text">
                 Starting From
                <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
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
                src="https://vl-prod-static.b-cdn.net/system/images/000/642/528/f2c0e59271be20889630cecf76cebe3b/original/80be8ad9-4ec3-44f6-bb86-788b6700ad22.jpg?1665474765"
                className="card-img-top"
                alt="Peaks Against the Starry Sky"
              />
              <div className="card-body">
                <h5 className="card-title">SUNSHINE CAMPING</h5>
                <p className="card-text">
                 Starting From
                <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div className="card">
              <img
                src="https://pawnalakecamps.in/wp-content/uploads/2023/01/IMG-20230104-WA0005.jpg"
                className="card-img-top"
                alt="Bridge Over Water"
              />
              <div className="card-body">
                <h5 className="card-title">SUNSHINE CAMPING</h5>
                <p className="card-text">
                  Starting From
                <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                </p>
                <a href="#!" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
            <div className="card">
              <img
                src="https://pawnacamp.com/storage/2017/11/Pawna-lake-camping-camp-D-10-1.jpg"
                className="card-img-top"
                alt="Purbeck Heritage Coast"
              />
              <div className="card-body">
                <h5 className="card-title">SUNSHINE CAMPING</h5>
                <p className="card-text">
                 Starting From
                <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
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





<div className="table" style={{paddingLeft:"4vh",paddingRight:"4vh",marginBottom:"5vh"}}>


      <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col" style={{textAlign:"center"}}>REGULAR CAMP</th>
      <th scope="col" style={{textAlign:"center"}}>DELUX CAMP</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{textAlign:"center"}}>
      <td>₹1199 per person</td>
      <td>₹1499 per person</td>
    </tr>
    <tr style={{textAlign:"center"}}>
      <td>4PM to next day 11AM</td>
      <td>4PM to next day 11AM</td>
    </tr>
    <tr style={{textAlign:"center"}}>
      <td>Tea&sbquo; coffee&sbquo; poha in breakfast</td>
      <td>Tea&sbquo; coffee&sbquo; poha&sbquo; bread&sbquo; jam&sbquo; anda bhurji in breakfast</td>
    </tr>
    <tr style={{textAlign:"center"}}>
      <td>No live guitar show</td>
      <td>Live guitar on every Saturday</td>
    </tr>
    <tr style={{textAlign:"center"}}>
      <td>2/3 person sharing tents</td>
      <td>2/3/4 person sharing tents</td>
    </tr>
    <tr style={{textAlign:"center"}}>
      <td>200g BBQ per person
(Veg/Nveg)</td>
      <td>250g BBQ per person
(Veg/Nveg)</td>
    </tr>
    <tr style={{textAlign:"center"}}>
      <td>Unlimited dinner</td>
      <td>Unlimited dinner</td>
    </tr>
    <tr style={{textAlign:"center"}}>
      <td>Common campfire</td>
      <td>Common campfire</td>
    </tr>
    <tr style={{textAlign:"center"}}>
      <td>Trolley speaker</td>
      <td>Trolley speaker</td>
    </tr>
    <tr style={{textAlign:"center"}}>
      <td>Free parking</td>
      <td>Free parking</td>
    </tr>
    <tr style={{textAlign:"center"}}>
      <td>Games: Archery&sbquo; Dart game&sbquo; Cricket&sbquo; Football&sbquo; Badminton&sbquo; Carrom&sbquo; Volleyball and more</td>
      <td>Games: Archery&sbquo; Dart game&sbquo; Cricket&sbquo; Football&sbquo; Badminton&sbquo; Carrom&sbquo; Volleyball and more</td>
    </tr>
  </tbody>
</table>


</div>


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
