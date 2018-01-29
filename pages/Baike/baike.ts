import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Slide } from 'ionic-angular/components/slides/slide';
import { Slides } from 'ionic-angular/components/slides/slides';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { yBaikePageD } from './yBaikeD';

@IonicPage()
@Component({
  selector: 'page-baike',
  templateUrl: 'baike.html'
})
export class FYBaike {
  sBK: any;
  gBk: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    this.gBk = localStorage.getItem('bkkey');
  }

  setBk(){
    localStorage.setItem('bkkey', this.sBK);
    //HomePage.call(localStorage.getItem('bkkey'));    //this.navCtrl.push(HomePage);
    this.navCtrl.push(yBaikePageD);
  }

  setBk1(gBk){
    localStorage.setItem('bkkey', this.gBk);
    this.navCtrl.push(yBaikePageD);
  }
}
