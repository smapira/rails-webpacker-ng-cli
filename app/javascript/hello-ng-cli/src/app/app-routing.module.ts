import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const appRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
            }
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
