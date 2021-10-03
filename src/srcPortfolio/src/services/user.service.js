import axios from "axios";
import authHeader from "./auth-header"

const API_URL = "https://127.0.0.1:8000/api/";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'users/1', {headers: authHeader()});
    }

    getAllProject() {
        return axios.get(API_URL +'projets')
    }

    deleteProject(id) {
        return axios.delete(API_URL + 'projets/' + id, {headers: authHeader()});
    }
}

export default new UserService();