import { Component } from '@angular/core';

import { FYPics } from '../Pics/pics';
import { FYAbout } from '../About/about';
import { FYNews } from '../News/news';
import { FYBaike } from '../Baike/baike';
import { FYMyamap } from '../Map/myamap';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FYNews;
  tab2Root = FYPics;
  tab3Root = FYBaike;
  tab4Root = FYMyamap;
  tab5Root = FYAbout;

  constructor() {

  }
}
