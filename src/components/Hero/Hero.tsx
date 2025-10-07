import ScrollAnimation from "react-animate-on-scroll"
import { NavHashLink } from "react-router-hash-link"
import Hello from '../../assets/Hello.gif'
import githubIcon from '../../assets/github.svg'
import Illustration from "../../assets/illustration.svg"
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import { Container } from "./styles"

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"className="inline-block"/> , I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Ashish Thapa</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <div className="contact-button">
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </div> 
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/ashish-thapa-871614282/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/aasis-io" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=9779840033688&text=Hello+Ashish" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
