import api from "./api";

const userService = {
  signin: async (email, user_name, password) => {
    const user = { email, user_name, password };
    return api.post("/api/adminlogin", user);
  },
  // signout: async () => {
  //   return api.post("/api/logout");
  // },
};
//await?

export default userService;
