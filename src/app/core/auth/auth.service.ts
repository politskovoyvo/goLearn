import {
    Injectable,
} from '@angular/core';
import {
    BehaviorSubject,
} from 'rxjs';
import {User} from "~/app/core/auth/user";
import {RouterExtensions} from "nativescript-angular/router";

// const jwt_decode = jwt_decode_;

@Injectable()
export class AuthService {
    private readonly EMAIL = 'admin';
    private readonly USER_PASSWORD = 'admin';
    private userSubject: BehaviorSubject<User> = new BehaviorSubject({} as User);

    constructor(
        // private router: RouterExtensions,
    ) {
        this.userSubject.next({} as User);
    }

    public get user(): User {
        return this.userSubject.getValue();
    }
    public set user(value: User) {
        this.userSubject.next(value);
    }

    public loginUser(email: string, password: string) {
        this.authorization(email, password);
    }

    private authorization(email: string, password: string) {
        if (email.toLowerCase() === this.EMAIL
            && password.toLowerCase() === this.USER_PASSWORD) {
            this.userSubject.next({
                email: this.EMAIL,
                password: this.USER_PASSWORD,
                refresh_token: 'Test_TOKEN',
            } as User);
        }
    }

    // private authorization(login, password): Observable<any> {
    //     // return this.getTokenRequest(`grant_type=password&username=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`).pipe(
    //     //   flatMap((tokenInfo) => this.updateSession(tokenInfo)),
    //     //   catchError((err) => {
    //     //     if (err instanceof HttpErrorResponse) {
    //     //       if (err.error.error) {
    //     //         switch (err.error.error_description) {
    //     //           case 'invalid logopass':
    //     //             throw new Error('Неправильный логин или пароль');
    //     //           default:
    //     //             this.errorEmitter.emit(err.error.error);
    //     //         }
    //     //       }
    //     //     }
    //     //     this.errorEmitter.emit(err.message);
    //     //     return of(err);
    //     //   }),
    //     // );
    //     return of();
    // }

    // public loginUser(login: string, password: string) {
    //     return this.authorization(login, password).pipe(flatMap(() => this.redirectIfNeed()));
    // }

    // public logout(currentUrl?: string) {
    //     this.clearSession();
    //
    //     // // Урл на котором находимся сейчас
    //     // if (!currentUrl) {
    //     //     currentUrl = this.router.url;
    //     // }
    //     //
    //     // // Если мы уже находимся на странице логина, никуда не редиректим
    //     // if (currentUrl.slice(0, 6) === '/login') {
    //     //     return;
    //     // }
    //     //
    //     // // Если мы не в руте, сохраняем редирект на текущую страницу.
    //     // if (currentUrl && currentUrl !== '/') {
    //     //     return this.router.navigate(['/', 'login'], {queryParams: {redirectUrl: currentUrl}});
    //     // } else {
    //     //     // Если мы в руте, сохраняем редирект на рут.
    //     //     return this.router.navigate(['/', 'login']);
    //     // }
    // }

    // public getTokenRequest(tokenData, isCourier?: boolean): Observable<any> {
    //   const SCOPES_COURIER = 'api_permission openid userInfo offline_access';
    //
    //   const headers = new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     Authorization: isCourier ? 'Basic Y291cmllcl9hcHA6QWx3MDVMQzY3VWc0clA3ZQ==' : 'Basic ZXh0ZW5kZWRfanM6c2VjcmV0',
    //   });
    //   return this.http
    //     .post(`${environment.urls.identityServerUrl}/connect/token`, `${tokenData}&scope=${encodeURIComponent(isCourier ? SCOPES_COURIER : environment.tokenScopes)}`, {
    //       withCredentials: true,
    //       headers,
    //     })
    //     .pipe(timeout(2000), retry(3));
    // }

    // public loadEPermissions(): Observable<any> {
    //   const headers = new HttpHeaders({
    //     Authorization: `${this.user.token_type} ${this.user.access_token}`,
    //   });
    //   return this.http.get(`${environment.urls.permissionsApi}/v1/employee?id=${this.user.employee_id}`, {headers}).pipe(
    //     map((permissions: any) => {
    //       if (localStorage.getItem('another-employee')) {
    //         permissions = JSON.parse(localStorage.getItem('another-employee'));
    //         permissions.do_permissions = permissions.do_permissions.map((i) => i.do);
    //       }
    //       return permissions;
    //     }),
    //     tap((permissions: any) => {
    //       this.epSubject.next(new EPermissions(permissions));
    //     }),
    //     flatMap(({permissions, offices}) => this.getCourierBanInfo().pipe(map(() => ({permissions, offices})))),
    //   );
    // }

    // public requestTokenUpdate(): Observable<any> {
    //   return this.getTokenRequest(`refresh_token=${this.user.refresh_token}&grant_type=refresh_token`, !!localStorage.getItem('actualPhone')).pipe(
    //     flatMap((tokenInfo) => this.updateSession(tokenInfo)),
    //     catchError(() => this.logout()),
    //   );
    // }

    // private redirectIfNeed() {
    //     const url = this.activatedRoute.snapshot.queryParamMap.get('redirectUrl');
    //     if (url) {
    //         // Получаем путь
    //         const redirectUrl = url.split('?')[0];
    //
    //         if (!url.split('?')[1]) {
    //             return this.router.navigate([redirectUrl]);
    //         }
    //
    //         const params = {};
    //         // Получаем строку с параметрами
    //         url
    //             .split('?')[1]
    //             // Преобразуем строку в массив из строк с параметрами
    //             .split('&')
    //             // Берем ключи и значения и заполняем пустой объект
    //             .map((elem) => {
    //                 params[elem.split('=')[0]] = elem.split('=')[1];
    //             });
    //         return this.router.navigate([redirectUrl], {queryParams: params});
    //     } else {
    //         return this.router.navigate(['']);
    //     }
    // }

    // private clearSession() {
    //     localStorage.removeItem('isCourier');
    //     localStorage.removeItem('actualPhone');
    //     // localStorage.removeItem(SESSION_STORAGE_KEYS.refreshToken);
    //     this.userSubject.next({} as User);
    // }
    //

    // private updateSession(tokenInfo: any) {
    //   this.updateLocalToken(tokenInfo);
    //
    //   return this.loadEPermissions().pipe(
    //     tap(() => this.userSubject.next(this.user)),
    //     // retryWhen((errors) => errors.pipe(delay(10000), take(3))),
    //   );
    // }

    // private updateLocalToken(tokenInfo) {
    //     if (+this.user.employee_id <= 0) {
    //         this.clearSession();
    //         return;
    //     }
    //     Object.assign(this.user, tokenInfo);
    //     Object.assign(this.user, this.getDecodedAccessToken(tokenInfo.access_token));
    //
    //     // Сохраняем настоящий айдишник (для заходов под кем-то)
    //     this.user.family_name = this.user.family_name || this.user.name;
    //
    //     if (localStorage.getItem('another-employee')) {
    //         this.user.id = JSON.parse(localStorage.getItem('another-employee')).employee_id;
    //         this.user.family_name = JSON.parse(localStorage.getItem('another-employee')).family_name;
    //     }
    //
    //     this.user.employee_id = +this.user.id;
    //     // localStorage.setItem(SESSION_STORAGE_KEYS.refreshToken, tokenInfo.refresh_token);
    //
    //     /**
    //      * Начиная с 80 версии хрома, у браузера меняется политика отношения к кукам у которых нет атрибута sameSite.
    //      * Для того, чтобы вернуться к legacy-режиму необходимо выставить атрибуты secure: true и sameSite: 'None'
    //      */
    //     // this.cookieService.set('Authorization', `Bearer ${tokenInfo.access_token}`, null, '/', '.wildberries.ru', true, 'None');
    // }

    private getDecodedAccessToken(token: string): any {
        try {
            // return jwt_decode(token);
        } catch (error) {
            return null;
        }
    }
}
