import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {MdChipsModule} from "@angular/material";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NexmoService} from "./services/nexmo.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";


describe('AppComponent', () => {

    let nexmoStub = {
        getMessageId: function () {
            return Observable.of({})
        },
        sendMessage: function (txt: string) {
            return Observable.of({})
        },
        getMessage: function () {
            return Observable.of({})
        }

    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                FormsModule,
                HttpModule,
                BrowserAnimationsModule,
                MdChipsModule
            ],
            providers: [{provide: NexmoService, useValue: nexmoStub}]

        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });


    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('SMS Chat!');
    });
});
