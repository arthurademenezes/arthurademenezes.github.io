import 'react-multi-carousel/lib/styles.css';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { FaUniversity } from 'react-icons/fa';

export const Skills = () => {

  return (
  <section className='skills section' id='skills'>
    <h2 class="section__title">Habilidades</h2>
    <span class="section__subtitle">Minhas hablidades merdas</span>
    <div class="page-wrapper">  
    <div class="card-wrapper">
      <div class="card-details">
        <h3 class="card-title">Advocacia</h3>
        <p></p>
        {/* <FaUniversity /> */}
      </div>
      
      <div class="reveal-details">
        <p>advocacia mo paia, EITA</p>
      </div>
    </div>
    

    <div class="card-wrapper">
      <div class="card-details">
        <h3 class="card-title">Desenvolvimento</h3>
        <p></p>
      </div>
      
      <div class="reveal-details">
        <p>pena q só faz site paia EITA</p>
      </div>
    </div>
    </div>
    <div class="page-wrapper">
    <div class="card-wrapper">
      <div class="card-details">
        <h3 class="card-title">Experiência internacional</h3>
        <p></p>
      </div>
      
      <div class="reveal-details">
        <p>o cabra fez uns negócio aí</p>
      </div>
    </div>

    <div class="card-wrapper">
      <div class="card-details">
        <h3 class="card-title">Escritor</h3>
        <p></p>
      </div>
      
      <div class="reveal-details">
        <p>fiz uma poesia paia e uns artigos aí</p>
      </div>
    </div>
    
    </div>
  </section>
  )
}
