"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.collection = null;
        this.variable = true;
        this.someVar = "";
        this.someObj = { a: 1 };
        // ########################################
        this.someMoreObj = { a: 2 };
        this.collection = [{ id: 1 }, { id: 2 }, { id: 3 }];
    }
    // ########################################
    AppComponent.prototype.ngOnInit = function () {
        var someNumber = 1 + 1;
        var obj = [{ a: 11 }, { a: 22 }, { a: 14 }, { a: 14 }, { a: 14 }];
        var oneMreObj = {
            "some-var": "sss",
            some: "asds"
        };
        if (obj) {
            var newObj = obj.find(function (item) { return item.a === 11; });
            return true;
        }
        else {
            console.log("sss");
        }
        // ########################################
        if (obj[0].a === "sss") {
            var newObj = obj.find(function (item) { return item.a === 11; });
        }
        switch ("sss") {
            case "sss":
                var newObj = obj.find(function (item) { return item.a === 11; });
                break;
        }
    };
    AppComponent.prototype.firstMethod = function (some, some2) {
        var obj = [{ a: 11 }, { a: 22 }, { a: 14 }, { a: 14 }, { a: 14 }];
        if (obj) {
            return;
        }
        else {
            return;
        }
    };
    AppComponent.prototype.getItems = function () {
        this.collection = this.getItemsFromServer();
    };
    AppComponent.prototype.getItemsFromServer = function () {
        return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    };
    AppComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.scss"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// "typedef": [
//     true,
//     "call-signature",
//     "arrow-call-signature",
//     "parameter",
//     "arrow-parameter",
//     "property-declaration",
//     "variable-declaration",
//     "member-variable-declaration",
//     "object-destructuring",
//     "array-destructuring"
//   ],
