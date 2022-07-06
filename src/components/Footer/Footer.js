import './Footer.scss';
import charlieIcon from '../../assets/icons/charlie-icon.png';
import githubIcon from '../../assets/icons/github-icon.png';
import linkedinIcon from '../../assets/icons/linkedin-icon.png';
import mailIcon from '../../assets/icons/mail-icon.png';

function Footer() {
    return (
        <footer className='footer'>
            <section className="contact">
                <h2 className="contact__title">Let's get in touch!</h2>
                <article className="contact__contacts-container">
                    <a className="contact__link" href="mailto:charlie@carlosocampo.ca">
                        <img className="contact__icon"
                            src={mailIcon} alt="email envelope" />
                    </a>
                    <a className="contact__link" href="https://www.linkedin.com/in/carlosocampo/" target='_blank'>
                        <img className="contact__icon"
                            src={linkedinIcon} alt="linkedin icon" />
                    </a>
                    <a className="contact__link" href="https://github.com/estebanchos" target='_blank'>
                        <img className="contact__icon"
                            src={githubIcon} alt="github icon" />
                    </a>
                </article>
            </section>
            {/* <section className="author">
                <img className="author__icon" src={charlieIcon} alt="emoticon from Charlie" />
                <p className="author__signature">a website made by Charlie</p>
            </section> */}
        </footer>
    );
}

export default Footer;