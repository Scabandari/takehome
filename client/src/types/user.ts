export interface User {
  id: number;
  name: string;
  email: string;
  // Add other properties from your backend model
}

export interface CreateUserPayload {
  name: string;
  email: string;
  // Add other required properties for user creation
}
