import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { DialogService } from 'src/app/components/dialog/dialog.service';
import { ClientsComponent } from '../clients/clients.component';
import { ConfirmCardComponent } from 'src/app/components/confirm-card/confirm-card.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  formOrder = this.fb.group(
    {
      orderName: ['', Validators.compose([Validators.required])],
      stage: ['', Validators.compose([Validators.required])],
      totalcost: ['', Validators.compose([Validators.required])],
    }
  );
  public add = false;
  public edit = false;
  public position: number;

  public data = [
    {
    orderName: 'test',
    stage: 'active',
    totalcost: '£305',
  },
  {
    orderName: 'test2',
    stage: 'active',
    totalcost: '£305',
  },
  {
    orderName: 'test3',
    stage: 'inProgress',
    totalcost: '£305',
  }
]


  constructor(private fb: FormBuilder, public dialog: DialogService) {
   }

  myfunction(){
    const {orderName, stage, totalcost} = this.formOrder.value;
    const body = {
      orderName: orderName,
      stage: stage,
      totalcost: totalcost,
    }
    this.data.push(body)
      }

      addOrder(){
        this.add = !this.add;
      }
      editOrder(i){
        this.add = false;
        this.position =null;
        this.edit = !this.edit
        this.position = i;
        this.formOrder.setValue(this.data[this.position])


      }
      editOrderSubmit(i){
        this.edit = !this.edit;
        const {orderName, stage, totalcost} = this.formOrder.value;
        const body = {
          orderName: orderName,
          stage: stage,
          totalcost: totalcost,
        }
        this.data.splice(i, 1, body )
        

      }


 

  onEdit(i){
    this.data[i].orderName
    const ref = this.dialog.open(ConfirmCardComponent,{
      data: { cancelText: 'exit', okText: 'ok', text: this.data[i].orderName}
    
    });
    ref.afterClosed.subscribe(result => {
      console.log(result,' this is the dialog respons')
    })
  }


  ngOnInit(): void {
  }

}
