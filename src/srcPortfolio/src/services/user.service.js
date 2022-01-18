import axios from "axios";
import authHeader from "./auth-header"
const API_URL = "https://www.portfolioback.clementgrandvaux.fr/";

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'api/users/1', {headers: authHeader()});
    }
    getAllProject() {
        return axios.get(API_URL +'api/projets')
    }
    getProjectById(id) {
        return axios.get(API_URL + 'api/projets/' + id)
    }
    deleteProject(id) {
        return axios.delete(API_URL + 'admin/project/delete/' + id, {headers: authHeader()});
    }
    addProject(titre, images, enLigne, description, technologie, annee, url) {
        return axios.post(API_URL + 'api/projets',{
            titre: titre,
            images: images,
            enLigne: enLigne,
            description: description,
            technologie: technologie,
            annee: annee,
            url: url
        }, {headers: authHeader()})
    }
    getMessage() {
        return axios.get(API_URL + 'api/contacts')
    }
}

export default new UserService();
