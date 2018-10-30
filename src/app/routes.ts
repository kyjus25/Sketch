import {Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {CanvasComponent} from './canvas/canvas.component';

export const appRoutes
: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: 'canvas', component: CanvasComponent},
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
    {path: '**', redirectTo: 'landing', pathMatch: 'full'},
];
