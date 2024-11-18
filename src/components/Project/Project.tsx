import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/aasis-io/DailoDeals" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Dailo Deals</h3>
              <p>A modern and user-friendly frontend for an eCommerce web application, designed to provide an engaging shopping experience. With intuitive navigation and responsive design, it ensures customers can easily browse, search, and purchase products, enhancing their overall satisfaction and boosting sales for the business.
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>React JS</li> <li>Tailwind CSS</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/aasis-io/KHS" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Kathmandu Home Solution</h3>
              <p> Developed a web application that connects local residents with trusted service providers, making it easy to find reliable help for daily
                household tasks and simplifying everyday life.
              </p>
            </div>
            <footer> <ul className="tech-list"> <li>PHP</li> <li>MySQL</li> <li>HTML/CSS</li> </ul> </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}