import styles from "./photo-page.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const UsernamePage = ({formData, setFormData, createProfile}) => {

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, files} = e.target;
        setFormData({...formData, [name]: files[0]});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createProfile();
        navigate("/login")
    }

    return (
        <section className={styles.container}>
            <FontAwesomeIcon onClick={() => navigate("/signup/username")} icon={faArrowLeft} className={styles.arrow}/>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div><i></i><i></i></div>
                <h1>Change your profile photo</h1>
                <span>Profile photo can be changed at any time</span>
                <div className={styles.button}>
                    <FontAwesomeIcon icon={faPlus} className={styles.icon}/>
                    <input type="file" name="photo" onChange={handleChange}/>
                </div>
                <button type="submit">Next</button>
            </form>
        </section>
    )
}

export default UsernamePage;