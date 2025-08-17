import "./Contact.css";
import { Mail, Github, Linkedin, X } from "lucide-react";



const submitFunction = (e) => {
   e.preventDefault();
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const nameError = document.getElementsByClassName('name-error');
          // const emailError = document.getElementsByClassName('email-error');          
          if(name === ""){
            alert("Name Not entered");
            nameError.textContent = "Joel"

          }

          if(!email) {
            alert("Email Not entered");
          }
}
export default function Contact() {
  return (
    <div>
      <div className="contact-container" id="contact">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Whether you have a project idea, job opportunity, or just want to say hi — let's talk.
      </p>

      {/* Contact Form */}
      <form
        className="contact-form"
        onSubmit={() => submitFunction()}
      >
        <input id="name" type="text" name="name" placeholder="Your Name" />
        <p className="name-error">Please enter your name</p>
        <input id="email" type="email" name="email" placeholder="Your Email" />
        <p className="email-error">Please enter your name</p>
        <textarea name="message" rows="5" placeholder="Your Message" />
       <button type="submit" className="submit-btn" >Send Message</button>
      </form>

      {/* Social Links */}
      <div className="contact-socials">
        <a href="mailto:joelvijay319@gmail.com" aria-label="Mail"><Mail size={24} /></a>
        <a href="https://github.com/a-joel" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/joel-a-r/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={24} />
        </a>
        <a href="https://www.linkedin.com/in/joel-a-r/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <X size={24} />
        </a>
      </div>
    </div>
    </div>
  );
}
