import styles from "./ticket.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const Ticket = ({ticket}) => {

    const navigate = useNavigate();

    const {title, assigned, id, solved} = ticket;
    const photo = solved ? require("../assets/solved.png") : require("../assets/active.png");

    return (
        <div className={styles.container}>
            <div className={styles.group}>
                <div className={styles.ticket}></div>
                <h5>{title}<br/><mark>{assigned}</mark></h5>
            </div>
            <div className={styles.group}>
                <FontAwesomeIcon icon={faClock} className={styles.icon}/>
                <span>Date</span>
            </div>
            <div className={styles.group}>
                <img src={photo}/>
                <span>{id}</span>
            </div>
            <button onClick={() => navigate("/ticket/details", {state:{id}})}>View Ticket</button>
        </div>
    )
}

export default Ticket;