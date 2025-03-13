import { User, CreateUserPayload } from '../../types/user';

export enum UserActionTypes {
  // Fetch Users
  FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE',

  // Create User
  CREATE_USER_REQUEST = 'CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS',
  CREATE_USER_FAILURE = 'CREATE_USER_FAILURE',

  // Update User
  UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE',

  // Delete User
  DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE = 'DELETE_USER_FAILURE',

  // Reset Create User
  RESET_CREATE_USER = 'RESET_CREATE_USER',
  RESET_UPDATE_USER = 'RESET_UPDATE_USER',
  RESET_DELETE_USER = 'RESET_UPDATE_USER',
}

// Action creators
export const fetchUsersRequest = () => ({
  type: UserActionTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users: User[]) => ({
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error: string) => ({
  type: UserActionTypes.FETCH_USERS_FAILURE,
  payload: error,
});

export const createUserRequest = (payload: CreateUserPayload) => ({
  type: UserActionTypes.CREATE_USER_REQUEST,
  payload,
});

export const createUserSuccess = (user: User) => ({
  type: UserActionTypes.CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserFailure = (error: string) => ({
  type: UserActionTypes.CREATE_USER_FAILURE,
  payload: error,
});

export const updateUserRequest = (payload: User) => ({
  type: UserActionTypes.UPDATE_USER_REQUEST,
  payload,
});

export const updateUserSuccess = (user: User) => ({
  type: UserActionTypes.UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserFailure = (error: string) => ({
  type: UserActionTypes.UPDATE_USER_FAILURE,
  payload: error,
});

export const deleteUserRequest = (userId: number) => ({
  type: UserActionTypes.DELETE_USER_REQUEST,
  payload: userId,
});

export const deleteUserSuccess = (userId: number) => ({
  type: UserActionTypes.DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserFailure = (error: string) => ({
  type: UserActionTypes.DELETE_USER_FAILURE,
  payload: error,
});

export const resetCreateUser = () => ({
  type: UserActionTypes.RESET_CREATE_USER,
});

export const resetEditUser = () => ({
  type: UserActionTypes.RESET_UPDATE_USER,
});

export const resetDeleteUser = () => ({
  type: UserActionTypes.RESET_DELETE_USER,
});

// Action type
export interface UserAction {
  type: UserActionTypes;
  payload?: any;
}
