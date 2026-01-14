import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { facultyCards } from "./FeatureGrid";

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
        fc.constantFrom(...facultyCards),
        (card) => {
          // Each card href should be one of the valid faculty routes
          expect(validFacultyRoutes).toContain(card.href);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 3 (continued): Faculty card hrefs are unique
   */
  it("Property 3: All faculty card hrefs are unique", () => {
    const hrefs = facultyCards.map((card) => card.href);
    const uniqueHrefs = new Set(hrefs);
    expect(uniqueHrefs.size).toBe(hrefs.length);
  });

  /**
   * Property 3 (continued): Each faculty card has required properties
   */
  it("Property 3: All faculty cards have required properties", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...facultyCards),
        (card) => {
          // Each card should have id, title, description, href, and accentColor
          expect(card.id).toBeTruthy();
          expect(card.title).toBeTruthy();
          expect(card.description).toBeTruthy();
          expect(card.href).toBeTruthy();
          expect(["blue", "gold"]).toContain(card.accentColor);
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
        fc.constantFrom(...facultyCards),
        (card) => {
          expect(card.title.startsWith("GreyBrain")).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });
});
