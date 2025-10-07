import { Mail, Phone } from "lucide-react"; // import lucide icons
import { Form } from "../Form/Form";
import { Container } from "./styles";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project?</p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div className="contact-item">
          <a href="mailto:helloashishthapa@gmail.com">
            <Mail size={24} /> {/* Lucide icon */}
          </a>
          <a href="mailto:helloashishthapa@gmail.com">helloashishthapa@gmail.com</a>
        </div>
        <div className="contact-item">
          <a href="tel:+9779840033688">
            <Phone size={24} /> {/* Lucide icon */}
          </a>
          <a href="tel:+9779840033688">(+977) 9840033688</a>
        </div>
      </div>
      <Form />
    </Container>
  );
}
