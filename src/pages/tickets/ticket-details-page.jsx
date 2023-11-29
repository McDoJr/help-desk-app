import styles from "./ticket-details-page.module.css";
import Navbar from "../../components/navbar.jsx";
import {useLocation} from "react-router-dom";
import {getMonth} from "../../utils/calendar.js";

const TicketDetailsPage = ({profile, handleLogout}) => {

    const loc = useLocation();

    const ticketId = loc.state.id;
    const {title, description, urgency, date, requested, location, solved} = profile.tickets.filter(ticket => ticket.id === ticketId)[0];

    return (
        <section className={styles.container}>
            <Navbar handleLogout={handleLogout}/>
            <div className={styles.box}>
                <div className={styles.card}>
                    <h3>{ticketId}</h3>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className={styles.card}>
                    <h3>Urgency</h3>
                    <span>{urgency}</span>
                </div>
                <div className={styles.card}>
                    <h3>Requested by</h3>
                    <span>{requested}</span>
                    <span>{`${getMonth(date.month)} ${date.day} ${date.year}`}</span>
                </div>
                <div className={styles.card}>
                    <h3>Location</h3>
                    <span>{location}</span>
                </div>
                <div className={styles.card}>
                    <h3>Status</h3>
                    <span>{solved}</span>
                </div>
            </div>
        </section>
    )
}

export default TicketDetailsPage;