import { useState } from 'react'
import { HashLink, NavHashLink } from 'react-router-hash-link'
import Resume from '../../assets/Ashish-Thapa.pdf'
import { Container } from './styles'

export function Header() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    const html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      {/* Removed <Router> here */}
      <HashLink smooth to="#home" className="logo">
        <span>{"<Ashish "}</span>
        <span>{" Thapa/>"}</span>
      </HashLink>

      <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label>

      <nav className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>
          About me
        </NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>
          Project
        </NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
        <a href={Resume} download className="button">
          Resume
        </a>
      </nav>

      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => setActive(!isActive)}
      ></div>
    </Container>
  )
}
