import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { TodosPage } from '../pages/todos/todos';
import { ListsPage } from '../pages/lists/lists';
import { AddTaskModalPage } from "../pages/add-task-modal/add-task-modal"
import { TodoServiceProvider } from '../shared/todo-service';
import { PrioritizedTodosPipe } from '../pipes/prioritized-todos';
import { DoneTodosPipe } from '../pipes/done-todos';

@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    ListsPage,
    AddTaskModalPage,
    PrioritizedTodosPipe,
    DoneTodosPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodosPage,
    ListsPage,
    AddTaskModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoServiceProvider
  ]
})
export class AppModule {}
