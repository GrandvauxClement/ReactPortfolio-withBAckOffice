import axios from "axios";
const API_URL = "https://127.0.0.1:8000/api/"

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "login", {
                email:username,
                password:password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data.token));
                }
                return response.data
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();