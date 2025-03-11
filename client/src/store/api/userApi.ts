import axios from 'axios';
import { CreateUserPayload, User } from '../../types/user';

const API_URL = 'http://localhost:8000'; // Adjust this to match your FastAPI server

// Get all users
export const fetchUsers = () => {
  return axios.get<User[]>(`${API_URL}/users`);
};

// Create a new user
export const createUser = (payload: CreateUserPayload) => {
  return axios.post<{ user_id: number }>(`${API_URL}/users`, payload);
};

// Update an existing user
export const updateUser = (user: User) => {
  return axios.put<{ user_id: number }>(`${API_URL}/users`, user);
};

// Delete a user
export const deleteUser = (userId: number) => {
  return axios.delete<{ user_id: number }>(`${API_URL}/users/${userId}`);
};
