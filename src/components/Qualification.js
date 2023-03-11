import 'animate.css';
import { RiBriefcase3Line } from 'react-icons/ri';
import { FaUniversity } from 'react-icons/fa';

export const Qualification = () => {

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

  return (
    <section class="qualification" id="qualification">
    <h2 class="section__title">Jornada</h2>
    <span class="section__subtitle">Minha jornada</span>

    <div class="qualification__container container">
      <div class="qualification__tabs">
        <div class="qualification__button button--flex qualification__active" data-target="#work"
        >
          <i class="uil uil-briefcase-alt qualification__icon"><RiBriefcase3Line /> </i> Profissional
        </div>

        <div  class="qualification__button button--flex" data-target="#education">
          <i class="uil uil-graduation-cap qualification__icon"><FaUniversity /> </i>
          Acadêmica
        </div>
      </div>

      <div class="qualification__sections">
        <div
          class="qualification__content qualification__active" data-content id="work">
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Estagiário Jurídico</h3>
              <span class="qualification__subtitle">Tribunal de Justiça do Estado do Paraná</span>
              <div class="qualification__calender">
                <i class="uil uil-calendar-alt"></i> 2018-2020
              </div>
            </div>

            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>
          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div>
              <h3 class="qualification__title">Estagiário em Business Intelligence</h3>
              <span class="qualification__subtitle">GO4! Solutions/Lawvision</span>
              <div class="qualification__calender">
                <i class="uil uil-calendar-alt"></i> 2021-2021
              </div>
            </div>
          </div>

          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Estagiário Jurídico/Desenvolvedor</h3>
              <span class="qualification__subtitle">Poletto & Possamai Sociedade de Advogados</span>
              <div class="qualification__calender">
                <i class="uil uil-calendar-alt"></i> 2021-2022
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span> 
            </div>
            <div>
              <h3 class="qualification__title">Software Developer</h3>
              <span class="qualification__subtitle">Scissero</span>
              <div class="qualification__calender">
                <i class="uil uil-calendar-alt"></i>2022-atual
              </div>
            </div>
          </div>
        </div>

        <div class="qualification__content" data-content id="education">

          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Direito</h3>
              <span class="qualification__subtitle">
                Universidade Federal do Paraná
              </span>
              <div class="qualification__calender">
                <i class="uil uil-calendar-alt"></i> 2018-2023
              </div>
            </div>

            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>
      
          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div>
              <h3 class="qualification__title">Análise e Desenvolvimento de Sistemas</h3>
              <span class="qualification__subtitle">Universidade Positivo</span>
              <div class="qualification__calender">
                <i class="uil uil-calendar-alt"></i> 2020-2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
