import axios from 'axios';
import { CreateUserPayload, UpdateUserPayload, User } from '../../types/user';

const API_URL = 'http://localhost:8000'; // Adjust this to match your FastAPI server

// Get all users
export const fetchUsers = () => {
  return axios.get<User[]>(`${API_URL}/users`);
};

// Create a new user
export const createUser = (payload: CreateUserPayload) => {
  return axios.post<{ user_id: number }>(`${API_URL}/users`, {
    user_name: payload.username,
    first_name: payload.firstName,
    last_name: payload.lastName,
    date_of_birth: payload.dob || null,
  });
};

// Update an existing user
export const updateUser = (payload: UpdateUserPayload) => {
  return axios.put<{ user_id: number }>(`${API_URL}/users`, {
    id: payload.id,
    user_name: payload.username,
    first_name: payload.firstName,
    last_name: payload.lastName,
    date_of_birth: payload.dob || null,
  });
};

// Delete a user
export const deleteUser = (userId: number) => {
  return axios.delete<{ user_id: number }>(`${API_URL}/users/${userId}`);
};
