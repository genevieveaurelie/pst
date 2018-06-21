import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
/**
 * Generated class for the ListEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-events',
  templateUrl: 'list-events.html',
})
export class ListEventsPage {

  
  incident;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public afd : AngularFireDatabase) {

  }

 
  addData(){
    this.afd.list('Incident rencontré/').push(this.incident)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListEventsPage');
  }

}
