import { AiOutlineArrowUp } from 'react-icons/ai';

export const Scrollup = () => {
    function scrollTop(){
        const scrollTop = document.getElementById('back-to-top');
        if (this.scrollY >= 560) {scrollTop.classList.add('show-scroll');}
        else {scrollTop.classList.remove('show-scroll')}
    }
    window.addEventListener('scroll', scrollTop);

    return (
    <a href="#" class="scrollup" id="back-to-top">< AiOutlineArrowUp />
        <i class="uil uil-arrow-up"></i>
    </a>
    )
}