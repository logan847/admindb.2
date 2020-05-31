import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogModule } from 'src/app/components/dialog/dialog.module';



@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule
  ],
  exports:[OrdersComponent]
})
export class OrdersModule { }
