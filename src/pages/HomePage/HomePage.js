import Hero from '../../components/Hero/Hero';
import Intro from '../../components/Intro/Intro';
import './HomePage.scss'


function HomePage() {
    return (
        <main>
            <Hero />
            <Intro
                title='Our Purpose'
                copy='Some copy'
            />
        </main>
    );
}

export default HomePage;