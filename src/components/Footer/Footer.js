import './Footer.scss';
import charlieIcon from '../../assets/icons/charlie-icon.png';
import githubIcon from '../../assets/icons/github-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';
import mailIcon from '../../assets/icons/mail-icon.png';

function Footer() {
    return (
        <footer className='footer'>
            <section class="contact">
                <h2 class="contact__title">Let's get in touch!</h2>
                <article class="contact__contacts-container">
                    <a class="contact__link" href="mailto:charlie@carlosocampo.ca"><img class="contact__icon"
                        src={mailIcon} alt="email envelope" /></a>
                    <a class="contact__link" href="https://www.linkedin.com/in/carlosocampo/"><img class="contact__icon"
                        src={linkedinIcon} alt="linkedin icon" /></a>
                    <a class="contact__link" href="https://github.com/estebanchos"><img class="contact__icon"
                        src={githubIcon} alt="github icon" /></a>
                </article>
            </section>
            <section class="author">
                <img class="author__icon" src={charlieIcon} alt="emoticon from Charlie" />
                    <p class="author__signature">a website made by Charlie</p>
            </section>
        </footer>
    );
}

export default Footer;