import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CD} from "../model/model";


@Injectable({
  providedIn: 'root'
})
export class CRUDServices {

  constructor(private httpClient: HttpClient) {}

  OnUpdateCd(cd: CD){

    return this.httpClient.put('http://localhost:8080/cd', cd);
  }

  add (cd: CD) {
    return this.httpClient.post("http://localhost:8080/cd",cd);
  }

  delete(c){

     return this.httpClient.delete('http://localhost:8080/cd/' + c.id)

  }
  getCds(){
    return this.httpClient.get("http://localhost:8080/cd");



  }
}
