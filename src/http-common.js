import axios from "axios";
import authHeader from "./srcPortfolio/src/services/auth-header";

export default axios.create({
    baseURL: "https://127.0.0.1:8000",
    headers: authHeader()
});
