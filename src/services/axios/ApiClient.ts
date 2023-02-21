import axios from "axios";
import { AUTHORIZATION } from "../../config/Config";

export const axiosProduct = axios.create({
  baseURL:
    "https://api.airtable.com/v0/appw7qGRaBwJle4Xo/Products?filterByFormula={product_id}=",
  headers: {
    authorization: AUTHORIZATION,
  },
});

export const axiosClient = axios.create({
  baseURL:
    "https://api.airtable.com/v0/appw7qGRaBwJle4Xo/Clients?filterByFormula={Name}=",
  headers: {
    authorization: AUTHORIZATION,
  },
});
