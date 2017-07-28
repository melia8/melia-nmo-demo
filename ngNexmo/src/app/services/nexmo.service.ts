import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise";

import {Http} from "@angular/http";
import {NUMBER_TO_TEXT, SERVER_URL} from "../config-consts";

@Injectable()
export class NexmoService {

    //private serverUrl = "http://localhost:8080";
    private serverUrl = SERVER_URL;
    private numberToText = NUMBER_TO_TEXT;

    constructor(private http: Http) {
    }

    getMessageId(): Observable<number> {
        let url = this.serverUrl + "/getLastMsgId"
        return this.http.get(url).map(i => i.json())
    }

    getMessage(): Observable<any> {
        let url = this.serverUrl + "/getMsg"
        return this.http.get(url).map(i => i.json())
    }

    sendMessage(txt: string): Observable<any> {
        let url = this.serverUrl + "/send?number="+this.numberToText+"&msg="+txt;
       // let search = new URLSearchParams();
       // search.set("number","447703415105");
       // search.set("msg",txt);
        return this.http.get(url).map(i => i.text())
    }

}
