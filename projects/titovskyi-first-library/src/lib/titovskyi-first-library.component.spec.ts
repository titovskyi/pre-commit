import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TitovskyiFirstLibraryComponent } from "./titovskyi-first-library.component";

describe("TitovskyiFirstLibraryComponent", () => {
    let component: TitovskyiFirstLibraryComponent;
    let fixture: ComponentFixture<TitovskyiFirstLibraryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TitovskyiFirstLibraryComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TitovskyiFirstLibraryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
