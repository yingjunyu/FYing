import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';  

@IonicPage()
@Component({
  selector: 'page-yContent',
  templateUrl: 'yContent.html'
})
export class yContentPage {
  dContentItem : any;
  dContentTitle : any;

  constructor(public navCtrl: NavController, public params:NavParams, private sanitizer: DomSanitizer) {
    this.dContentItem = this.sanitizer.bypassSecurityTrustResourceUrl(params.get('iContent')); 
    this.dContentTitle = params.get('iTitle'); 
    //console.log(this.dContentItem);
  }

}
