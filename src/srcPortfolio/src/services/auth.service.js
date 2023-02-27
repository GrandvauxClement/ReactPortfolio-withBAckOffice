import http from "../../../http-common";

class AuthService {
    login(username, password) {
        return http
            .post("/api/login", {
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
