import React, { useRef, useState } from 'react';
import { toast, Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

export const isValidEmail = (email) => {
  // Regular expression for validating an email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex
  return emailRegex.test(email);
}

const GetQuoteMain = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [services, setServices] = useState(["", "", "", "", "", "", ""]);
  const validateForm = () => {
    const newErrors = {};
    const formElements = form.current.elements;
    for (let element of formElements) {
      if ((!element.value.trim() && (element.type === "text" || element.type === "email" || element.type === "textarea" || element.type === "number"))) {
        newErrors[element.name] = 'This field is required';
      }
      if (element.type === "email" && (!element.value.trim() || !isValidEmail(element.value))) {
        newErrors[element.name] = 'Please enter a valid email address.';
      }
      if ((element.type === "checkbox" || element.type === "radio") && !element.checked) {
        newErrors[element.name] = 'At least one field is required';
      }
    }

    for (let element of formElements) {
      if ((element.type === "checkbox" || element.type === "radio") && element.checked) {
        delete newErrors[element.name];
      }
    }
    return newErrors;
  };

  const clearFormFields = () => {
    const formElements = form.current.elements;
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.type === 'text' || element.type === 'email' || element.type === 'textarea' ||  element.type === 'number') {
        element.value = '';
      }
      if (element.type === 'checkbox' || element.type === 'radio') {
        element.checked = false;
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          "service_2wu9j6m", //YOUR_SERVICE_ID
          "template_paww3up", //YOUR_TEMPLATE_ID
          form.current,
          "UNkapOVzCWzUOIw3J" //YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              toast.success("Massage Sent Successfully!")

              setServices(["", "", "", "", "", "", ""])
              clearFormFields()
              setErrors({})
            }
          },
          (error) => {
            if (error.text !== "OK") {
              toast.error("Massage Not Sent!");
            }
          }
        );
    }
    else {
      setErrors(validationErrors);
      const firstInvalidField = Object.keys(validationErrors)[0];
      document.getElementById(firstInvalidField).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-area pd-top-60 pd-bottom-120">
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className="container">
        <div className="contact-page-inner border bg-gray">
          <div className="section-title mb-4 pb-2">
            <h3 className="title">Get a Quote from AI Experts</h3>
            <p className="content mb-0">
              Please fill out the following form to describe your ideas and requirements. We are here to help you!
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <h5 className="title">Contact Information</h5>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="user_name" name="user_name" type="text" placeholder="Full Name" />
                  {errors.user_name && <div className="error-message">{errors.user_name}</div>}
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="user_email" name="user_email" type="email" placeholder="Email" />
                  {errors.user_email && <div className="error-message">{errors.user_email}</div>}
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="phonenumber" name="phonenumber" type="text" placeholder="Phone Number" />
                  {errors.phonenumber && <div className="error-message">{errors.phonenumber}</div>}
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="companyname" name="companyname" type="text" placeholder="Company Name" />
                  {errors.companyname && <div className="error-message">{errors.companyname}</div>}
                </div>
              </div>
              <h5 className="title mt-3">Project Overview</h5>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="project_title" name="project_title" type="text" placeholder="Project Title" />
                  {errors.project_title && <div className="error-message">{errors.project_title}</div>}
                </div>
              </div>
              <div className="col-12">
                <div className="single-input-inner">
                  <textarea type="text" name="project_des" id="project_des" cols="1" rows="5" plaeceholder="Brief Description" />
                  {errors.project_des && <div className="error-message">{errors.project_des}</div>}
                </div>
              </div>
              <h5 className="title mt-3" id="service">Specific AI Services Required (Check all that apply)</h5>
              {[' Facial Recognition', ' Speech Recognition', ' Natural Language Processing', ' Predictive Analytics', ' ML Model Development', ' Data Analysis and Visualization', ' Custom AI Solutions'].map((service, index) => (
                <div key={index} className="col-xxl-3 col-md-6">
                  <div className="d-flex single-input-inner align-items-center cursor-pointer">
                    <input id={`service${index + 1}`} name={`service`} type="checkbox" value={services[index]} onChange={(e) => {
                      if (e.target.checked) {
                        let _services = { ...services }
                        _services[index] = service
                        setServices(_services)
                      }
                      else {
                        let _services = { ...services }
                        _services[index] = ""
                        setServices(_services)
                      }
                    }} />
                    <label htmlFor={`service${index + 1}`}>
                      <div className="ps-3">{service}</div>
                    </label>
                  </div>
                </div>
              ))}
              {errors[`service`] && <div className="error-message">{errors[`service`]}</div>}

              <h5 className="title mt-3">Target Audience and Users</h5>
              <div className="col-12">
                <h6 className="title">Who will use this AI solution? (e.g., employees, customers, specific department)</h6>
                <div className="single-input-inner mb-3">
                  <input id="target_audience" name="target_audience" type="text" />
                  {errors.target_audience && <div className="error-message">{errors.target_audience}</div>}
                </div>
              </div>
              <h6 className="title">Estimated number of users</h6>
              <div className="col-lg-3 col-md-6">
                <div className="single-input-inner">
                  <input id="num_users" name="num_users" type="number" />
                  {errors.num_users && <div className="error-message">{errors.num_users}</div>}
                </div>
              </div>
              <h5 className="title mt-3">Key Features and Requirements</h5>
              <div className="col-12">
                <h6 className="title">List any specific features or functionalities required</h6>
                <div className="single-input-inner mb-3">
                  <input id="features" name="features" type="text" />
                  {errors.features && <div className="error-message">{errors.features}</div>}
                </div>
              </div>
              <h5 className="title" id="stage">Current Status</h5>
              {['Just an idea', 'In planning stage', 'Prototype development', 'Full-scale development', 'Maintenance and improvement of an existing solution'].map((stage, index) => (
                <div key={index} className="col-12">
                  <div className="d-flex single-input-inner align-items-center cursor-pointer">
                    <input id={`stage${index + 1}`} name="stage" type="radio" value={stage} />
                    <label htmlFor={`stage${index + 1}`}>
                      <div className="ps-3">{stage}</div>
                    </label>
                  </div>
                </div>
              ))}
              {errors["stage"] && <div className="error-message">{errors["stage"]}</div>}

              <h5 className="title mt-3">Timeline and Budget</h5>
              <div className="col-lg-4 col-md-6">
                <h6 className="title">Estimated project start date</h6>
                <div className="single-input-inner">
                  <input id="start_date" name="start_date" type="text" placeholder="2024-6-1" />
                  {errors.start_date && <div className="error-message">{errors.start_date}</div>}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <h6 className="title">Preferred completion date</h6>
                <div className="single-input-inner">
                  <input id="completion_date" name="completion_date" type="text" placeholder="2025-1-1" />
                  {errors.completion_date && <div className="error-message">{errors.completion_date}</div>}
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <h6 className="title">Budget range</h6>
                <div className="single-input-inner d-flex" style={{ gap: 4 }}>
                  <div className='position-relative'>
                    <input id="mindbudget" name="mindbudget" type="number" placeholder="24000" style={{ paddingLeft: 24 }} />
                    <span style={{ position: "absolute", left: 12, top: 9 }}>$</span>
                    {errors.mindbudget && <div className="error-message">{errors.mindbudget}</div>}
                  </div>
                  <span className='mt-2'>-</span>
                  <div className='position-relative'>
                    <input id="maxbudget" name="maxbudget" type="number" placeholder="30,000" style={{ paddingLeft: 24 }} />
                    <span style={{ position: "absolute", left: 12, top: 9 }}>$</span>
                    {errors.maxbudget && <div className="error-message">{errors.maxbudget}</div>}
                  </div>
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
}

export default GetQuoteMain;
