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
        return http.get("/admin/getFiles");
       // return {"name": "luffy-6159fca62f14e.png", "url": "http://127.0.0.1:8000/images/projet/luffy-6159fca62f14e.png"}
    }
}

export default new FileUploadService();
