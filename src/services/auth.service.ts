import axios from "axios";
import { jwtDecode } from "jwt-decode";

interface LoginCredentials {
  username: string;
  password: string;
}

interface jtw {
  user: string;
}

export const login = (
  data: LoginCredentials,
  callback: (status: boolean, res: string) => void
) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => callback(true, res.data.token))
    .catch((err) => callback(false, err));
};

export const getUsername = (token: string) => {
  const decoded = jwtDecode<jtw>(token);
  return decoded.user;
};
