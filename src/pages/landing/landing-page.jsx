import styles from "./landing-page.module.css";
import {Link, useNavigate} from "react-router-dom";
import {loggedIn} from "../../utils/utils.js";

const LandingPage = ({profile}) => {

    const navigate = useNavigate();

    return (
        <section className={styles.container}>
            <img src={require("../../assets/home_bg.png")} alt="background.png"/>
            <nav>
                <a>Home</a>
                <Link to="/about">About</Link>
                <Link to="/about">Contact</Link>
            </nav>
            <div>
                <h1>IT HELP DESK:<br/>Ticketing</h1>
                <p>IT Help desk is an easy and friendly ticketing system for IT<br/> teams in an organizations used for organized distribution of<br/> work between members.</p>
            </div>
            <div>
                <button className="btn-dark" onClick={() => navigate(loggedIn(profile) ? "/main" : "/portal")}>Portal</button>
                <button className="btn-light" onClick={() => navigate("/about")}>Learn More</button>
            </div>
        </section>
    )
}

export default LandingPage;