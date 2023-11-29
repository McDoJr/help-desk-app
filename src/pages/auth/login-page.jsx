import styles from "./login-page.module.css";
import {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import {faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons";

const LoginPage = ({checkProfile}) => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({username: "", password: ""});
    const [showError, setShowError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkProfile(formData)){
            setShowError(false);
            navigate("/main");
        }else{
            ref.current.focus();
            setShowError(true);
        }
        setFormData({username: "", password: ""});
    }

    return (
        <section className={styles.container}>
            <h1 onClick={() => navigate("/")}>T.</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Login to your account</h2>
                <div className={styles.field}>
                    <label>Username</label>
                    <input ref={ref} type="text" value={formData.username} name="username" placeholder="Enter your username" autoComplete="off" autoFocus={true} onChange={handleChange}/>
                </div>
                <div className={styles.field}>
                    <label>Password</label>
                    <input type={showPassword ? 'text' : 'password'} value={formData.password} name="password" placeholder="Enter your password" onChange={handleChange}/>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={() => setShowPassword(!showPassword)} className={styles.icon}/>
                </div>
                <button type="submit">Login now</button>
                <span>Don't Have An Account? <Link to="/signup">Sign Up</Link></span>
                <div className={styles.error} style={{display: showError ? 'flex' : 'none'}}>
                    <FontAwesomeIcon icon={faTriangleExclamation} className={styles.warning}/>
                    <span>Invalid username/password</span>
                    <span onClick={() => setShowError(false)}>&times;</span>
                </div>
            </form>
        </section>
    )
}

export default LoginPage;