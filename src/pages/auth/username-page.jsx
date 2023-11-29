import styles from "./username-page.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const UsernamePage = ({formData, setFormData}) => {

    const ref = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username} = formData;
        ref.current.focus();
        if(!username) {
            return;
        }
        navigate("/signup/photo")
    }

    return (
        <section className={styles.container}>
            <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate("/signup")} className={styles.arrow}/>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div><i></i><i></i></div>
                <h1>Create Username</h1>
                <span>Username will be used as your log in info</span>
                <div>
                    <img src={require("../../assets/profile.png")}/>
                    <input type="text" ref={ref} name="username" placeholder="username" onChange={handleChange} autoFocus={true} autoComplete="off"/>
                </div>
                <button type="submit">Next</button>
            </form>
        </section>
    )
}

export default UsernamePage;