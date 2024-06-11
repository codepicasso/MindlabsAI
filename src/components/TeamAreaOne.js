import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamAreaOne = () => {
  return (
    <>
      {/*====================== team area start ======================*/}
      <div className='team-area bg-relative pd-top-90 pd-bottom-90'>
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>MEET OUR EXPERTS</h6>
            <h2 className='title'>
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className='row'>
            <div className='col-xl-2'>
            </div>
            <div className='col-xl-4 col-lg-6'>
              <div className='single-team-inner text-center overflow-hidden'>
                <div className='thumb' style={{ height: 420, borderRadius: 0 }}>
                  <img src='assets/img/team/1.jpg' alt='img' />
                  <ul className='team-social-inner'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                    <Link to=''>Vishal Maharaj </Link>
                  </h5>
                  <p>Founder</p>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6'>
              <div className='single-team-inner text-center overflow-hidden'>
                <div className='thumb' style={{ height: 420, borderRadius: 0 }}>
                  <img src='assets/img/team/2.jpg' alt='img' height="100%" width="auto" style={{ maxWidth: "none", left: "calc(-50px - 5vw)" }} className="position-absolute" />
                  <ul className='team-social-inner'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='details'>
                  <h5>
                    <Link to=''>Shane Wee</Link>
                  </h5>
                  <p>Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== team area end ======================*/}
    </>
  );
};

export default TeamAreaOne;
