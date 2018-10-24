import { Routes } from '@angular/router';
import { ErrorComponent, HomeComponent } from './root';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
