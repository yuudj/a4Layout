import {
  Component,
  ChangeDetectorRef,
  OnInit,
  OnDestroy} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy  {
  title = 'Material PWA';
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: (event) => void;
  // @Output() toggleSideNav = new EventEmitter();

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = (event) => {

      changeDetectorRef.detectChanges();
      console.log(event.matches ? 'match' : 'no match');
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
