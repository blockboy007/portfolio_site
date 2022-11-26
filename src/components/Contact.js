import React, { useState } from "react";
import "./Contact.css";


function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [body, setBody] = useState();
  const [response, setResponse] = useState(false);

  var jsonData = {
    "name": name,
    "email": email,
    "phone": phone,
    "body": body
  }

  function handleName(e) {
    setName(e.target.value);
  };
  function handleEmail(e) {
    setEmail(e.target.value);
  };
  function handlePhone(e) {
    setPhone(e.target.value);
  };

  function handleBody(e) {
    setBody(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // const contact = { name, email, phone, eventType, body};
    const requestOptions ={
      method: "POST",
      cache: "no-cache",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData)
    };

    fetch("/email", requestOptions)
    .then(response => response.json())
    .then(setResponse(true));
  }


  // function modal(e) {
  //   (e.trigger) ? (
  //   <div className='popup'>
  //     <modal open={onOpenModal} onClose={onCloseModal}>
  //       <h1>Your information has been submitted successfully</h1>
  //     </modal>
  //   </div>
  //   ) : "";
  // }
  const submittedButton = (
    <button type='submit' onClick={handleSubmit} className="contact-btn">Sent Successfully</button>
  )
  const unSubmittedButton = (
    <button type='submit' onClick={handleSubmit} className="contact-btn">Send Message</button>
  )


  return (
    // <div className='about'>
    //   <div className="container">
    //       <div class="jumbo">
    //         <form>
    //           <input type="text" placeholder="First Name" />
    //           <input type="text" placeholder="Last Name" />
    //           <input type="email" placeholder="Email" />
    //           <input type="text" placeholder="Subject" />
    //           <input type="text" placeholder="Message" />
    //           <input type="submit" />
    //         </form>
    //       </div>
    //   </div>
    // </div>
  <body className="contact">
    <div className="container">
      <div className="title">Contact Us</div>
      <form className="form" action='#'>
        <div className="user-details">
          <input type="text" onChange={handleName} className="input-field" placeholder="Enter your name *" required />
          <input type="email" onChange={handleEmail} className="input-field" placeholder="Enter your email *" required />
          <input type="tel" onChange={handlePhone} className="input-field" placeholder="Enter your phone number" pattern="[0-9]{10}" maxlength="13"/>
          <textarea type="text" onChange={handleBody} className="input-field textarea-field" placeholder="Type message here" />
          {response ? submittedButton : unSubmittedButton}


        </div>
      </form>
    </div>
  </body>
  );
}

export default Contact;
