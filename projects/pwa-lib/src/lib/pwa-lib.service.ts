import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BehaviorSubject } from 'rxjs';
import { PwaPromptComponent } from './pwa-prompt/pwa-prompt.component';

@Injectable({
    providedIn: 'root'
})
export class PwaService {
    protected promptEvent: any;
    protected pwaAvailable = new BehaviorSubject<boolean>(false);

    get IsPWAAvailable(){
        return this.pwaAvailable.asObservable();
    }

    constructor(
        private bottomSheet: MatBottomSheet,
        private platform: Platform
    ) { }

    public initPwaPrompt() {
        if (!this.platform.IOS) {
            window.addEventListener('beforeinstallprompt', (event: any) => {
                event.preventDefault();
                this.promptEvent = event;
                this.pwaAvailable.next(true);
            });
        }
    }

    public AskUserToInstallPWA(){
        if(this.platform.IOS){
            this.OpenPromptComponent('ios');
        }
        else if(this.platform.ANDROID){
            this.OpenPromptComponent('android');
        }
    }

    protected OpenPromptComponent(mobileType: 'ios' | 'android') {
        this.bottomSheet.open(PwaPromptComponent, { 
            data: { mobileType, promptEvent: this.promptEvent } 
        })
    }
}
