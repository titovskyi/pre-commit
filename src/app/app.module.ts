import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SomeLibraryModule } from "../../projects/some-library/src/lib/some-library.module";
import { TitovskyiFirstLibraryModule } from "titovskyi-first-library";
import { AppDirective } from "./app.directive";

@NgModule({
    declarations: [AppComponent, AppDirective],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        SomeLibraryModule,
        TitovskyiFirstLibraryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
