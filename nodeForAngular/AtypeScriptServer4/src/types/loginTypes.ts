// loginTypes.ts

interface requestLoginType {
  userName?: string;
  password?: string;
}

interface responseLoginType {
  isAuth: boolean;
  userName?: string;
}

export { responseLoginType, requestLoginType };
