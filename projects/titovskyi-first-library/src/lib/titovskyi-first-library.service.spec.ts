import { TestBed } from "@angular/core/testing";

import { TitovskyiFirstLibraryService } from "./titovskyi-first-library.service";

describe("TitovskyiFirstLibraryService", () => {
    beforeEach(() =>
        TestBed.configureTestingModule(
            {},
        ),
    );

    it("should be created", () => {
        const service: TitovskyiFirstLibraryService = TestBed.get(
            TitovskyiFirstLibraryService,
        );
        expect(service).toBeTruthy();
    });
});
