import './types';
import { Module } from 'vuex';
import loginService from '@/service/index';
import { IUserInfo } from '@/service/LoginService/types';
import router from '@/router'
import  { AxiosResponse } from "axios"
const LoginModule:Module<ILoginState,any>={
    namespaced:true,
    state(){
        return{
            token: '',
            userInfo: {},
            userMenus: [],
        }
    },
    getters: {
    },
    mutations: {
         initToken(state:ILoginState,token:string){
            state.token=token;
         },
         initUserInfo(state:ILoginState,userInfo:any){
            state.userInfo=userInfo;
         },
         initUserMenus(state:ILoginState,userMenus:any){
            state.userMenus=userMenus;
         }
    },
    actions: {
        //异步登录请求
        async accountLoginAction({ commit,state }, url: string) {
            // 实现登录逻辑     
     
          try{
             
              
             const response: AxiosResponse | undefined = await loginService.loginRequestGet(url);
              const tempUserData: IUserInfo | undefined=response.data;
              commit('initToken', tempUserData === undefined ? "faillogin" : "loginsuccess");
              commit('initUserInfo', tempUserData)
            //   if (tempUserData?.code === 1) {
            //       router.push('/main')
            //   }
   
          }
          catch(error){
            console.log(error)

          }
     
          
  
          
          
          },


    },
    modules: {
    }
}

export default LoginModule