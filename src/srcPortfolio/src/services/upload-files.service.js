import http from "../../../http-common";


class FileUploadService {
    upload(file, onUploadProgress) {
        let formData = new FormData();
        const user = JSON.parse(localStorage.getItem("user"));

        formData.append("file", file);

        return http.post("/admin/upload/files", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": 'Bearer ' + user.accessToken
            },
            onUploadProgress,
        });
    }

    getFiles() {
        return http.get("/api/projets/1");
    }
}

export default new FileUploadService();
