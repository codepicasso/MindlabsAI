import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaFive = () => {
  return (
    <>
      {/*=================== service area five start ===================*/}
      <div className='service-area bg-gray bg-relative pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center'>
                <h6 className='sub-title-sky-blue'>Our Best Service</h6>
                <h2 className='title'>
                  Unlocking The Potential Of Data With AI
                </h2>
              </div>
            </div>
          </div>
          <div className='row custom-no-gutter'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/7.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to=''>Machine Learnin</Link>
                  </h5>
                  <p className='mb-0'>
                    Utilize our machine learning expertise to automate complex decision-making and predictive analytics
                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/8.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to=''>Computer Vision</Link>
                  </h5>
                  <p className='mb-0'>
                    Revolutionize your operational capabilities with our computer vision solutions for real-time image processing


                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-left mb-0'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/9.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to=''>Naturual Language Processing</Link>
                  </h5>
                  <p className='mb-0'>
                    Transform how you interact with users utilizing our advanced natural language processing technologies.


                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 bg-blue-right d-lg-inline-block d-none'>
              <div className='service-thumb service-middle-section align-self-end p-0'>
                <div style={{ width: "100%", height: "100%" }}>
                  <img src='assets/img/about/2.webp' alt='img' style={{ height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-inner-3 single-service-inner-3-right'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/10.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to=''>Neural Solutions</Link>
                  </h5>
                  <p className='mb-0'>
                    Solve intricate challenges across various industries with our scalable and efficient neural network solutions


                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/11.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to=''>Web Application with AI</Link>
                  </h5>
                  <p className='mb-0'>
                    Enhance your digital presence with our AI-driven web applications tailored for dynamic user engagement


                  </p>
                </div>
              </div>
              <div className='single-service-inner-3 single-service-inner-3-right mb-0'>
                <div className='thumb'>
                  <div className='thumb-inner'>
                    <img src='assets/img/service-icon/12.svg' alt='img' />
                  </div>
                </div>
                <div className='details'>
                  <h5 className='mb-3'>
                    <Link to=''>Android + iOS</Link>
                  </h5>
                  <p className='mb-0'>
                    Build feature-rich Android and iOS applications integrated with artificial intelligence to improve user experience


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaFive;
