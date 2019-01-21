import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shoping',
  templateUrl: 'shoping.html'
})
export class ShopingPage {
  stock:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stock="all";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopingPage');
  }

}
