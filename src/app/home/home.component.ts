import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {Observable, of} from "rxjs";

export interface Translate
{
    id: number;
    origin: string;
    translate: string;
}

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
    items$: Observable<Translate[]>;
    currentDay: any;
    currentMonth: any;
    currentYear: any;
    calendarEvents: any;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.items$ = this.getFakeTranslateWords();
    }

    ngOnDestroy(): void {
    }

    private getFakeTranslateWords() {
        return of([
            {
                id: 11111,
                origin: 'Кто',
                translate: 'Who'
            },
            {
                id: 22222,
                origin: 'Почему',
                translate: 'Why'
            },
            {
                id: 33333,
                origin: 'Человек',
                translate: 'People'
            }
        ])
    }
}
