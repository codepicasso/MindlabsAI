import React from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterFour = () => {
  return (
    <>
      {/* ================== Footer Four Start ==================*/}
      <footer
        className='footer-area bg-cover mt-0 pd-top-120'
        style={{ backgroundImage: 'url("assets/img/bg/14.png")' }}
      >

        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget-recent-post'>
                <h4 className='widget-title'>Contact us</h4>
                <div className='widget widget_contact'>
                  <ul className='details text-white'>
                    <li>
                      <FaMapMarkerAlt className='sky' />
                      PO Box 475,West Perth, WA 6872
                    </li>

                    <li className='mt-2'>
                      <FaEnvelope className='sky' />  start@mindlabsco.ai

                    </li>
                  </ul>
                  <ul className='social-media mt-4'>
                    <li>
                      <a href='#' className='sky'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='sky'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='sky'>
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href='#' className='sky'>
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'></div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <Link to='/about'>
                  <h4 className='widget-title'>About Us</h4>
                </Link>
                <Link to='/terms-condition'>
                  <h4 className='widget-title'>Terms & Condition</h4>
                </Link>
                <Link to='/privacy-policy'>
                  <h4 className='widget-title'>Privacy Policy</h4>
                </Link>
                <Link to='/contact'>
                  <h4 className='widget-title'>Contact Us</h4>
                </Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 ps-xl-5'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Our Service</h4>
                <ul>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight />  Machine Learning

                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight />  Large Language Model

                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight />  AI Assistant

                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight />  Facial Recognition

                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight />  Emotion Tracking

                    </Link>
                  </li>
                  <li className='sky'>
                    <Link to='/service'>
                      <FaChevronRight />  Web & Mobile Development

                    </Link>
                  </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>© MindLabs AI PTY LTD 2024 | All Rights Reserved</p>
              </div>
              <div className='col-md-6 text-lg-end'>
                <Link to='/terms-condition'>
                  Terms & Condition</Link>
                <Link to='/privacy-policy'>
                  Privacy Policy</Link>
                <Link to='/contact'>
                  Contact Us</Link>

              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterFour;
