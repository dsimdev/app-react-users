import axios from "axios";

const USER_DB_API_URL = "https://api-spring-users.herokuapp.com/api/users";

class UserService {
  getAllUsers() {
    return axios.get(USER_DB_API_URL);
  }

  createUser(user) {
    return axios.post(USER_DB_API_URL, user);
  }

  getUserById(userId) {
    return axios.get(USER_DB_API_URL + "/" + userId);
  }

  updateUser(userId, user) {
    return axios.put(USER_DB_API_URL + "/" + userId, user);
  }

  deleteUser(userId) {
    return axios.delete(USER_DB_API_URL + "/" + userId);
  }
}

export default new UserService();
