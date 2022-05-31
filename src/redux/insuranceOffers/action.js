import {
    getOffersCase1,
    getOffersCase2,
    getOffersCase3,
    getOfferCount
} from "services/InsuranceService";

export const getOffersCase_1 = () => {
    return dispatch => {
        getOffersCase1().then((res) => {
            dispatch({
                type: 'GET_CASE1',
                case1OfferList: res.data.offerList,
                case1LoadingData: false,
            })
        }).catch(err => console.log(err))
    }
}

export const getOffersCase_2 = () => {
    return dispatch => {
        getOffersCase2().then((res) => {
            dispatch({
                type: 'GET_CASE2',
                case2OfferList: res.data.offerList,
                case2LoadingData: false,
            })
        }).catch(err => console.log(err))
    }
}

export const getOffersCase_3 = () => {
    return dispatch => {
        getOffersCase3().then((res) => {
            dispatch({
                type: 'GET_CASE3',
                case3OfferData: res.data,
                case3LoadingData: false,
            })
        }).catch(err => console.log(err))
    }
}

export const getOfferCountCase3 = () => {
    return dispatch => {
        getOfferCount().then((res) => {
            dispatch({
                type: 'OFFER_COUNT',
                offerCount: res.data.num_offers,
                offerCountLoadingData: false,
            })
        }).catch(err => console.log(err))
    }
}