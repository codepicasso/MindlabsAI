import React from 'react';

const GetQuoteMain = () => {
  return (
    <div className="contact-area pd-top-60 pd-bottom-120">
      <div className="container">
        <div className="contact-page-inner border bg-gray">
          <div className="section-title mb-4 pb-2">
            <h3 className="title">Get a Quote from AI Experts</h3>
            <p className="content mb-0">
              Please fill out the following form to describe your ideas and requirements. We are here to help you!
            </p>
          </div>
          <form>
            <div className="row">
              <h5 className="title">Contact Information</h5>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="user_name" name="user_name" type="text" placeholder="Full Name" required />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="user_email" name="user_email" type="email" placeholder="Email" required />
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="phonenumber" name="phonenumber" type="text" placeholder="Phone Number" required />
                </div>
              </div>asdf
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="companyname" name="companyname" type="text" placeholder="Company Name" required />
                </div>
              </div>
              <h5 className="title mt-3">Project Overview</h5>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="project_title" name="project_title" type="text" placeholder="Project Title" required />
                </div>
              </div>
              <div className="col-12">
                <div className="single-input-inner">
                  <textarea name="project_des" id="project_des" cols="1" rows="5" placeholder="Brief Description" required></textarea>
                </div>
              </div>
              <h5 className="title mt-3">Specific AI Services Required (Check all that apply)</h5>
              {['Facial Recognition', 'Speech Recognition', 'Natural Language Processing', 'Predictive Analytics', 'ML Model Development', 'Data Analysis and Visualization', 'Custom AI Solutions'].map((service, index) => (
                <div key={index} className="col-xxl-3 col-md-6">
                  <div className="d-flex single-input-inner align-items-center cursor-pointer">
                    <input id={`service${index + 1}`} name={`service${index + 1}`} type="checkbox" required />
                    <label htmlFor={`service${index + 1}`}>
                      <div className="ps-3">{service}</div>
                    </label>
                  </div>
                </div>
              ))}
              <h5 className="title mt-3">Target Audience and Users</h5>
              <div className="col-12">
                <h6 className="title">Who will use this AI solution? (e.g., employees, customers, specific department)</h6>
                <div className="single-input-inner mb-3">
                  <input id="target_audience" name="target_audience" type="text" required />
                </div>
              </div>
              <h6 className="title">Estimated number of users</h6>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="num_users" name="num_users" type="text" required />
                </div>
              </div>
              <h5 className="title mt-3">Key Features and Requirements</h5>
              <div className="col-12">
                <h6 className="title">List any specific features or functionalities required</h6>
                <div className="single-input-inner mb-3">
                  <input id="features" name="features" type="text" required />
                </div>
              </div>
              <h5 className="title">Current Status</h5>
              {['Just an idea', 'In planning stage', 'Prototype development', 'Full-scale development', 'Maintenance and improvement of an existing solution'].map((stage, index) => (
                <div key={index} className="col-12">
                  <div className="d-flex single-input-inner align-items-center cursor-pointer">
                    <input id={`stage${index + 1}`} name="stage" type="radio" required />
                    <label htmlFor={`stage${index + 1}`}>
                      <div className="ps-3">{stage}</div>
                    </label>
                  </div>
                </div>
              ))}
              <h5 className="title mt-3">Timeline and Budget</h5>
              <div className="col-lg-4 col-md-6">
                <h6 className="title">Estimated project start date</h6>
                <div className="single-input-inner">
                  <input id="start_date" name="start_date" type="text" placeholder="2024-6-1" required />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <h6 className="title">Preferred completion date</h6>
                <div className="single-input-inner">
                  <input id="completion_date" name="completion_date" type="text" placeholder="2025-1-1" required />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <h6 className="title">Budget range</h6>
                <div className="single-input-inner">
                  <input id="budget" name="budget" type="text" placeholder="$24,000 - $30,000" required />
                </div>
              </div>
              <div className="col-12 mt-4 text-end">
                <button className="btn btn-base border-radius-10" type="submit">Get Proposal</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetQuoteMain;
