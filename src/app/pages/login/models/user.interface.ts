export interface UserLogin {
  auth: {
    email: string;
    password: string;
  };
}

export interface UserResponseLogin {
  token: string | null;
  user_id: number | null;
  role: string | null;
  isLoggued: boolean;
}
