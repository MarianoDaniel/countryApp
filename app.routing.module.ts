import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/Pages/homePage/homePage.component';
import { AboutPageComponent } from './shared/Pages/aboutPage/aboutPage.component';
import { ContactPageComponent } from './shared/Pages/contactPage/contactPage.component';

const routes: Routes = [
/*     {
        path: '',
        component: HomePageComponent
    }, */

    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: 'countries',
        loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)
    },
    {
        path: '**',
        redirectTo: 'countries'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
