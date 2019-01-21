import { Component} from '@angular/core';
import { ShopingPage } from '../shoping/shoping';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  pushPage: any;
  public rootPage:any = HelloIonicPage;
  constructor() {
    this.pushPage = ShopingPage;
  }
  
}
