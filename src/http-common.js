import axios from "axios";
import authHeader from "./srcPortfolio/src/services/auth-header";

export default axios.create({
   // baseURL: "http://127.0.0.1:8000",
    baseURL: "https://www.portfolioback.clementgrandvaux.fr",
    headers: authHeader()
});
