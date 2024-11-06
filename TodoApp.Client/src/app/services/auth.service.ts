import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

// user model
export interface IUser {
    email: string;
    id: string;
}
// auth model
export interface IAuthInfo {
    payload?: IUser;
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
}

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private _loginUrl = "/auth/login";

    constructor(private _http: HttpClient) {}

	login(username: string, password: string): Observable<any> {
		return this._http.post(this._loginUrl, { username, password }).pipe(
		  map((response) => {
			// prepare the response to be handled, then return
			// we'll tidy up later
			const retUser: IAuthInfo = <IAuthInfo>(<any>response).data;
			// save in localStorage
			localStorage.setItem('user', JSON.stringify(retUser));
			return retUser;
		  })
		);
	  }
}
