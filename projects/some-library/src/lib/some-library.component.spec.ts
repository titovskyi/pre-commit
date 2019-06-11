import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SomeLibraryComponent } from "./some-library.component";

describe("SomeLibraryComponent", () => {
    let component: SomeLibraryComponent;
    let fixture: ComponentFixture<SomeLibraryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SomeLibraryComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SomeLibraryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
