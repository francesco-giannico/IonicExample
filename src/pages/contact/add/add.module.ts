import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddContact } from "./add";


@NgModule({
  declarations: [
    AddContact,
  ],
  imports: [
    IonicPageModule.forChild(AddContact),
  ],
  exports: [
    AddContact
  ]
})
export class AddContactModule {}
