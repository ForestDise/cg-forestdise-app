import axios from "axios";
const USER_MANAGEMENT_API = "http://localhost:8080/api/users";

export const findUser = async (userId) => {
  let result = null;
  try {
    result = await axios.get(`${USER_MANAGEMENT_API}/${userId}`);
    console.log(result);
  } catch (e) {
    console.log("Find user API error: " + e);
  }
  return result;
};
