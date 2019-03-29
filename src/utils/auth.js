/**
 * 登录 把token值存在sessionStorage中
 */

export function loginIn(token,userName){


    sessionStorage.setItem( 'token',token);
    sessionStorage.setItem( 'userName',userName);
  }
  /**
   * 判断用户是否登录
   */
  export function isLogined(){

    if(sessionStorage.getItem('token')){

        return true;
    }else{

       return false;
    }

    }


    export function  getUserName(){

      if(sessionStorage.getItem('userName')){
  
          return  userName;
      }else{
  
         return  '你好,请登录哦';
      }
  
      }
  /**
   * 清楚本地存储
   */
    export function logout(){

      sessionStorage.removeItem('token');

    }