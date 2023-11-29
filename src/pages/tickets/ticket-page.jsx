import styles from "./ticket-page.module.css";
import Navbar from "../../components/navbar.jsx";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

const TicketPage = ({profile, ticketForm, handleLogout, handleTicketFormChange}) => {

    const ref = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const {title, description} = ticketForm;
        ref.current.focus();
        if(!title || !description) {
            return;
        }
        navigate("/ticket/fillup");
    }

    return (
        <section className={styles.container}>
            <Navbar handleLogout={handleLogout}/>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                    <h1>Ticket Form</h1>
                </div>
                <input type="text" value={ticketForm.title} ref={ref} name="title" placeholder="Title" autoFocus={true} onChange={handleTicketFormChange}/>
                <textarea name="description" value={ticketForm.description} placeholder="Description" onChange={handleTicketFormChange}/>
                <button type="submit">Next</button>
            </form>
        </section>
    )
}

export default TicketPage;