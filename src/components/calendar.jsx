import styles from "./calendar.module.css";
import {useEffect, useState} from "react";
import {getCalendar, getDays, getMonth, weeks} from "../utils/calendar.js";

const Calendar = ({showCalendar, ticketForm, setTicketForm}) => {

    let date = new Date();
    const [calendar, setCalendar] = useState(getCalendar(date));
    const [calendarData, setCalendarData] = useState({day: '', month: '', year: ''});

    useEffect(() => {
        setCalendarData({day: String(date.getDate()), month: String(date.getMonth()), year: String(date.getFullYear())});
    }, []);

    const handleDate = (amount) => {
        let {month, year} = calendar;
        date = new Date(year, month + amount, new Date().getDate());
        month = date.getMonth();
        year = date.getFullYear();
        setCalendar({month, monthName: getMonth(month), year, days: getDays(date, year, month)});
        setCalendarData({...calendarData, ['month']: String(month), ['year']: String(year)})
    }

    const handleTicketForm = (day) => {
        const {date} = ticketForm;
        date.day = day;
        setCalendarData({...calendarData, ['day']: day});
        setTicketForm({...ticketForm, ['date']: date});
    }

    const handleDateSubmit = () => {
        const date = {day: calendarData.day, month: calendarData.month, year: calendarData.year};
        setTicketForm({...ticketForm, ['date']: date});
    }

    return (
        <div className={styles.container} id="calendar__body" style={{display: showCalendar ? 'block' : 'none'}}>
            <div className={styles.row1} id="calendar__body">
                <img src={require("../assets/chevron_left.png")} id="calendar__body" onClick={() => handleDate(-1)}/>
                <h3 id="calendar__body">{`${calendar.monthName} ${calendar.year}`}</h3>
                <img src={require("../assets/chevron_right.png")} id="calendar__body" onClick={() => handleDate(1)}/>
            </div>
            <div className={styles.row2} id="calendar__body">
                {weeks.map((week, index) => <h5 id="calendar__body" key={index}>{week}</h5>)}
            </div>
            <div className={styles.row3} id="calendar__body">
                {calendar.days.map(({day, name}, index) => {
                    if (name !== 'inactive' && ticketForm.date.day) {
                        name = day === ticketForm.date.day ? 'active' : 'normal';
                    }
                    return <span id="calendar__body" className={styles[name]} key={index} onClick={() => handleTicketForm(day)}>{day}</span>
                })}
            </div>
            <button type="button" onClick={handleDateSubmit}>Now <img src={require("../assets/cube.png")}/></button>
        </div>
    )
}

export default Calendar;