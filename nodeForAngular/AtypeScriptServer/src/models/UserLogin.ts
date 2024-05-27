// UserLogin.ts
import { sql, poolPromise } from "../config/dbConfig";

async function getUserByUsernameAndPassword(
  userName: string,
  password: string
) {
  try {
    console.log(userName, password);
    console.log("part model is over");

    const pool = await poolPromise;

    const result = await pool
      .request()
      .input("username", sql.NVarChar, userName)
      .input("password", sql.NVarChar, password)
      .query(
        "SELECT * FROM userLogin WHERE UserName = @username AND Password = @password"
      );
    return result.recordset;
    // return [1, 2];
  } catch (err) {
    console.error("Error fetching user login data:", err);
    throw err;
  }
}

export { getUserByUsernameAndPassword };
