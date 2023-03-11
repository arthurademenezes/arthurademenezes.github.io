import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import photo from "../assets/img/foto-tutu.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Advogado", "Desenvolvedor", "Gostoso" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bem vindo!</span>
                <h1>{`Arthur A. de Menezes\t`} <span className="txt-rotate" dataPeriod="1000" data-rotate=''><span className="wrap">{text}</span></span></h1>
                  <p>Minha proposta é unir o direito à tecnologia para fornecer soluções inteligentes para questões jurídicas.</p>
                  <a href="https://drive.google.com/file/d/1q6Lx3ii_zHo1HEAvsk9W2YFnwrJ7QQgN/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="">
                  <button>Acessar Currículo <ArrowRightCircle size={25} /></button> 
                  </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={photo} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <section id="section05" class="demo">
              <a href="#skills"><span></span></a>
      </section>
      </Container>
    </section>
  )
}
