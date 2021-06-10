import api from "./api";

const userService = {
  signin: async (email, user_name, password) => {
    const user = { email, user_name, password };
    return await api.post("/api/adminlogin", user);
  },
};
export default userService;
