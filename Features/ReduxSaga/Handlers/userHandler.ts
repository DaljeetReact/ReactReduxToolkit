import {call,put} from 'redux-saga/effects';
import { fetchUsersApi } from '../ApiRequests/userApi';
import {SetUser} from '../../Slices/SagaUserSlice'

export function* handleGetUSer(){
    try {
        const response = yield call(fetchUsersApi);
        yield put(SetUser(response.data))
    } catch (error) {
        console.log('catch error'.error);
    }
}