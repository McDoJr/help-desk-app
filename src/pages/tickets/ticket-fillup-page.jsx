import styles from "./ticket-fillup-page.module.css";
import Navbar from "../../components/navbar.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import Calendar from "../../components/calendar.jsx";
import {getMonth} from "../../utils/calendar.js";
import {useNavigate} from "react-router-dom";

const TicketFillupPage = ({profile, handleLogout, ticketForm, setTicketForm, handleTicketFormChange, addTicket}) => {

    const navigate = useNavigate();
    const [showCalendar, setShowCalendar] = useState(false);
    const [showUrgency, setShowUrgency] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showRequested, setShowRequested] = useState(false);
    const [showAssigned, setShowAssigned] = useState(false);

    useEffect(() => {
        const clickListener = (e) => {
            const {id} = e.target;
            if(showUrgency && id !== 'urgency'){
                setShowUrgency(false);
            }

            if(showRequested && id !== 'requested'){
                setShowRequested(false);
            }

            if(showAssigned && id !== 'assigned'){
                setShowAssigned(false);
            }

            if(showLocation && id !== 'location'){
                if(id === 'location__input') {
                    return;
                }
                setShowLocation(false);
            }
            if(showCalendar && id !== 'calendar' && id !== 'calendar__body'){
                setShowCalendar(false);
            }
        }
        window.addEventListener('click', clickListener);

        return () => {
            window.removeEventListener('click', clickListener);
        };
    }, [showCalendar, showUrgency, showLocation, showAssigned, showRequested]);

    const handleCalendartoggle = (e) => {
        const {id} = e.target;
        if (id !== 'calendar__body') {
            setShowCalendar(!showCalendar);
        }
    }

    const handleChange = (name, value) => {
        setTicketForm({...ticketForm, [name]: value});
    }

    const handleLocationToggle = (e) => {
        const {id} = e.target;
        if(id !== 'location__input') {
            setShowLocation(!showLocation);
        }
    }

    const checkDateFilledUp = () => {
        const {date} = ticketForm;
        return date.day && date.month && date.year;
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        addTicket(ticketForm);
        navigate("/main");
    }

    return (
        <section className={styles.container}>
            <Navbar handleLogout={handleLogout}/>
            <div className={styles.form}>
                <div className={styles.header}>
                    <h1>Ticket Form</h1>
                </div>
                <div className={styles.row1}>
                    <span>Active</span>
                    <span>Solved</span>
                </div>
                <div className={styles.row2}>
                    <h2>Tags</h2>
                    <div className={styles.field}>
                        <div className={styles.button} id="calendar" onClick={handleCalendartoggle}>
                            {checkDateFilledUp() ? `${getMonth(ticketForm.date.month)} ${ticketForm.date.day} ${ticketForm.date.year}` : 'Opening Date'}
                            <img id="calendar" src={require("../../assets/calendar.png")}/>
                            <Calendar showCalendar={showCalendar} ticketForm={ticketForm} setTicketForm={setTicketForm}/>
                        </div>
                        <div className={styles.button} id="urgency" onClick={() => setShowUrgency(!showUrgency)}>{ticketForm.urgency ? ticketForm.urgency : 'Urgency'}<img id="urgency" src={require("../../assets/urgency.png")}/>
                            <ul style={{display: showUrgency ? 'block' : 'none'}}>
                                <li onClick={() => handleChange('urgency', 'High')}><img src={require("../../assets/arrow_up.png")}/> High</li>
                                <li onClick={() => handleChange('urgency', 'Medium')}><img src={require("../../assets/arrow_left_right.png")}/> Medium</li>
                                <li onClick={() => handleChange('urgency', 'Low')}><img src={require("../../assets/arrow_down.png")}/> Low</li>
                            </ul>
                        </div>
                        <div className={styles.button} id="location" onClick={handleLocationToggle}>{ticketForm.location ? ticketForm.location : 'Location'}<img id="location" src={require("../../assets/location.png")}/>
                            <ul id="location__input" style={{display: showLocation ? 'block' : 'none'}}>
                                <input name="location" value={ticketForm.location} id="location__input" type="text" onChange={handleTicketFormChange}/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.select} id="requested" onClick={() => setShowRequested(!showRequested)}>
                    <h3>Requested by</h3>
                    <span>{ticketForm.requested ? ticketForm.requested : 'Member'}</span>
                    <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
                    <ul style={{display: showRequested ? 'flex' : 'none'}}>
                        <li onClick={() => handleChange('requested', 'Rubbila')}><img src={require("../../assets/green_dot.png")}/> Rubbila</li>
                        <li onClick={() => handleChange('requested', 'Javerle')}><img src={require("../../assets/green_dot.png")}/> Javerle</li>
                        <li onClick={() => handleChange('requested', 'Domz')}><img src={require("../../assets/green_dot.png")}/> Domz</li>
                        <li onClick={() => handleChange('requested', 'Miras')}><img src={require("../../assets/green_dot.png")}/> Miras</li>
                    </ul>
                </div>
                <div className={styles.select} id="assigned" onClick={() => setShowAssigned(!showAssigned)}>
                    <h3>Assigned to</h3>
                    <span>{ticketForm.assigned ? ticketForm.assigned : 'Member'}</span>
                    <FontAwesomeIcon icon={faChevronRight} className={styles.icon}/>
                    <ul style={{display: showAssigned ? 'flex' : 'none'}}>
                        <li onClick={() => handleChange('assigned', 'Rubbila')}><img src={require("../../assets/green_dot.png")}/> Rubilla</li>
                        <li onClick={() => handleChange('assigned', 'Javerle')}><img src={require("../../assets/green_dot.png")}/> Javerle</li>
                        <li onClick={() => handleChange('assigned', 'Domz')}><img src={require("../../assets/green_dot.png")}/> Domz</li>
                        <li onClick={() => handleChange('assigned', 'Miras')}><img src={require("../../assets/green_dot.png")}/> Miras</li>
                    </ul>
                </div>
                <button onClick={handleSubmitForm}>Create</button>
            </div>
        </section>
    )
}

export default TicketFillupPage;