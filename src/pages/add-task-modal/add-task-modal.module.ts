import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTaskModalPage } from './add-task-modal';

@NgModule({
  declarations: [
    AddTaskModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTaskModalPage),
  ],
  exports: [
    AddTaskModalPage
  ]
})
export class AddTaskModalPageModule {}
