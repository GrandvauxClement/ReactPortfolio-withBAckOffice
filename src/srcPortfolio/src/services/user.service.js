import axios from "axios";
import authHeader from "./auth-header"

const API_URL = "http://127.0.0.1:8000/api/";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'users/1', {headers: authHeader()});
    }

    getAllProject() {
        return axios.get(API_URL +'projets')
    }

    getProjectById(id) {
        return axios.get(API_URL + 'projets/' + id)
    }

    deleteProject(id) {
        return axios.delete(API_URL + 'projets/' + id, {headers: authHeader()});
    }

    addProject(titre, images, enLigne, description, technologie, annee, url) {
        console.log(titre, images, enLigne, description, technologie, annee, url);
        return axios.post(API_URL + 'projets',{
            titre: titre,
            images: images,
            enLigne: enLigne,
            description: description,
            technologie: technologie,
            annee: annee,
            url: url
        }, {headers: authHeader()})
    }
}

export default new UserService();
