import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_2wu9j6m", //YOUR_SERVICE_ID
        "template_vyp7dbi", //YOUR_TEMPLATE_ID
        form.current,
        "UNkapOVzCWzUOIw3J" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className='contact-area pd-top-60 pd-bottom-120 '>
        <div className='container'>
          <div className='contact-page-inner bg-gray border'>
            <div className='section-title mb-4 pb-2'>
              <h3 className='title'>Direct contact us? </h3>
              <p className='content mb-0'>
                Need expert AI solutions? Reach out to us. With our advanced technology expertise and deep industry knowledge, we're the preferred partner for innovative AI development. Connect with us today for cutting-edge, reliable AI services.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='single-input-inner'>
                    <label>Your Name</label>
                    <input
                      id='name'
                      name='user_name'
                      type='text'
                      placeholder='Eg:  Michael Jarrod'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='single-input-inner'>
                    <label>Email Address</label>
                    <input
                      id='email'
                      name='user_email'
                      type='email'
                      placeholder='Eg:  michael@jarrod.com'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12 pt-3'>
                  <div className='single-input-inner'>
                    <label>Subject</label>
                    <input
                      id='subject'
                      name='subject'
                      type='text'
                      placeholder='Eg:  Discussion of Facial AI solution'
                      required
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <div className='single-input-inner'>
                    <label>Description</label>
                    <textarea
                      name='message'
                      id='message'
                      cols='1'
                      rows='8'
                      placeholder='Eg:  We are writing to express our interests about the cooperation with your AI team. '
                      required
                    />
                  </div>
                </div>
                <div className='col-12 text-end mt-4 '>
                  <button
                    className='btn btn-base border-radius-30'
                    type='submit'
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* contact list */}
      {/* Map  */}
      <div className='contact-g-map'>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=West%20Perth,%20Australia+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
      </div>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
