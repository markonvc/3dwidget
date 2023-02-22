import axios from "axios";
import { AUTHORIZATION } from "../../config/Config";

export const axiosProduct = axios.create({
  headers: {
    authorization: AUTHORIZATION,
  },
});

export const axiosClient = axios.create({
  headers: {
    authorization: AUTHORIZATION,
  },
});
