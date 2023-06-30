import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section className="contact" id="appointment">
        <h2 className="h2 section-title text-center">
          Contact Us <span className="has-before"></span>
        </h2>

        <form className="contact-form">
          <div className="input-wrapper">
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Full Name.."
              required
            />
            <input
              type="tel"
              id="phone"
              name="Phone Number"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              id="fname"
              name="Email"
              placeholder="Email"
              required
            />
            <select
              name="Service"
              id="service"
              className="input-field"
              required
            >
              <option value="Spare Parts">Spare Parts</option>
              <option value="Auto Parts">Auto Parts</option>
              <option value="Rtail">Retail</option>
              <option value="Whole Sale">Whole Sale</option>
              <option value="Enquiry">Enquiry</option>
            </select>
          </div>
          <div class="input-wrapper">
            <textarea
              id="message"
              name="Message"
              placeholder="Your Message.."
              style={{ height: "200px" }}
              required
            ></textarea>
          </div>

          <button className="btn btn-secondary contact-button">
            <span className="span">Send Message</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
