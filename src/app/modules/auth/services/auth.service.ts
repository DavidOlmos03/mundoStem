// import { AuthHTTPService } from './auth-http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any = null
  constructor(
    // private AuthService:AuthHTTPService,

  ) { }


  // registration(user: UserModel): Observable<any> {
  //   this.isLoadingSubject.next(true);
  //   return this.authHttpService.createUser(user).pipe(
  //     map(() => {
  //       this.isLoadingSubject.next(false);
  //     }),
  //     switchMap(() => this.login(user.email, user.password)),
  //     catchError((err) => {
  //       console.error('err', err);
  //       return of(undefined);
  //     }),
  //     finalize(() => this.isLoadingSubject.next(false))
  //   );
  // }
}
