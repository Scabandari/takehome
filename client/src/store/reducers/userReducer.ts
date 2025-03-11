import { User } from '../../types/user';
import { UserAction, UserActionTypes } from '../actions/userActions';

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    // Fetch Users
    case UserActionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    case UserActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Create User
    case UserActionTypes.CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UserActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UserActionTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Update User
    case UserActionTypes.UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UserActionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Delete User
    case UserActionTypes.DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UserActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case UserActionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
