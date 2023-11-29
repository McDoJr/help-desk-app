import styles from "./about-page.module.css";
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <section className={styles.container}>
            <img src={require("../../assets/about_bg.png")} alt="background.png"/>
            <nav>
                <Link to="/home">Home</Link>
                <a>About</a>
                <a>Contact</a>
            </nav>
            <div>
                <h1>Learn More</h1>
                <p>The IT Help desk is a centralized tool for managing
                    <br/>incoming customer IT related issues. The Help desk let you
                    <br/>organize and record ongoing customer issues and provide
                    <br/>a reference point for your customer-facing teams. Help
                    <br/>desks also let you track efficiency metrics to manage the
                    <br/>performance of your customer-facing team—things like
                    <br/>response time, ticket volume, first resolution time, and how
                    <br/>many tickets are in which stage of resolution. </p>
                <h1>Contact us</h1>
                <p>If you have any more questions contact us at 09123456789
                    <br/> email us at helpdesk@gmail.com </p>
            </div>
        </section>
    )
}

export default AboutPage;