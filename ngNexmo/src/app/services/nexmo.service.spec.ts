import {TestBed, inject} from '@angular/core/testing';

import {NexmoService} from './nexmo.service';
import {HttpModule} from "@angular/http";

describe('NexmoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NexmoService],
            imports: [HttpModule]
        });
    });

    it('should ...', inject([NexmoService], (service: NexmoService) => {
        expect(service).toBeTruthy();
    }));
});
