import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from '../store/usersReducer';
import { fetchSpecificUserFailure, fetchSpecificUserSuccess } from '../store/specificUserReducer';

export async function fetchUsersApi() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    return await response.json();
}

export async function fetchSpecificUserApi(userID) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`); // Исправлено
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    return await response.json();
}

function* fetchUsers() {
    try {
        const data = yield call(fetchUsersApi);
        yield put(fetchUsersSuccess(data));
    } catch (error) {
        yield put(fetchUsersFailure(error.message));
    }
}

function* fetchSpecificUser(action) { // Изменено на action для получения userID
    try {
        const data = yield call(fetchSpecificUserApi, action.payload); // Используйте action.payload
        yield put(fetchSpecificUserSuccess(data));
    } catch (error) {
        yield put(fetchSpecificUserFailure(error.message));
    }
}

function* usersSaga() {
    yield takeEvery(fetchUsersRequest.type, fetchUsers);
    yield takeEvery(fetchSpecificUser.type, fetchSpecificUser); // Добавлено для обработки fetchSpecificUser
}

export default usersSaga;