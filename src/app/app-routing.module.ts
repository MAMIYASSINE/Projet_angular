import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AddprodcutsComponent } from './products/addprodcuts/addprodcuts.component';
import { ListprodcutsComponent } from './products/listprodcuts/listprodcuts.component';
import { EditprodcutsComponent } from './products/editprodcuts/editprodcuts.component';
import { DeleteprodcutsComponent } from './products/deleteprodcuts/deleteprodcuts.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'',component:MenuComponent,children:[
    {path:'products',component:ListprodcutsComponent},
    {path:'products/addproducts',component:AddprodcutsComponent},
    {path:'products/editproducts/:id',component:EditprodcutsComponent},
    {path:'products/deleteproducts/:id',component:DeleteprodcutsComponent},
    {path:'',component:IndexComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
