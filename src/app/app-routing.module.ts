import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from "./app-home/app-home.component";
import { AppAboutComponent } from "./app-about/app-about.component";
const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: AppHomeComponent, data: {
            title: 'Home'
        }
    },
    {
        path: 'about', component: AppAboutComponent, data: {
            title: 'About'
        }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
