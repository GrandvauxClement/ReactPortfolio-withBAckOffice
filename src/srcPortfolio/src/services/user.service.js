
import authHeader from "./auth-header"
import http from "../../../http-common";

class UserService {
    getPublicContent() {
        return http.get('/api/users/1', {headers: authHeader()});
    }
    getAllProject() {
        return http.get('/api/projets')
    }
    getProjectById(id) {
        return http.get('/api/projets/' + id)
    }
    deleteProject(id) {
        return http.delete('/admin/project/delete/' + id, {headers: authHeader()});
    }
    addProject(titre, images, enLigne, description, technologie, annee, url) {
        return http.post('/api/projets',{
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
        return http.get('/api/contacts')
    }
    deleteMessage(id) {
        return http.delete('/api/contacts/' + id)
    }
    sendMailNotifForNewMessage(name, email, object, content) {
        return http.post('/sendMail/newMessageReceive', {
            name: name,
            email: email,
            object: object,
            content: content
        }, {headers: authHeader()})
    }
}

export default new UserService();
