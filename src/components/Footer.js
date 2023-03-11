import { Container, Row, Col } from "react-bootstrap";
import lnIcon from '../assets/img/nav-icon1.svg';
import gitHubIcon from '../assets/img/github-icon.svg';
import { useState } from "react";

export const Footer = () => {
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const [activeLink, setActiveLink] = useState('home');
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <a className="logo_name" href="#home" onClick={() => onUpdateActiveLink('home')}>Arthur</a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/arthurademenezes/" target="_blank" rel="noopener noreferrer"><img src={lnIcon} alt="Linkedin Icon" /></a>
              <a href="https://github.com/arthurademenezes" target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt="Github Icon" /></a>
            </div>
            <p>Desenvolvido por Arthur A. de Menezes e M. Emilia Castello</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
