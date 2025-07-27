import axiosInstance from "../config/axiosInstance";

export const logoutUser = async () => {
  const response = await axiosInstance.post("/logout");
  return response.data;
};
