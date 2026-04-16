import { Injectable } from '@angular/core';
import { HttpService } from '../httpClient/http-client';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(
    private service: HttpService
  ){}

  registration(data: any) {
    return this.service.postMethod("/user/userSignUp", data);
  }

  login(data: any) {
    return this.service.postMethod("/user/login", data);
  }
}
