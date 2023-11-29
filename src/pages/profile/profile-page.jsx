import styles from "./profile-page.module.css";
import Navbar from "../../components/navbar.jsx";

const ProfilePage = ({profile, handleLogout}) => {

    const {username, email, password} = profile;

    return (
        <section className={styles.container}>
            <Navbar handleLogout={handleLogout}/>
            <div className={styles.left}>
                <img src={require("../../assets/profile_big.png")}/>
                <h2>{username}</h2>
                <span>{email}</span>
                <p>Description</p>
            </div>
            <div className={styles.right}>
                <div className={styles.row}>
                    <img src={require("../../assets/avatar.png")}/>
                    <div>
                        <h3>Default Username</h3>
                        <span>{username}</span>
                    </div>
                    <button>Apply</button>
                </div>
                <div className={styles.row}>
                    <img src={require("../../assets/avatar.png")}/>
                    <div>
                        <h3>defaultusername</h3>
                        <span>{username}</span>
                    </div>
                    <button>Apply</button>
                </div>
                <div className={styles.row}>
                    <img src={require("../../assets/avatar.png")}/>
                    <div>
                        <h3>Default Email</h3>
                        <span>{email}</span>
                    </div>
                    <button>Apply</button>
                </div>
                <div className={styles.row}>
                    <img src={require("../../assets/avatar.png")}/>
                    <div>
                        <h3>Default Position</h3>
                        <span>position</span>
                    </div>
                    <button>Apply</button>
                </div>
                <form className={styles.form}>
                    <div>
                        <label>Current Password</label>
                        <input type="password" name="current_password"/>
                    </div>
                    <div>
                        <label>New Password</label>
                        <input type="password" name="new_password"/>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" name="confirm_password"/>
                    </div>
                    <button>Apply</button>
                </form>
            </div>
        </section>
    )
}

export default ProfilePage;