import { put, takeLatest } from 'redux-saga/effects';
import { callGenerator } from './sagasUtils'; // Fixed typo in import path
import { UserAction, UserActionTypes } from '../actions/userActions';
import { createUser, fetchUsers, updateUser, deleteUser } from '../api/userApi';

// Fetch Users Saga
function* fetchUsersSaga() {
  try {
    const { data } = yield* callGenerator(fetchUsers);
    yield put({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data });
  } catch (error: any) {
    yield put({
      type: UserActionTypes.FETCH_USERS_FAILURE,
      payload: error.response?.data?.detail || 'Failed to fetch users',
    });
  }
}

// Create User Saga
function* createUserSaga(action: UserAction) {
  try {
    const { data } = yield* callGenerator(createUser, action.payload);
    yield put({ type: UserActionTypes.CREATE_USER_SUCCESS, payload: data });
    // Refresh the users list after creating a new user
    yield put({ type: UserActionTypes.FETCH_USERS_REQUEST });
  } catch (error: any) {
    yield put({
      type: UserActionTypes.CREATE_USER_FAILURE,
      payload: error.response?.data?.detail || 'Failed to create user',
    });
  }
}

// Update User Saga
function* updateUserSaga(action: UserAction) {
  try {
    const { data } = yield* callGenerator(updateUser, action.payload);
    yield put({ type: UserActionTypes.UPDATE_USER_SUCCESS, payload: data });
    // Refresh the users list after updating a user
    yield put({ type: UserActionTypes.FETCH_USERS_REQUEST });
  } catch (error: any) {
    yield put({
      type: UserActionTypes.UPDATE_USER_FAILURE,
      payload: error.response?.data?.detail || 'Failed to update user',
    });
  }
}

// Delete User Saga
function* deleteUserSaga(action: UserAction) {
  try {
    const { data } = yield* callGenerator(deleteUser, action.payload);
    yield put({ type: UserActionTypes.DELETE_USER_SUCCESS, payload: data });
    // Refresh the users list after deleting a user
    yield put({ type: UserActionTypes.FETCH_USERS_REQUEST });
  } catch (error: any) {
    yield put({
      type: UserActionTypes.DELETE_USER_FAILURE,
      payload: error.response?.data?.detail || 'Failed to delete user',
    });
  }
}

export default function* userSaga() {
  yield takeLatest(UserActionTypes.FETCH_USERS_REQUEST, fetchUsersSaga);
  yield takeLatest(UserActionTypes.CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(UserActionTypes.UPDATE_USER_REQUEST, updateUserSaga);
  yield takeLatest(UserActionTypes.DELETE_USER_REQUEST, deleteUserSaga);
}
