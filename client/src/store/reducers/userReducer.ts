import { User } from '../../types/user';
import { UserAction, UserActionTypes } from '../actions/userActions';

interface UserState {
  users: User[];
  fetchUsers: {
    loading: boolean;
    success: boolean | undefined;
  };
  createUser: {
    loading: boolean;
    success: boolean | undefined;
  };
  updateUser: {
    loading: boolean;
    success: boolean | undefined;
  };
  deleteUser: {
    loading: boolean;
    success: boolean | undefined;
  };
}

const initialState: UserState = {
  users: [],
  fetchUsers: {
    loading: false,
    success: undefined,
  },
  createUser: {
    loading: false,
    success: undefined,
  },
  updateUser: {
    loading: false,
    success: undefined,
  },
  deleteUser: {
    loading: false,
    success: undefined,
  },
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    // Fetch Users
    case UserActionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        fetchUsers: {
          loading: true,
          success: undefined,
        },
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        fetchUsers: {
          loading: false,
          success: true,
        },
      };
    case UserActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        fetchUsers: {
          loading: false,
          success: false,
        },
      };

    // Create User
    case UserActionTypes.CREATE_USER_REQUEST:
      return {
        ...state,
        createUser: {
          loading: true,
          success: undefined,
        },
      };
    case UserActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        createUser: {
          loading: false,
          success: true,
        },
      };
    case UserActionTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        createUser: {
          loading: false,
          success: false,
        },
      };
    case UserActionTypes.RESET_CREATE_USER:
      return {
        ...state,
        createUser: {
          loading: false,
          success: undefined,
        },
      };

    // Update User
    case UserActionTypes.UPDATE_USER_REQUEST:
      return {
        ...state,
        updateUser: {
          loading: true,
          success: undefined,
        },
      };
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateUser: {
          loading: false,
          success: true,
        },
      };

    case UserActionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        updateUser: {
          loading: false,
          success: false,
        },
      };

    case UserActionTypes.RESET_UPDATE_USER:
      return {
        ...state,
        updateUser: {
          loading: false,
          success: undefined,
        },
      };

    // Delete User
    case UserActionTypes.DELETE_USER_REQUEST:
      return {
        ...state,
        deleteUser: {
          loading: true,
          success: undefined,
        },
      };
    case UserActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUser: {
          loading: false,
          success: true,
        },
      };
    case UserActionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        deleteUser: {
          loading: false,
          success: false,
        },
      };

    case UserActionTypes.RESET_DELETE_USER:
      return {
        ...state,
        deleteUser: {
          loading: false,
          success: undefined,
        },
      };

    default:
      return state;
  }
};

export default userReducer;
