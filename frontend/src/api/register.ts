import axiosInstance from "../config/axiosInstance";
import { RegisterRequest } from "../model/UserData";

export const registerUser = async (userData: RegisterRequest) => {
  const response = await axiosInstance.post("/auth/register", userData, {
    headers: {
        "Content-Type": "application/json",
    }
 });
  return response.data;
};
