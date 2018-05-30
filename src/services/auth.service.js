import { Observable, Subject } from "rxjs";



class AuthService {

        static auth$ = new Subject();


        constructor () {


        }

        login () {

                AuthService.auth$.next();

        }


}


export { AuthService };