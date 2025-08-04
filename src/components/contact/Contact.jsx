import "./Contact.css";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Whether you have a project idea, job opportunity, or just want to say hi — let's talk.
      </p>

      {/* Contact Form */}
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message Sent! (Integration pending)");
        }}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit" className="btn-primary">Send Message</button>
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
      </div>
    </div>
  );
}
