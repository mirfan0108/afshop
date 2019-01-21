import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloIonicPage } from './hello-ionic';
import { ShopingPage } from '../shoping/shoping';

@NgModule({
  declarations: [
    HelloIonicPage
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ShopingPage
  ]
})
export class HelloIonicPageModule {

}
