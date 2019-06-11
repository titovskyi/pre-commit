import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { EventEmitter } from "events";

interface ObjectInterface {
    a: string | number;
    "some-var"?: string;
}

interface SomeInterface {
    bar(): {};
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    public collection: any = null;

    public variable: boolean = false;

    public someVar: string = "";

    public someObj: ObjectInterface = { a: 1 };

    // ########################################

    public someMoreObj: ObjectInterface = { a: 2 };

    constructor(service: AppService) {
        this.collection = [{ id: 1 }, { id: 2 }, { id: 3 }];
    }

    // ########################################
    public ngOnInit(): any {
        const someNumber: number = 1 + 1;

        let obj: any[] = [{ a: 22 }, { a: 14 }, { a: 14 }, { a: 14 }];

        const oneMreObj: any = {
            "some-var": "sss",
            some: "asds"
        };

        if (obj) {
            return true;
        } else {
            console.log("sss");
        }

        // ########################################
        switch ("sss") {
            case "sss":
                break;
        }
    }

    public firstMethod(some: string, some2: string): ObjectInterface[] {
        const obj: { a: number }[] = [{ a: 11 }, { a: 22 }, { a: 14 }, { a: 14 }, { a: 14 }];
        if (obj) {
            return obj;
        } else {
            return obj;
        }
    }

    public getItems(): void {
        this.collection = this.getItemsFromServer();
    }

    public getItemsFromServer(): any {
        return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    }

    public trackByFn(index: number, item: any): number {
        return index;
    }

    public someMethod() {
        console.log("sss");
    }
}
