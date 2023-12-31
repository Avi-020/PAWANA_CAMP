import React from 'react'
import WhatsappLOGO from "../images/WhatsappLOGO.png"
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
// @import '~mdb-ui-kit/css/mdb.min.css';
import schedule from "../images/s4.svg"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactsIcon from '@mui/icons-material/Contacts';
import himg1 from "../images/HImg1.jpg"
import himg2 from "../images/Himg2.jpeg"
import himg3 from "../images/himg3.jpeg"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpeg"
import img7 from "../images/img7.jpg"
import img8 from "../images/img8.jpg"
import img9 from "../images/img9.jpg"
import FmdGoodIcon from '@mui/icons-material/FmdGood';import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import NavBar from './NavBar';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: "40vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "20px"
};


function HomePage() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>

      {/* pop up  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Lets Chat On
          </Typography>
          <div>

            <div className="icons mt-3">

              <a href="https://wa.me/+918009451818" >

                <WhatsAppIcon fontSize='large' style={{ marginLeft: "0vh" }} />
              </a>

              <a href="https://www.instagram.com/sunshine_camping_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target='_blank'>
                <InstagramIcon fontSize='large' style={{ marginLeft: "3vh" }} />
              </a>

              <a href="#contact">

                <ContactsIcon fontSize='large' id="contact" style={{ marginLeft: "3vh" }} />
              </a>
            </div>

            <div className="contact mt-3">
              <h6>Contact No.</h6>
              <Typography> <LocalPhoneIcon style={{marginRight:"1vh"}}/>8009451818</Typography>
              <Typography><LocalPhoneIcon style={{marginRight:"1vh"}} />8009451818</Typography>



            </div>
          </div>
        </Box>
      </Modal>


      {/* navbar  */}
     {/* <NavBar/> */}

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
              src={himg1}
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
              src={himg2}
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
              src={himg3}
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
      <div style={{ textAlign: "center", marginTop: "2vh" }}>


        <h2 style={{ textAlign: "center" }} >SUNSHINE CAMPING</h2>
        <h4 style={{ textAlign: "center", color: "rgba(17, 14, 14, 0.36)" }}>SCHEDULE</h4>
        <div className="schedule" id='Schedule'>

          <img src={schedule} alt="schedule" style={{ width: "100%", height: "auto" }} />



        </div>





      </div>
      <h3 className='mt-5' id='Pakages' style={{ textAlign: "center" }}>Pakages</h3>





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
                      src={img1}
                      className="card-img-top"
                      alt="Waterfall"
                    />
                    <div className="card-body">
                      <h5 className="card-title">SUNSHINE CAMPING</h5>
                      <p className="card-text">
                        Starting From
                        <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                      </p>
                      <a href="#" className="btn btn-primary" onClick={handleOpen}>Book Now</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={img2}
                      className="card-img-top"
                      alt="Sunset Over the Sea"
                    />
                    <div className="card-body">
                      <h5 className="card-title">SUNSHINE CAMPING</h5>
                      <p className="card-text">
                        Starting From
                        <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                      </p>
                      <a href="#" className="btn btn-primary" onClick={handleOpen}>Book Now</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={img3}
                      className="card-img-top"
                      alt="Sunset over the Sea"
                    />
                    <div className="card-body">
                      <h5 className="card-title">SUNSHINE CAMPING</h5>
                      <p className="card-text">
                        Starting From
                        <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                      </p>
                      <a href="#" className="btn btn-primary" onClick={handleOpen}>Book Now</a>
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
                      src={img4}
                      className="card-img-top"
                      alt="Fissure in Sandstone"
                    />
                    <div className="card-body">
                      <h5 className="card-title">SUNSHINE CAMPING</h5>
                      <p className="card-text">
                        Starting From
                        <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                      </p>
                      <a href="#" className="btn btn-primary" onClick={handleOpen}>Book Now</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={img5}
                      className="card-img-top"
                      alt="Storm Clouds"
                    />
                    <div className="card-body">
                      <h5 className="card-title">SUNSHINE CAMPING</h5>
                      <p className="card-text">
                        Starting From
                        <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                      </p>
                      <a href="#!" className="btn btn-primary" onClick={handleOpen}>Book Now</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={img6}
                      className="card-img-top"
                      alt="Hot Air Balloons"
                    />
                    <div className="card-body">
                      <h5 className="card-title">SUNSHINE CAMPING</h5>
                      <p className="card-text">
                        Starting From
                        <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                      </p>
                      <a href="#!" className="btn btn-primary" onClick={handleOpen} >Book Now</a>
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
                      src={img7}
                      className="card-img-top"
                      alt="Peaks Against the Starry Sky"
                    />
                    <div className="card-body">
                      <h5 className="card-title">SUNSHINE CAMPING</h5>
                      <p className="card-text">
                        Starting From
                        <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                      </p>
                      <a href="#!" className="btn btn-primary" onClick={handleOpen}>Book Now</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={img8}
                      className="card-img-top"
                      alt="Bridge Over Water"
                    />
                    <div className="card-body">
                      <h5 className="card-title">SUNSHINE CAMPING</h5>
                      <p className="card-text">
                        Starting From
                        <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                      </p>
                      <a href="#!" className="btn btn-primary" onClick={handleOpen}>Book Now</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={img9}
                      className="card-img-top"
                      alt="Purbeck Heritage Coast"
                    />
                    <div className="card-body">
                      <h5 className="card-title">SUNSHINE CAMPING</h5>
                      <p className="card-text">
                        Starting From
                        <strike> ₹ 1&sbquo;500</strike> 1&sbquo;200
                      </p>
                      <a href="#!" className="btn btn-primary" onClick={handleOpen}>Book Now</a>
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





      <div className="table" style={{ paddingLeft: "4vh", paddingRight: "4vh", marginBottom: "5vh" }}>


        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col" style={{ textAlign: "center" }}>REGULAR CAMP</th>
              <th scope="col" style={{ textAlign: "center" }}>DELUX CAMP</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>₹1199 per person</td>
              <td>₹1499 per person</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>4PM to next day 11AM</td>
              <td>4PM to next day 11AM</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Tea&sbquo; coffee&sbquo; poha in breakfast</td>
              <td>Tea&sbquo; coffee&sbquo; poha&sbquo; bread&sbquo; jam&sbquo; anda bhurji in breakfast</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>No live guitar show</td>
              <td>Live guitar on every Saturday</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>2/3 person sharing tents</td>
              <td>2/3/4 person sharing tents</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>200g BBQ per person
                (Veg/Nveg)</td>
              <td>250g BBQ per person
                (Veg/Nveg)</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Unlimited dinner</td>
              <td>Unlimited dinner</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Common campfire</td>
              <td>Common campfire</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Trolley speaker</td>
              <td>Trolley speaker</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Free parking</td>
              <td>Free parking</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
              <td>Games: Archery&sbquo; Dart game&sbquo; Cricket&sbquo; Football&sbquo; Badminton&sbquo; Carrom&sbquo; Volleyball and more</td>
              <td>Games: Archery&sbquo; Dart game&sbquo; Cricket&sbquo; Football&sbquo; Badminton&sbquo; Carrom&sbquo; Volleyball and more</td>
            </tr>
          </tbody>
        </table>


      </div>



      {/* location  */}
      <div className="location mx-3">

        <h3>Location📍</h3>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.664467904474!2d73.4739261!3d18.6341556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2a70aab85d97f%3A0xbf25868ee7b22729!2sPawana%20sunshine%20camping!5e0!3m2!1sen!2sin!4v1691217226765!5m2!1sen!2sin" style={{ border: "0", width: "100%" }}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>



      </div>

      {/* footer of whatsapp */}
      <div className='whatsapp' style={{ textAlign: "end" }}>

        <a href="https://wa.me/+918009451818">
          <img alt="Chat on WhatsApp" src={WhatsappLOGO} style={{ width: "20vh", height: "20vh", position: "sticky" }} />
        </a>
      </div>








      {/* footer  */}

      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className="container my-5">
        {/* <!-- Footer --> */}
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#929fba" }}
        >
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0">
            {/* <!-- Section: Links --> */}
            <section className="">
              {/* <!--Grid row--> */}
              <div className="row">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Sunshine Camping
                  </h6>
                  <p>
                  &Prime;Welcome to Sunshine Camping 🌞🏕️ Your gateway to unforgettable riverside adventures&#33; 🌊 Embrace nature&prime;s embrace with our pristine camping spots&sbquo; surrounded by the soothing sounds of the river. ⛺ Discover the joy of outdoor living and create cherished memories with loved ones. 🌳🌄 Follow us for expert tips&sbquo; scenic views&sbquo; and exclusive offers. Let&prime;s embark on an enchanting journey together&#33;
                  </p>
                </div>
                {/* <!-- Grid column --> */}


         

                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><FmdGoodIcon/> Pawna Dam	&sbquo; Near Hilton	&sbquo; Kadav Maval	&sbquo; Pune 410 406</p>
                  <p><EmailIcon/>SunshineCamping@gmail.com</p>
                  <p><LocalPhoneIcon/> +91 8009451818</p>
                  <p><LocalPhoneIcon/> +91 8009451818</p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3" >
                  <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                  <div className="icons" style={{ display: "flex", flexDirection: "row",justifyContent:"center" }}>


                    {/* <!-- Facebook --> */}
                    <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#3b5998", borderRadius: "100%", width: "5vh", height: "5vh", display: "flex", position: "relative", justifyContent: "center", cursor: "pointer"}}
                      href="#!"
                      role="button"
                    ><FacebookIcon style={{
                      transform: "translateY(-50%)",
                      position: "absolute",
                      top: "50%",
                    }} /></a>


                    {/* <!-- Instagram --> */}
                    <a
                      className="btn btn-primary btn-floating m-1"
                      href="https://www.instagram.com/sunshine_camping_/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target='_blank'
                      style={{ backgroundColor: "#ac2bac",cursor:"pointer", borderRadius: "100%", width: "5vh", height: "5vh", display: "flex", position: "relative", justifyContent: "center", cursor: "pointer" }}

                 
                      role="button"
                    ><InstagramIcon style={{
                      transform: "translateY(-50%)",
                      position: "absolute",
                      top: "50%",
                    }} /></a>


                    {/* <!-- whatsapp --> */}
                    <a
                      className="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#333333", borderRadius: "100%", width: "5vh", height: "5vh", display: "flex", position: "relative", justifyContent: "center", cursor: "pointer" }}

                      href="https://wa.me/+918009451818" target='_blank'
                      role="button"
                    ><WhatsAppIcon style={{
                      transform: "translateY(-50%)",
                      position: "absolute",
                      top: "50%",
                    }} /></a>
                  </div>
                </div>
              </div>
              {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}

          >
            	&copy;Copyright&#8282;
            <a className="text-white" href="#"
            >SunshineCamping.com</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
      {/* <!-- End of .container --> */}


    </>
  )
}

export default HomePage
