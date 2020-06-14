import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "~/app/core/auth/auth.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [AuthService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
