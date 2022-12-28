import { take, put, call, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch"
import {
    GET_CURRENT_USER_INFO,
    setCurrentUser
} from "../actions"
export function* currentUserSaga() {
    const { id } = yield take(GET_CURRENT_USER_INFO)
    const response = yield call(fetch, `http://192.168.1.10:8081/user/${id}`)
    const data = yield apply(response, response.json)
    console.info("ID", id)
    console.log("Data?", data)
    yield put(setCurrentUser(data))
}
