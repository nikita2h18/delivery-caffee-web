import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URL} from "../../globals";
import {UserCredentials} from "../dto/UserCredentials";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(
    private http: HttpClient,
  ) { }

  public register = (registerUser: UserCredentials): Observable<void> =>
    this.http.post<void>(API_URL + '/registration', registerUser);
}
