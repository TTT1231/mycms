import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import type {IUserInfo} from './types'
export class LoginService{
    public instance:AxiosInstance;
    public config:AxiosRequestConfig;
    constructor(config:AxiosRequestConfig){
        this.instance=axios.create(config)
        this.config=config;
        
    } 
    
    public loginRequestGet(url:string):Promise<AxiosResponse<IUserInfo>>{

        return this.instance.get(url); 
    }
}