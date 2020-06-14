import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {AuthGuard} from "~/app/core/auth/auth.guard";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: "login",
        loadChildren: () => import("~/app/auth/login.module").then((m) => m.LoginModule)
    },
    {
        path: "home",
        loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {
}
