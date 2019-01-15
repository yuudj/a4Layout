import { 
  Component, 
  ChangeDetectorRef, 
  EventEmitter, 
  Output, 
  OnInit} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { Router, Route } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
  title = 'Material PWA';
  mobileQuery: MediaQueryList;
  nav = [
    {
      'title': 'Home',
      'path': '/',
      
    }
  ];
  private _mobileQueryListener: () => void;
  @Output() toggleSideNav = new EventEmitter();
  
  constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }
  ngOnInit() {
    this.printpath('', this.router.config);
  }
  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      let route = config[i];
      console.log(route.data.info ? route.data.info: 'naranja');
      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.path : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }
}