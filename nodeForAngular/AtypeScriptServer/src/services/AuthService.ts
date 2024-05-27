// AuthService.ts
import { getUserByUsernameAndPassword } from "../models/UserLogin";

async function authenticateUser(userName: string, password: string) {
  try {
    const users = await getUserByUsernameAndPassword(userName, password);
    console.log(users);

    console.log(userName, password);
    console.log("part serivce is over");

    if (users.length > 0) {
      return { success: true, message: "Authentication successful" };
    } else {
      return { success: false, message: "Invalid username or password" };
    }
  } catch (err) {
    console.error("Error authenticating user:", err);
    throw err;
  }
}

export { authenticateUser };
