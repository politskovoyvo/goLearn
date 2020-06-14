import {Injectable} from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import {CanActivate} from "@angular/router";
import {AuthService} from "~/app/core/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private routerExtensions: RouterExtensions,
                private auth: AuthService
    ) {
    }

    canActivate() {
        if (!this.auth.user.refresh_token) {
            this.routerExtensions.navigate(['/login']);
            return false;
        }
        return true;
    }
}
