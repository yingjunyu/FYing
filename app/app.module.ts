import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FYPics } from '../pages/Pics/pics';
import { FYAbout } from '../pages/About/about';
import { FYNews } from '../pages/News/news';
import { FYBaike } from '../pages/Baike/baike';
import { FYMyamap } from '../pages/Map/myamap';
import { TabsPage } from '../pages/tabs/tabs';
import { yContentPage } from '../pages/yContent/yContent';
import { yBaikePageD } from '../pages/Baike/yBaikeD';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { PicServiceProvider } from '../providers/pic-service/pic-service';
import { WetherServiceProvider } from '../providers/wether-service/wether-service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    FYPics,
    FYAbout,
    FYNews,
    FYBaike,
    FYMyamap,
    yContentPage,
    yBaikePageD,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FYPics,
    FYAbout,
    FYNews,
    FYBaike,
    FYMyamap,
    yContentPage,
    yBaikePageD,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataServiceProvider,
    PicServiceProvider,
    WetherServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
