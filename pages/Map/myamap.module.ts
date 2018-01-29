import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FYMyamap } from './myamap';

@NgModule({
  declarations: [
    FYMyamap,
  ],
  imports: [
    IonicPageModule.forChild(FYMyamap),
  ],
})
export class FYMyamapModule {}