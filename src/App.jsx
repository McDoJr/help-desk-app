import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import LandingPage from "./pages/landing/landing-page.jsx";
import AboutPage from "./pages/landing/about-page.jsx";
import PortalPage from "./pages/auth/portal-page.jsx";
import SignUpPage from "./pages/auth/sign-up-page.jsx";
import {useEffect, useState} from "react";
import UsernamePage from "./pages/auth/username-page.jsx";
import PhotoPage from "./pages/auth/photo-page.jsx";
import LoginPage from "./pages/auth/login-page.jsx";
import HomePage from "./pages/home/home-page.jsx";
import {fetchLoggedInProfile, fetchSavedProfiles, Profile, saveData} from "./utils/utils.js";
import TicketPage from "./pages/tickets/ticket-page.jsx";
import TicketFillupPage from "./pages/tickets/ticket-fillup-page.jsx";
import TicketDetailsPage from "./pages/tickets/ticket-details-page.jsx";
import ProfilePage from "./pages/profile/profile-page.jsx";
import TicketListPage from "./pages/tickets/ticket-list-page.jsx";

const App = () => {

    const [profiles, setProfiles] = useState(fetchSavedProfiles());
    const [profile, setProfile] = useState(fetchLoggedInProfile());
    const [formData, setFormData] = useState({email: "", password: "", username: "", photo: ""});
    const [ticketForm, setTicketForm] = useState({id: "", title: "", description: "", date: {day: '', month: '', year: ''}, urgency: "", location: "", requested: "", assigned: "", solved: false});

    const generateUuid = () => {
        return profiles.length + 1;
    }

    const createProfile = () => {
        const {username, email, password, photo} = formData;
        const profile = new Profile(generateUuid(), email, password, username, photo);
        const updatedProfiles = [...profiles, profile];
        setProfiles(updatedProfiles);
        saveData("profiles", updatedProfiles);
    }

    const handleProfilesChanges = (currentProfile) => {
        const tempProfiles = [...profiles.filter(({username}) => username !== currentProfile.username), currentProfile];
        setProfiles([...tempProfiles]);
        setProfile(currentProfile);
        saveData("profile", currentProfile);
        saveData("profiles", tempProfiles);
    }

    const addTicket = (ticket) => {
        ticket.id = 100 + profile.tickets.length + 1;
        const tickets = [...profile.tickets, ticket];
        const updatedProfile = {...profile, ['tickets']: tickets};
        handleProfilesChanges(updatedProfile);
        setTicketForm({id: "", title: "", description: "", date: {day: '', month: '', year: ''}, urgency: "", location: "", requested: "", assigned: "", solved: false});
    }

    const handleTicketFormChange = (e) => {
        const {name, value} = e.target;
        setTicketForm({...ticketForm, [name]: value});
    }

    const handleLogout = () => {
        setProfile({});
        saveData("profile", null);
    }

    const checkProfile = (profileData) => {
        const profile = profiles.filter(({username, password}) => username === profileData.username && password === profileData.password)[0];
        if(profile) {
            setProfile(profile);
            saveData("profile", profile);
            return true;
        }else{
            return false;
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage profile={profile}/>}/>
                <Route path="/home" element={<LandingPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/portal" element={<PortalPage/>}/>
                <Route path="/main" element={<HomePage profile={profile} handleLogout={handleLogout}/>}/>
                <Route path="/profile" element={<ProfilePage profile={profile} handleLogout={handleLogout}/>}/>
                <Route path="/ticket/list" element={<TicketListPage profile={profile} handleLogout={handleLogout}/>}/>
                <Route path="/ticket/details" element={<TicketDetailsPage profile={profile} handleLogout={handleLogout} handleProfilesChanges={handleProfilesChanges}/>}/>
                <Route path="/ticket" element={<TicketPage profile={profile} ticketForm={ticketForm} handleLogout={handleLogout} handleTicketFormChange={handleTicketFormChange}/>}/>
                <Route path="/ticket/fillup" element={<TicketFillupPage profile={profile} setTicketForm={setTicketForm} ticketForm={ticketForm} handleLogout={handleLogout} handleTicketFormChange={handleTicketFormChange} addTicket={addTicket}/>}/>
                <Route path="/signup" element={<SignUpPage formData={formData} setFormData={setFormData}/>}/>
                <Route path="/login" element={<LoginPage checkProfile={checkProfile}/>}/>
                <Route path="/signup/username" element={<UsernamePage formData={formData} setFormData={setFormData}/>}/>
                <Route path="/signup/photo" element={<PhotoPage formData={formData} setFormData={setFormData} createProfile={createProfile}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
