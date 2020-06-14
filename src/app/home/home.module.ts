import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptCommonModule} from "nativescript-angular/common";
import {NativeScriptFormsModule} from "nativescript-angular/forms";

import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NativeScriptUICalendarModule} from "nativescript-ui-calendar/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        CommonModule,
        NativeScriptUICalendarModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {
}
