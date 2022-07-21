import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CommonUtil {
  private loginUser: any = null;

  public setLoginUser(loginUser: any) {
    this.loginUser = loginUser;
    //this.loginUser.appUserRole = "ADMIN";
  }

  public getLoginUser(): any {
    return this.loginUser;
  }

  public isAdminUser(): boolean {
    if(this.loginUser && this.loginUser.appUserRole === "ADMIN") {
      return true;
    }
    return false;
  }
}
