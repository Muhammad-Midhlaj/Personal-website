import React from "react";
//import { useState } from "react";
//import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";
//import InstagramEmbed from 'react-instagram-embed';
//import DiscordInvite from "react-discord-invite";

//const Contact = () => {
  //const [viewport, setViewport] = useState({
    //latitude: 11.662555,
    //longitude: 76.310712,
    //zoom: 8,
  //});


  function Contact() {
    

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a13i2wk",
        "template_u9soazb",
        e.target,
        "user_bhjA0AIxf41KnxQFSvHcC"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Join My Discord Server</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

       {/*  <div className="map_wrap">
          <div className="map">
            
           <ReactMapGL
              mapStyle={"mapbox://style/mapbox/dark-v9"}
              mapboxApiAccessToken="pk.eyJ1IjoicHJvY29kZXI0IiwiYSI6ImNrdGFuMWVtMzFoNWIyeHBoZ3BnbXJ6eWoifQ.BIgSZcNcXYx26mn9sAY1Cw"
              {...viewport}
              onViewportChange={nextViewport => setViewport(nextViewport)}
            />
          </div>
        </div>
        {/* MENU WRAP */}
        
          
        <iframe title="Join my discord Server"src="https://discord.com/widget?id=695742873588465734&theme=dark" width="800" height="250" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        

        <div className="fields">
          <form className="contact_form" onSubmit={sendEmail}>
            <div className="first">
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input type="email" name="user_email" placeholder="Email" />
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea name="message" placeholder="Message"></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
