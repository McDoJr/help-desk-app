import styles from "./sign-up-page.module.css";
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-regular-svg-icons";

const SignUpPage = ({formData, setFormData}) => {

    const ref = useRef(null);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = formData;
        ref.current.focus();
        if(!email || !password) {
            return;
        }
        navigate("/signup/username");
    }

    const signUp = (
        <>
            <div className={styles.left}>
                <h1 onClick={() => navigate("/")}>T.</h1>
                <span>Welcome.
                <br/>Start your journey
                <br/>now with our ticketing
                <br/>system!</span>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Create and account</h1>
                <div className={styles.field}>
                    <label>Email</label>
                    <input ref={ref} type="text" name="email" placeholder="Enter your email" autoComplete="off" autoFocus={true} onChange={handleChange}/>
                </div>
                <div className={styles.field}>
                    <label>Password</label>
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter your password" onChange={handleChange}/>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={() => setShowPassword(!showPassword)} className={styles.icon}/>
                </div>
                <button type="submit">Create account</button>
                <button type="button"><img src={require("../../assets/google.png")}/> Continue with Google</button>
            </form>
        </>
    )

    return (
        <section className={styles.container}>
            {signUp}
        </section>
    )
}

export default SignUpPage;