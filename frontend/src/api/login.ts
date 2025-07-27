import axiosInstance from "../config/axiosInstance";

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post("/auth/login", credentials, {
    headers: {
        "Content-Type": "application/json",
    }
 });
  return response.data;
};
