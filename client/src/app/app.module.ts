import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { ClientsModule } from './pages/clients/clients.module';
import { OrdersModule } from './pages/orders/orders.module';
import { DialogModule } from './components/dialog/dialog.module';
import { OrderCardModule } from './components/order-card/order-card.module';
import { ConfirmCardModule } from './components/confirm-card/confirm-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    ClientsModule,
    OrdersModule,
    DialogModule,
    OrderCardModule,
    ConfirmCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
