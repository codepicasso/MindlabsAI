import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  return (
    <>
      {/* ================ Breadcrumb Start ================*/}
      <div
        className='breadcrumb-area bg-cover'
        style={{ backgroundImage: 'url(./assets/img/banner-5/5.png)' }}
      >
        <div className='container'>
          <div className='breadcrumb-inner'>
            <div className='row justify-content-center'>
              <div className='col-lg-6'>
                <h2 className='page-title text-white'>{title}</h2>
              </div>
              <div className='col-lg-6 text-lg-end'>
                <ul className='page-list'>
                  <li>
                    <Link className=" text-white" to='/'>Home</Link>
                  </li>
                  {"  "}/ <li className=" text-white">{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ Breadcrumb End ================*/}
    </>
  );
};

export default Breadcrumb;
