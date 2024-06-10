import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className="about-thumb-inner me-xl-5 border-radius-20 overflow-hidden aos-init aos-animate" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500" style={{ height: "500px" }}>
                <img className="main-img" src="assets/img/about/1.webp" alt="img" /></div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>ABOUT US</h6>
                <h2 className='title'>
                  A Critical Component Of <span>Modern</span> Businesses
                </h2>
                <p className='content mb-4 mb-xl-5'>
                  We are a team of dedicated AI experts committed to redefining the possibilities of artificial intelligence. Our mission is to develop groundbreaking AI solutions that empower both businesses and individuals to reach their utmost potential. Through advanced research and unwavering dedication to innovation, we are transforming the way the world engages with technology.                </p>
                <div className="row mt-4"><div className="col-md-4"><div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                  <div className="thumb mb-3"><img className="rotate-img" src="assets/img/about/25.png" alt="img" /></div>
                  <div className="details"><h6 className="mb-0">Machine Learning</h6></div></div></div><div className="col-md-4">
                    <div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                      <div className="thumb mb-3">
                        <img className="rotate-img" src="assets/img/about/26.png" alt="img" />
                      </div>
                      <div className="details" >
                        <h6 className="mb-0">LLMs</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4"><div className="image-hover-rotate border-1 p-4 border-radius-5 text-center">
                    <div className="thumb mb-3">
                      <img className="rotate-img" src="assets/img/about/27.png" alt="img" />
                    </div>
                    <div className="details">
                      <h6 className="mb-0">Facial AI</h6>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="single-service-inner text-center" style={{ minHeight: "400px" }}>
                <h3 className="title">Our Vision</h3>
                <p className="content my-4 mb-xl-4 mt-xl-4">
                  Our vision is to redefine the future of artificial intelligence and machine learning. By combining cutting-edge research, world-class talent, and a deep commitment to innovation, we aim to develop transformative AI solutions that push the boundaries of what's possible. Our goal is to be the driving force behind the next generation of intelligent technologies, empowering businesses and individuals to thrive in an increasingly complex digital landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-service-inner text-center" style={{ minHeight: 400 }}>
                <h3 className="title">Our Mision</h3>
                <p className="content my-4 mb-xl-4 mt-xl-4">
                  Our mission is to harness the power of artificial intelligence to create groundbreaking solutions that empower businesses and individuals to achieve their full potential. We are dedicated to pushing the boundaries of AI research and development, combining cutting-edge technology with a deep understanding of real-world challenges. By fostering a culture of creativity, collaboration, and continuous learning, we strive to be the leaders in the field of intelligent technology, driving innovation and transformation across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
