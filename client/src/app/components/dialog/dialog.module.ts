import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { InsertionDirective } from './insertion.directive';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [DialogComponent, InsertionDirective],
  imports: [
    CommonModule
  ],
  exports: [
    DialogComponent
  ],
  entryComponents: [DialogComponent]
})
export class DialogModule { }
