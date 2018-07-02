import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TabsPage } from '../../pages/tabs/tabs';

@Injectable()
export class AuthProvider {
  // currentUser: User;
  constructor() {
   
  }

  login(name:string,pw:string): Promise<boolean>  {
    return new Promise((resolve, reject)=> {
      if(name=='mvnath1998@gmail.com' && pw=='admin'){
        // name: name,
        // role:0
        resolve(true);
      }else{
        reject('No such user name or incorrect password.');
      }
    });
      }
      // isLoggedIn(){
      //   return this.currentUser!=null;
      // }
      // logout(){
      //   this.currentUser=null;
      // }
}
