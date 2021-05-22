import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '9e4691e85efc03e1b176';
  private clientsecret = 'd74293eb927b2ebcc613e6f61f35e3910263ddd6';

  constructor(private http:HttpClient) {
    this.username = "justusm10moringaschool";
   }
   getProfileData(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
    
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
   }
}
