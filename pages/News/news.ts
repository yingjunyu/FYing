import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Slide } from 'ionic-angular/components/slides/slide';
import { Slides } from 'ionic-angular/components/slides/slides';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { yContentPage } from '../../pages/yContent/yContent';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class FYNews {
  @ViewChild(Slides) slides : Slides;
  vm: any = {
    selectedSegment: 's0'
  }
  iNews : any;
  yNews : any;
  dNews : any;
  iNewsArry : any;

  constructor(public navCtrl: NavController, private newsData:DataServiceProvider) {
    this.iNewsArry = ['T1348647853363','T1348648141035','T1348649580692','T1348649079062','T1348648756099','T1368497029546'];
    this.yNews = this.iNewsArry[0];
  }

  ngOnInit(){
    console.log("start...");
    this.newsData.getNews("T1348647853363").subscribe(response => {
      //console.log(response);
      this.iNews = response.T1348647853363;
    });
    this.newsData.getTest().subscribe(res => {
      //console.log(res);
      console.log(res.match(/<div class="result" /));
    });
  }

  getiNews(index){
    console.log(index);
    if(index == 0) this.yNews = 'T1348647853363';
    if(index == 1) this.yNews = 'T1348648141035';
    if(index == 2) this.yNews = 'T1348649580692';
    if(index == 3) this.yNews = 'T1348649079062';
    if(index == 4) this.yNews = 'T1348648756099';
    if(index == 5) this.yNews = 'T1368497029546';

    this.newsData.getNews(this.yNews).subscribe(response => {
      //console.log(response.data);
      //console.log(response.T1348647853363);
      switch(this.yNews){
        case "T1348647853363":
          return this.iNews = response.T1348647853363;
        case "T1348648141035":
          return this.iNews = response.T1348648141035;
        case "T1348649580692":
          return this.iNews = response.T1348649580692;
        case "T1348649079062":
          return this.iNews = response.T1348649079062;
        case "T1348648756099":
          return this.iNews = response.T1348648756099;
        case "T1368497029546":
          return this.iNews = response.T1368497029546;
      }
      
    });
  }

  /**
   * slide切换处理
   */
  onSlideDidChange() {
    let index: number = this.slides.getActiveIndex();
    //console.log(index);
    if(index >= 0 && index <=6){
      //由于索引直接用数字的话，内部方法有的转换为字符串，有的转为整型，避免不必要麻烦，所以用字符串处理
      this.vm.selectedSegment = "s" + index;
      this.getiNews(index);
    }
  }

  /**
   * segment点击切换slide滑动
   * @param index 索引
   */
  goToSlide(index: number) {
    if(this.vm.selectedSegment != 's' + index){
      this.slides.slideTo(index, 500);
      //this.getiNews(index);
    }
  }

  getDNews(iContent, iTitle){
    //console.log(dNews);
    this.navCtrl.push(yContentPage, {iContent: iContent, iTitle:"新闻"});
  }
}
