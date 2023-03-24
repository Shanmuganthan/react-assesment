import {
    APP_LOAD,
    APP_LOAD_DONE,
    ART_GALLERY_DATA,
    DISLIKE_ART,
    LIKE_ART,
    WHISH_LIST_LS_NAME
} from './constant/index';

export default (state = {}, action) => {
    switch (action.type) {
        case ART_GALLERY_DATA:
            console.log(action)
            return {
                ...state,
                artGalleryData: action.payload,
            }
        case DISLIKE_ART:
            let dislikedWhishList = state.whishList ?? [];
            dislikedWhishList = typeof dislikedWhishList == "string" ? dislikedWhishList?.split(",") : dislikedWhishList;
            dislikedWhishList = dislikedWhishList?.filter((item) => item != action.payload);
            localStorage.setItem(WHISH_LIST_LS_NAME, action.payload)
            return {
                ...state,
                whishList: dislikedWhishList
            }
        case LIKE_ART:
            let likedWishList = state.whishList ?? [];
            likedWishList = typeof likedWishList == "string" ? likedWishList?.split("") : likedWishList;
            likedWishList.push(action.payload)
            localStorage.setItem(WHISH_LIST_LS_NAME, likedWishList)
            return {
                ...state,
                whishList: likedWishList
            }
        case APP_LOAD_DONE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}   
