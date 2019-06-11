import { Component, OnInit } from "@angular/core";

@Component({
    selector: "lib-some-library",
    templateUrl: "some-library.component.html",
    styleUrls: ["some-library.component.scss"],
})
export class SomeLibraryComponent implements OnInit {
    public variable: boolean = true;

    // ########################################

    constructor() {}

    public ngOnInit(): void {
        console.log("ddd");
        const obj: any = [{ a: 11 }, { b: "22" }, { c: 14 }, { c: 14 }, { c: 14 }];
    }

    public someFunction(some: any): void {}
}
