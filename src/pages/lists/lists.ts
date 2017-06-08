import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TodosPage } from '../todos/todos';

import { ListServiceProvider } from '../../shared/list-service';

/**
 * Generated class for the ListsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public listsService:ListServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  goToList(){
    this.navCtrl.push(TodosPage);
  }

  addNewList(name:string){
    this.listsService.addList(name);
  }

  showAddList(){
    let addListAlert = this.alertCtrl.create({
      title: 'New List',
      message: 'Give a name to the new list',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data =>{}
        },
        {
          text: 'Add',
          handler: data =>{
            this.addNewList(data.name);
          }
        }

      ]
    });
    addListAlert.present();
  }

}
