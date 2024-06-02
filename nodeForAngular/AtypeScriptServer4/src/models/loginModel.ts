// loginModel.ts"
import { poolPromise } from "../config/databaseConfig";
import { requestLoginType, responseLoginType } from "../types/loginTypes";

async function loginModel(data: requestLoginType): Promise<responseLoginType> {
  try {
    debugger
    const pool = await poolPromise;
    const loginData = data;
    const query = `
                    SELECT 
                        [EmployeeDetails].[EmployeeID]
                        , [EmployeeDetails].[FullName]
                        , [EmployeeDetails].[Email]
                        , [EmployeeDetails].[Age]
                        , [EmployeeDetails].[Gender]
                    FROM [dbo].[EmployeeDetails] [EmployeeDetails]
                    INNER JOIN [dbo].[EmployeeAuth] [EmployeeAuth]
                    ON [EmployeeAuth].[EmployeeID] = [EmployeeDetails].[EmployeeID]
                    WHERE 
                        [EmployeeAuth].[IsLatest] = 1 AND
                        [EmployeeAuth].[Password] = '${loginData.password}' AND 
                        [EmployeeDetails].[Email] = '${loginData.userName}'
    `;

    const result = await pool.request().query(query);
    console.log(result);
    if (result.recordset.length === 1) {
      const authData = { ...result.recordset[0], isAuth: true };
      result.recordset[0] = { ...authData };
    } else {
      const authData = { isAuth: false };
      result.recordset[0] = { ...authData };
    }
    return result.recordset[0] as responseLoginType;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { loginModel };
