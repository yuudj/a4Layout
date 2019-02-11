import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { from } from 'rxjs/internal/observable/from';


@Component({
    selector: 'nkm-navigator',
    templateUrl    : './navigation.component.html',
    styleUrls      : ['./navigation.component.scss'],
    //encapsulation  : ViewEncapsulation.None,
    //changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavigationComponent implements OnInit {
    menu:any;

    constructor(private router: Router ) { 
      
    }

    ngOnInit() { 
        const source = from(this.router.config);

        this.menu =source.pipe(
            groupBy(person => person.data.group),
            // return each item in group as array
            mergeMap(group => group.pipe(toArray()))
          );
        
    }

    printpath(parent: String, config: Route[]) {
        for (let i = 0; i < config.length; i++) {
          const route = config[i];
          console.log(route.data.info ? route.data.info : 'naranja');
          if (route.children) {
            const currentPath = route.path ? parent + '/' + route.path : parent;
            this.printpath(currentPath, route.children);
          }
        }
      }
}