export interface UserLogin {
  auth: {
    email: string;
    password: string;
  };
}

export interface UserResponseLogin {
  token: string | null;
  isLoggued: boolean;
  role: string | null;
  user_id: number | null;
  name: string | null;
}
