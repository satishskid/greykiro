import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { faculties } from "./FeatureGrid";

/**
 * Feature: greybrain-website, Property 3: Faculty Card Navigation
 * For any faculty card in the feature grid, clicking it should navigate
 * to the corresponding faculty page (/health, /soul, or /lens).
 * Validates: Requirements 3.5
 */

const validFacultyRoutes = ["/health", "/soul", "/lens"];

describe("FeatureGrid Component - Property Tests", () => {
  /**
   * Property 3: Faculty Card Navigation
   * For any faculty card, the href should be a valid faculty route
   */
  it("Property 3: All faculty cards have valid href routes", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...faculties),
        (faculty) => {
          // Each faculty href should be one of the valid faculty routes
          expect(validFacultyRoutes).toContain(faculty.href);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 3 (continued): Faculty card hrefs are unique
   */
  it("Property 3: All faculty card hrefs are unique", () => {
    const hrefs = faculties.map((faculty) => faculty.href);
    const uniqueHrefs = new Set(hrefs);
    expect(uniqueHrefs.size).toBe(hrefs.length);
  });

  /**
   * Property 3 (continued): Each faculty card has required properties
   */
  it("Property 3: All faculty cards have required properties", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...faculties),
        (faculty) => {
          // Each faculty should have id, title, description, href, and color
          expect(faculty.id).toBeTruthy();
          expect(faculty.title).toBeTruthy();
          expect(faculty.description).toBeTruthy();
          expect(faculty.href).toBeTruthy();
          expect(["blue", "gold"]).toContain(faculty.color);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 3 (continued): Faculty card titles match expected format
   */
  it("Property 3: All faculty card titles start with 'GreyBrain'", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...faculties),
        (faculty) => {
          expect(faculty.title.startsWith("GreyBrain")).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });
});
