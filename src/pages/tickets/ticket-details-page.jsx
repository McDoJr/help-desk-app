import styles from "./ticket-details-page.module.css";
import Navbar from "../../components/navbar.jsx";
import {useLocation} from "react-router-dom";
import {getMonth} from "../../utils/calendar.js";

const TicketDetailsPage = ({profile, handleLogout, handleProfilesChanges}) => {

    const loc = useLocation();

    const ticketId = loc.state.id;
    const {title, description, urgency, date, requested, location, solved} = profile.tickets.filter(ticket => ticket.id === ticketId)[0];

    const handleSolveTicket = () => {
        if(solved) return;
        profile.tickets.filter(ticket => ticket.id === ticketId)[0].solved = true;
        handleProfilesChanges(profile);
    }

    return (
        <section className={styles.container}>
            <Navbar handleLogout={handleLogout}/>
            <img className={styles.print} src={require("../../assets/print.png")}/>
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
                    <span style={{color: solved ? '#0ACF83' : '#FF0742'}}>{solved ? 'Solved' : 'Active'}</span>
                </div>
                <div className={styles.bottom}>
                    <span onClick={handleSolveTicket} style={{display: solved ? 'none' : 'inline',color: '#0ACF83', marginRight: '70px'}}>Solve Ticket</span>
                    <span style={{color: '#FF0742'}}>Update</span>
                </div>
            </div>
        </section>
    )
}

export default TicketDetailsPage;