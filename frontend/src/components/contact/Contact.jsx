import React from "react"
import img from "../images/about.jpeg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back name="" title="Contact Us" cover={img} />
        <div className="container">
          <form
            className="shadow"
            action="https://getform.io/f/1289bddb-688c-4383-9acd-b2ecdeee323a"
            method="POST"
          >
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" name="name"/>
              <input type="text" placeholder="Email" name="email"/>
            </div>
            <input type="text" placeholder="Subject" name="subject"/>
            <textarea cols="30" rows="10" name="message"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact
