import styles from "./portal-page.module.css";
import {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const PortalPage = () => {

    const ref = useRef(null);
    const navigate = useNavigate();
    const [portal, setPortal] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(portal === "urios"){
            setShowError(false);
        }else{
            ref.current.focus();
            setShowError(true);
        }
        setPortal('');
        navigate("/login")
    }

    return (
        <section className={styles.container}>
            <h1 onClick={() => navigate("/")}>T.</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>PORTAL</h2>
                <input ref={ref} type="text" value={portal}
                       placeholder="enter your organization portal" onChange={(e) => setPortal(e.target.value)} autoFocus={true}/>
                <button type="submit">Login now</button>
                <div style={{display: showError ? 'flex' : 'none'}}>
                    <FontAwesomeIcon icon={faTriangleExclamation} className={styles.icon}/>
                    <span>Portal does not exist</span>
                    <span onClick={() => setShowError(false)}>&times;</span>
                </div>
            </form>
        </section>
    )
}

export default PortalPage;