import styles from "./home-page.module.css";
import Navbar from "../../components/navbar.jsx";
import Ticket from "../../components/ticket.jsx";
import {useEffect} from "react";
import {fetchLoggedInProfile} from "../../utils/utils.js";

const HomePage = ({profile, handleLogout}) => {

    let activeTickets = profile.tickets.filter(ticket => !ticket.solved).length;
    let completedTickets = profile.tickets.filter(ticket => ticket.solved).length;

    return (
        <section className={styles.container}>
            <Navbar handleLogout={handleLogout}/>
            <div className={styles.top}>
                <div className={styles.i}>
                    <h1>{`Hello, ${profile.username}!`}</h1>
                    <h3>It's good to see you again.</h3>
                    <img src={require("../../assets/boy_waving.png")}/>
                </div>
                <div className={styles.j}>
                    <div>
                        <h2>{completedTickets ? completedTickets : '0'}</h2>
                        <span>Tickets<br/>completed</span>
                    </div>
                    <div>
                        <h2>{activeTickets ? activeTickets : '0'}</h2>
                        <span>Tickets<br/>in progress</span>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.left}>
                    <h3>Tickets</h3>
                    <div className={styles.heading}>
                        <span>All Tickets</span>
                        <span>The Newest</span>
                        <span>Solved</span>
                    </div>
                    {profile.tickets.map((ticket, index) => {
                        return <Ticket key={index} ticket={ticket}/>;
                    })}
                </div>
                <img src={require("../../assets/statistics.png")} className={styles.right}/>
            </div>
            <div className={styles.bottom}>
                <img src={require("../../assets/help_banner.png")}/>
                <button>Learn more</button>
            </div>
        </section>
    )
}

export default HomePage