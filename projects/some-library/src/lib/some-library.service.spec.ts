import { TestBed } from "@angular/core/testing";

import { SomeLibraryService } from "./some-library.service";

describe("SomeLibraryService", () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it("should be created", () => {
        const service: SomeLibraryService = TestBed.get(SomeLibraryService);
        expect(service).toBeTruthy();
    });
});
