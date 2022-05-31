import axios from "axios";
import { URL } from "constants/api";

export const getOffersCase1 = () => {
    return axios.get(`${URL}/case1`);
}

export const getOffersCase2 = () => {
    return axios.get(`${URL}/case2`);
}

export const getOffersCase3 = () => {
    return axios.get(`${URL}/case3`);
}

export const getOfferCount = () => {
    return axios.get(`${URL}/get_offer_count`);
}