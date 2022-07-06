import './ContactPage.scss';
import 'antd/dist/antd.min.css';

function ContactPage() {

    return (
        <>
            <main className='contactus'>
                <h1 className='contactus__title'>Contact Us</h1>
                <span className='contactus__intro'>If you're interested in building your financial health, we recommend checking out our Learning page.</span>
                <div className='contactus__actions-container'>
                    <article className='contactus__action'>
                        <p className='contactus__email-text'>If you have any recommendation or thoughts that would help us improve, let us know by sending us an email.</p>
                        <a className="contactus__link" href="mailto:charlie@carlosocampo.ca">Send us an email</a>
                    </article>
                </div>
            </main>
        </>
    );
}

export default ContactPage;