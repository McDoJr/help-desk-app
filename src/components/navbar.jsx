import styles from "./navbar.module.css";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Navbar = ({handleLogout}) => {

    const navigate = useNavigate();

    const [showSettings, setShowSettings] = useState(false);

    const handleLogoutClick = () => {
        handleLogout();
        navigate("/");
    }

    return (
        <>
            <div className={styles.k}>
                <img src={require("../assets/notification.png")}/>
                <img src={require("../assets/profile_pic.png")} onClick={() => setShowSettings(!showSettings)}/>
                <ul style={{display: showSettings ? 'block' : 'none'}} onClick={() => setShowSettings(!showSettings)}>
                    <li onClick={() => navigate("/profile")}>Profile</li>
                    <li onClick={handleLogoutClick}>Log Out</li>
                </ul>
            </div>
            <nav className={styles.container}>
                <h1 onClick={() => navigate("/")}>T.</h1>
                <img src={require("../assets/home_btn.png")} onClick={() => navigate("/main")}/>
                <img src={require("../assets/list_btn1.png")} onClick={() => navigate("/ticket/list")}/>
                <img src={require("../assets/profile_btn1.png")} onClick={() => navigate("/profile")}/>
                <img src={require("../assets/ticket_btn1.png")} onClick={() => navigate("/ticket")}/>
                <img src={require("../assets/logout_btn.png")} onClick={handleLogoutClick}/>
            </nav>
        </>
    )
}

export default Navbar;