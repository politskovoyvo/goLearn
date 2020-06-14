import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {NativeScriptFormsModule} from "nativescript-angular/forms";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "~/app/auth/login/login.component";
import {LoginRoutingModule} from "~/app/auth/login-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NativeScriptFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule {
}
