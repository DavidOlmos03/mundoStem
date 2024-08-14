// import { AuthHTTPService } from './auth-http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Models
import { UserBase } from 'src/app/core/models/user.model';
import { Token, Auth } from '../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any = null
  private apiUrlToken:string = environment.URL_SERVICIOS + 'auth/access-token'

  constructor(
    // private AuthService:AuthHTTPService,
    private http: HttpClient,

  ) { }

  login(formData: FormData){
    return this.http.post<Token>(this.apiUrlToken,formData)
  }

}
