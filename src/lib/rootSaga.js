import { all } from "redux-saga/effects"
import { watchUsersAction } from "../app/store/saga"

export default function* rootSaga(){
    yield all([
        watchUsersAction()
    ])
}