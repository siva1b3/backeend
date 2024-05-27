// loginService.ts

import { requestLoginType, responseLoginType } from "../types/loginTypes";
import { loginModel } from "../models/loginModel";

async function loginService(
  data: requestLoginType
): Promise<responseLoginType> {
  console.log(data);

  const loginData: responseLoginType = await loginModel(data);
  return loginData;
}

export { loginService };
