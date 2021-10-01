import axios from "axios";
import authHeader from "./auth-header"

const API_URL = "https://127.0.0.1:8000/api/users";

class UserService {
    getPublicContent() {
        return axios.get(API_URL, {headers: authHeader()});
    }
}

export default new UserService();