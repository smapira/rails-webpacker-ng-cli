"use strict";
exports.__esModule = true;
var router_1 = require("@angular/router");
exports.appRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes, { useHash: true });
