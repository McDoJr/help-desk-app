import styles from "./ticket-list-page.module.css";
import Navbar from "../../components/navbar.jsx";

const TicketListPage = ({profile, handleLogout}) => {

    const {tickets} = profile;

    return (
        <section className={styles.container}>
            <Navbar handleLogout={handleLogout}/>
            <h2>Ticket List</h2>
            <div className={styles.heading}>
                <span>Ticket</span>
                <span>Ticket Number</span>
                <span>Requested by</span>
                <span>Date</span>
                <span>Status</span>
                <span>Urgency</span>
            </div>
            {tickets.map(({title, id, requested, date, solved, urgency}, index) => {

                const {day, month, year} = date;
                const status = solved ? 'Solved' : 'Active';

                return (
                    <div className={styles.row} key={index}>
                        <span>{title}</span>
                        <span>{id}</span>
                        <span>{requested}</span>
                        <span>{`${month}/${day}/${year}`}</span>
                        <span style={{color: solved ? '#0ACF83' : '#FF0742'}}>{status}</span>
                        <span>{urgency}</span>
                    </div>
                )
            })}
        </section>
    )
}

export default TicketListPage;