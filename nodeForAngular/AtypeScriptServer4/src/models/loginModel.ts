// loginModel.ts"
import { poolPromise } from "../config/databaseConfig";
import { requestLoginType, responseLoginType } from "../types/loginTypes";

async function loginModel(data: requestLoginType): Promise<responseLoginType> {
  try {
    const pool = await poolPromise;
    const query = "SELECT * FROM ";
  } catch (error) {}
  return { isAuth: true };
}

export { loginModel };
