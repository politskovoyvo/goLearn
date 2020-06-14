import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {User} from "~/app/core/auth/user";
import {RouterExtensions} from "nativescript-angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "~/app/core/auth/auth.service";

@Component({
    selector: "Login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
    @ViewChild('context', {static: false}) templateHtml: ElementRef;
    user: User;
    form: FormGroup;
    errors: string[] = [];

    constructor(private fb: FormBuilder,
                private routerExtensions: RouterExtensions,
                private auth: AuthService
    ) {
    }

    ngOnInit(): void {
        this.createForm();
    }

    private createForm() {
        this.form = this.fb.group({
            email: ['admin', [Validators.required]],
            password: ['admin', [Validators.required]]
        })
    }

    onSubmit() {
        if (this.form.valid) {
            this.auth.loginUser(
                this.form.get('email').value,
                this.form.get('password').value,
            );
            this.routerExtensions.navigate(['/home']);
        }
        this.errors = this.form.get('email').value;
    }
}
