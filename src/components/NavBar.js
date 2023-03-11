import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import lnIcon from '../assets/img/nav-icon1.svg';
import gitHubIcon from '../assets/img/github-icon.svg';
import usaFlag from '../assets/img/usa-flag.svg';
import brFlag from '../assets/img/brazil-flag.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
// import labels from "../data/menuLabels"

export const NavBar = () => {

  
  // const { language } = props
  // const translations = labels[language]

  // const formatMenuUrl = item => {
  //   if (language === "en") {
  //     return item
  //   }
  //   return `/${language}/${item}`
  // }

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [flag, setFlag] = useState(<usaFlag />);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  
  
  

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          
        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-name' : 'navbar-name'} onClick={() => onUpdateActiveLink('home')}>Arthur</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Página Principal</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
              <Nav.Link href="#qualification" className={activeLink === 'qualification' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('qualification')}>Qualificação</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              {/* <a href="https://drive.google.com/file/d/1q6Lx3ii_zHo1HEAvsk9W2YFnwrJ7QQgN/view?usp=sharing" target="_blank" rel="noopener noreferrer" download=""> */}
                <a href="https://www.linkedin.com/in/arthurademenezes/" target="_blank" rel="noopener noreferrer"><img src={lnIcon} alt="Linkedin Icon" /></a>
                <a href="https://github.com/arthurademenezes" target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt="Github Icon" /></a>
              </div>               
              <HashLink to='#connect'>
                <button className="vvd"><span>Entre em contato</span></button>
              </HashLink>
              <div className="change-language">
                
              {/* <a className="btn btn-primary" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
                { this.state.isCardView
                  ? <span className="" />
                  : <span className="" />
                }
               
              </a> */}
              {/* <a class="button" onClick={() => setFlag(<brFlag />)}>{flag}</a> */}
              {/* <a class="button"> <img scr={brFlag} /></a> */}
              
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
