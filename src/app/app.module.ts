import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddprodcutsComponent } from './products/addprodcuts/addprodcuts.component';
import { ListprodcutsComponent } from './products/listprodcuts/listprodcuts.component';
import { EditprodcutsComponent } from './products/editprodcuts/editprodcuts.component';
import { DeleteprodcutsComponent } from './products/deleteprodcuts/deleteprodcuts.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddprodcutsComponent,
    ListprodcutsComponent,
    EditprodcutsComponent,
    DeleteprodcutsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
