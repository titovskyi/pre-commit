import { NgModule } from "@angular/core";
import { SomeLibraryComponent } from "./some-library.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [SomeLibraryComponent],
    imports: [CommonModule],
    exports: [SomeLibraryComponent],
})
export class SomeLibraryModule {}
