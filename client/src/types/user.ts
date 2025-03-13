export interface User {
  id: number;
  user_name: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

export interface CreateUserPayload {
  username: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export interface UpdateUserPayload extends CreateUserPayload {
  id: number;
}
