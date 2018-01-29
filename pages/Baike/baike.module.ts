import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FYBaike } from './Baike';

@NgModule({
  declarations: [
    FYBaike,
  ],
  imports: [
    IonicPageModule.forChild(FYBaike),
  ],
})
export class FYBaikeModule {}