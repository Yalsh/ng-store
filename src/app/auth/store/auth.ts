export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthState {
  isLoading: boolean;
  user: User | null;
  error: Error | null;
}
