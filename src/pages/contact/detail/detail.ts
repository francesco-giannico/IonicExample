import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from "../../../models/person";


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class Detail {
  private contact:Person;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.contact= new Person(this.navParams.get('name'),this.navParams.get('surname'), this.navParams.get('email'));
  
}


}
