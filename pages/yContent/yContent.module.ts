import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { yContentPage } from './yContent';

@NgModule({
  declarations: [
    yContentPage,
  ],
  imports: [
    IonicPageModule.forChild(yContentPage)
  ],
  exports: [
    yContentPage
  ]
})
export class yContentPageModule { }