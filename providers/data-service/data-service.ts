import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  newsUrl : String;
  regUrl : any;
  baseUrl: String;

  constructor(public http: Http) {
    //console.log('Hello YNewsData Provider');
    this.http = http;
    //this.newsUrl = "http://toutiao.com/search_content/?offset=0&format=json&keyword=";
    this.newsUrl = "http://c.m.163.com/nc/article/headline/";
    this.regUrl = "http://news.baidu.com/ns?word=%E5%86%9B%E4%BA%8B&tn=news&from=news&cl=2&rn=20&ct=1";
    this.baseUrl = 'http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_length=600&bk_key=';

  }

  getNews(keyWord){
    console.log(this.newsUrl + keyWord + "/0-20.html");
    return this.http.get(this.newsUrl + keyWord + "/0-20.html").map(res => res.json());
  }

  getTest(){
    console.log(this.regUrl);
    return this.http.get(this.regUrl).map(res => res.text());
  }

  getBk(bkkey){
    return this.http.get(this.baseUrl + bkkey).map(res => res.json());
  }

}
