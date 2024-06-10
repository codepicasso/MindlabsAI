import React from "react";
import { Link } from "react-router-dom";

const CaseStudyAreaTwo = () => {
  return (
    <>
      {/*================== case-study area start ==================*/}
      <div className='case-study-area pd-top-120 pd-bottom-60'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5'>
              <div className='section-title text-center'>
                <h6 className='sub-title-sky-blue'>WORK GALLERY</h6>
                <h2 className='title'>Artificial Intelligence Real Results</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-md-6'>
              <div className='single-case-study-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/service/11.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to=''>Virtual Realty</Link>
                  </h5>

                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='single-case-study-inner style-2'>
                    <div className='thumb' style={{ height: 360 }}>
                      <img src='assets/img/service/12.png' alt='img' width="100%" />
                    </div>
                    <div className='details'>
                      <h5>
                        <Link to=''>AI Assistant</Link>
                      </h5>

                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='single-case-study-inner style-2'>
                    <div className='thumb'>
                      <img src='assets/img/service/13.png' alt='img' />
                    </div>
                    <div className='details'>
                      <h5>
                        <Link to=''>Unreal Engine</Link>
                      </h5>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-case-study-inner style-2'>
                <div className='thumb' style={{ height: 360 }}>
                  <img src='assets/img/service/14.png' alt='img' width="100%" />
                </div>
                <div className='details'>
                  <h5>
                    <Link to=''>Machine Learning</Link>
                  </h5>

                </div>
              </div>
              <div className='single-case-study-inner style-2'>
                <div className='thumb'>
                  <img src='assets/img/service/15.png' alt='img' />
                </div>
                <div className='details'>
                  <h5>
                    <Link to=''>AI Farms</Link>
                  </h5>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== case-study area end ==================*/}
    </>
  );
};

export default CaseStudyAreaTwo;
