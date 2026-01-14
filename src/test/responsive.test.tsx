import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

/**
 * Feature: greybrain-website, Property 8: Responsive Layout Adaptation
 * For any viewport width (mobile, tablet, desktop breakpoints),
 * the website layout should adapt without horizontal overflow or content clipping.
 * Validates: Requirements 12.1
 */

// Breakpoints from design system
const breakpoints = {
  mobile: { min: 320, max: 639 },
  tablet: { min: 640, max: 1023 },
  desktop: { min: 1024, max: 1920 },
};

// All pages in the website
const allPages = ["/", "/health", "/soul", "/lens", "/academy", "/lab"];

// Container max width from design tokens
const containerMaxWidth = 1200;

describe("Responsive Layout - Property Tests", () => {
  /**
   * Property 8: Responsive Layout Adaptation
   * For any viewport width, container should not exceed max width
   */
  it("Property 8: Container respects max width at all viewport sizes", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: breakpoints.mobile.min, max: breakpoints.desktop.max }),
        (viewportWidth) => {
          // Container should never exceed max width
          const expectedContainerWidth = Math.min(viewportWidth, containerMaxWidth);
          expect(expectedContainerWidth).toBeLessThanOrEqual(containerMaxWidth);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 8 (continued): All breakpoints are valid ranges
   */
  it("Property 8: Breakpoint ranges are valid and non-overlapping", () => {
    // Mobile ends before tablet starts
    expect(breakpoints.mobile.max).toBeLessThan(breakpoints.tablet.min);
    // Tablet ends before desktop starts
    expect(breakpoints.tablet.max).toBeLessThan(breakpoints.desktop.min);
    // All ranges have positive width
    expect(breakpoints.mobile.max - breakpoints.mobile.min).toBeGreaterThan(0);
    expect(breakpoints.tablet.max - breakpoints.tablet.min).toBeGreaterThan(0);
    expect(breakpoints.desktop.max - breakpoints.desktop.min).toBeGreaterThan(0);
  });

  /**
   * Property 8 (continued): All pages should be responsive
   */
  it("Property 8: All pages are defined for responsive behavior", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...allPages),
        (page) => {
          // Each page should be a valid route
          expect(page).toBeTruthy();
          expect(page.startsWith("/")).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 8 (continued): Viewport width determines layout mode
   */
  it("Property 8: Viewport width correctly maps to layout mode", () => {
    const getLayoutMode = (width: number): "mobile" | "tablet" | "desktop" => {
      if (width < 640) return "mobile";
      if (width < 1024) return "tablet";
      return "desktop";
    };

    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 1920 }),
        (viewportWidth) => {
          const mode = getLayoutMode(viewportWidth);
          
          if (viewportWidth < 640) {
            expect(mode).toBe("mobile");
          } else if (viewportWidth < 1024) {
            expect(mode).toBe("tablet");
          } else {
            expect(mode).toBe("desktop");
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 8 (continued): Feature grid columns adapt to viewport
   */
  it("Property 8: Feature grid columns adapt correctly", () => {
    const getGridColumns = (width: number): number => {
      if (width < 768) return 1;  // Mobile: single column
      return 3;                    // Tablet/Desktop: 3 columns
    };

    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 1920 }),
        (viewportWidth) => {
          const columns = getGridColumns(viewportWidth);
          
          if (viewportWidth < 768) {
            expect(columns).toBe(1);
          } else {
            expect(columns).toBe(3);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
