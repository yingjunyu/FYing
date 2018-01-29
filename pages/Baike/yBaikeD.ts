import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { yContentPage } from '../yContent/yContent';

@Component({
  selector: 'page-yBaikeD',
  templateUrl: 'yBaikeD.html'
})
export class yBaikePageD {

  habs: any;
  hkey: any;
  hurl: any;
  hcards: any; 
  

  constructor(public navCtrl: NavController, private BKData:DataServiceProvider) {

  }

  ngOnInit(){
    if(localStorage.getItem('bkkey') != null){
      this.getBk(localStorage.getItem('bkkey'))
    }else{
      this.getBk('湖北华中电力科技开发有限责任公司');
    }
  }

  getBk(bkkey){
    this.BKData.getBk(bkkey).subscribe(response => {
      this.habs = response.abstract;
      this.hkey = response.key;
      this.hurl = response.url;
      this.hcards = response.card;
      //console.log(this.hcards[0].value[0]);
      //console.log(response);
    });
  }

  getDBaike(iContent, iTitle){
    this.navCtrl.push(yContentPage, {iContent : iContent, iTitle:'百度百科'});
  }

}
