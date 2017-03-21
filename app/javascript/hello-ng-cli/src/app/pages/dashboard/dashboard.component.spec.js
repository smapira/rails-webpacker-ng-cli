"use strict";
exports.__esModule = true;
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var dashboard_component_1 = require("./dashboard.component");
describe('DashboardComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dashboard_component_1.DashboardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dashboard_component_1.DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
