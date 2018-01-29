import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FYNews } from './News';

@NgModule({
  declarations: [
    FYNews,
  ],
  imports: [
    IonicPageModule.forChild(FYNews),
  ],
})
export class FYNewsModule {}