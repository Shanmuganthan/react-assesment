import { takeEvery, put, all } from 'redux-saga/effects';
import { searchArtGallery } from '../api/index';
import { APP_LOAD, APP_LOAD_DONE, ART_GALLERY_DATA, FETCH_LSTEST_ART_GALLERY, FILTER_ART_GALLERY, UPDATE_LSTEST_ART_GALLERY, WHISH_LIST_LS_NAME } from './constant';


function* filterArtGallery(x) {
    let result = yield searchArtGallery(x.value);
    if (result.error) {
        yield put({ type: 'FETCH_ERROR', payload: result.error });
    } else {
        yield put({ type: ART_GALLERY_DATA, payload: result.data });
    }
}

export function* getFilterArtGalleryWatcher() {
    yield takeEvery(FILTER_ART_GALLERY, filterArtGallery);
}

export function* initateAppLoad(x) {
    let whishList = localStorage.getItem(WHISH_LIST_LS_NAME);
    yield put({ type: APP_LOAD_DONE, payload: { whishList } });
}
export function* appLoadWathcer() {
    yield takeEvery(APP_LOAD, initateAppLoad);
}

export function* fetchLatestArtGallery() {
    let result = yield fetchLatesArtGallery();
    console.log(data);
    yield put({ type: UPDATE_LSTEST_ART_GALLERY, payload: result.data });
}

export function* fetchLatestArtGalleryWatcher() {
    yield takeEvery(FETCH_LSTEST_ART_GALLERY, fetchLatestArtGallery);
}

export default function* rootSaga() {
    yield all([
        getFilterArtGalleryWatcher(),
        appLoadWathcer(),
        fetchLatestArtGalleryWatcher()
    ]);
}
