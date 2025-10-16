import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useAuth = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    }
  }, []);

  return { username };
};
