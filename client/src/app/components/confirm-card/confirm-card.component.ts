import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';

@Component({
  selector: 'app-confirm-card',
  templateUrl: './confirm-card.component.html',
  styleUrls: ['./confirm-card.component.scss']
})
export class ConfirmCardComponent implements OnInit {
public close = true;
public show = false;
  onClose() {
    this.dialog.close(this.close);
  }

  onOpen() {
    this.dialog.close(this.close = false);
  }
  onshow(){
    this.show = !this.show;
  }

  constructor(public config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit(): void {
  }

}
