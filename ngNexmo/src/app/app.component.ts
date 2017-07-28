import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {NexmoService} from "./services/nexmo.service";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/switchMap";

interface MyMessage {
    message: string;
    me: boolean;
    id: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'SMS Chat!';
    messageId = 0;
    messages: MyMessage[] = [];

    constructor(private nexmoService: NexmoService) {
        //set up a polling of the Boot back end every 5 seconds
        //TODO: change this to use SSE
        Observable.interval(5000).subscribe(() => {
            //check the id of the current message to see if we have already consumed it
            nexmoService.getMessageId().subscribe((n) => {
                console.log(n);
                if (n != this.messageId) {
                    //if not consumed, then consume
                    nexmoService.getMessage().subscribe((m) => {
                        console.log(m.message);
                        this.messageId = m.number;
                        this.messages.push({message: m.message, me: false, id: m.number});
                    });
                }
            });
        })
    }

    onEnter(box) {
        console.log(box.value);
        //get message from web user
        this.messages.push({message: box.value, me: true, id: this.messageId});
        //remove the input box and send to Boot API
        box.remove();
        this.nexmoService.sendMessage(box.value).subscribe((s) => console.log(s));
    }
}
