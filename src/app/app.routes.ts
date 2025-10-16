import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, pathMatch: 'full'},
    {path: 'terms', component: TermsComponent, pathMatch: 'full'},
    {path: 'privacy', component: PrivacyComponent, pathMatch: 'full'},
    {path: '**', component: HomeComponent, pathMatch: 'full'}
];
