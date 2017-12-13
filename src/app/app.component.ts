import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd } from '@angular/router';
import { MatDrawer } from '@angular/material';
import { AppToolbarService, MenuItem } from './app-toolbar/app-toolbar.service';

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    appName = 'NG-Shell';
    isDarkTheme = true;
    userName = 'rbrea';
    mainMenuItems;
    activeMenuItem$: Observable<MenuItem>;
    @ViewChildren("drawer") drawer: QueryList<MatDrawer>;

    constructor(private router: Router, private toolbarService: AppToolbarService) {
        this.mainMenuItems = this.toolbarService.getMenuItems();
        this.activeMenuItem$ = this.toolbarService.activeMenuItem$;

        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    
                    this.drawer.first.close();
                }
            });
    }

    ngAfterViewInit() {

    }
}