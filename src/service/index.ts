//service统一出口
import { AxiosRequestConfig } from "axios";
import {LoginService} from "./LoginService/Service";
const axiosConfig:AxiosRequestConfig={
    baseURL:process.env.VUE_APP_BASE_URL,
}
const loginService:LoginService=new LoginService(axiosConfig);
export default loginService;