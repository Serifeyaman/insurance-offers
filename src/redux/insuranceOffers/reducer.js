const INITIALSTATE = {
    case1LoadingData: true,
    case1OfferList: [],
    case2LoadingData: true,
    case2OfferList: [],
    case3LoadingData: true,
    case3OfferData: {},
    offerCountLoadingData: true,
    offerCount: 0
}

const OffersReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case 'GET_CASE1':
            return {
                ...state,
                case1OfferList: action.case1OfferList,
                case1LoadingData: action.case1LoadingData
            }
        case 'GET_CASE2':
            return {
                ...state,
                case2OfferList: action.case2OfferList,
                case2LoadingData: action.case2LoadingData
            }
        case 'GET_CASE3':
            return {
                ...state,
                case3OfferData: action.case3OfferData,
                case3LoadingData: action.case3LoadingData
            }
        case 'OFFER_COUNT':
            return {
                ...state,
                offerCount: action.offerCount,
                offerCountLoadingData: action.offerCountLoadingData
            }
        default:
            return state;
    }
}

export default OffersReducer