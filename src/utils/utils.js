import ticket from "../components/ticket.jsx";

export const defaultProfileId = 1000;
export const defaultTicketId = 0;

export const saveData = (key, data) => {
    localStorage.setItem(key, data ? JSON.stringify(data) : null);
}

export const fetchSavedProfiles = () => {
    const profiles = localStorage.getItem("profiles");
    return profiles ? JSON.parse(profiles) : [];
}

export const fetchLoggedInProfile = () => {
    const profile = localStorage.getItem("profile");
    return profile ? JSON.parse(profile) : {};
}

export const loggedIn = (profile) => profile && Object.keys(profile).length > 0;

export function Profile(uuid, email, password, username, photo = null) {
    this.uuid = 1000 + uuid;
    this.email = email;
    this.username = username;
    this.password = password;
    this.firstname = "";
    this.lastname = "";
    this.age = 0;
    this.phone = "";
    this.course = "";
    this.photo = photo;
    this.tickets = [];
}


// export const locations = ['CSP Faculty', 'CB 211', 'Computer Center', "Cat's Eye"];