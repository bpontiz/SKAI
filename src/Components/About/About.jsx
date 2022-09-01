import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();
const About = () => {
    return (
        <section className="sectionAboutStyle" data-aos="fade-in" data-aos-duration="1300" data-aos-delay="2500" data-aos-easing="ease-in-out">
            <div className="divAboutStyle">
                <h2 className="mainTextStyle">
                    We <strong className="importantWordStyle">solve</strong> challenges.
                </h2>
                <p className="subTextStyle">Experts on developing artificial intelligence services.</p>
            </div>
        </section>
    )
};

export default About;