import { NgModule } from '@angular/core';
import { PwaPromptComponent } from './pwa-prompt/pwa-prompt.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';



@NgModule({
    declarations: [
        PwaPromptComponent
    ],
    imports: [
        MatToolbarModule, 
        MatButtonModule, 
        MatIconModule, 
        MatBottomSheetModule
    ],
    exports: [
        PwaPromptComponent
    ]
})
export class PwaLibModule { }
