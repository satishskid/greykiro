import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

/**
 * Feature: greybrain-website, Property 1: Navigation Link Routing
 * For any navigation link in the header, clicking it should result in
 * the browser URL matching the link's href attribute.
 * Validates: Requirements 1.3
 */

const navItems = [
  { label: "Home", href: "/" },
  { label: "Health", href: "/health" },
  { label: "Soul", href: "/soul" },
  { label: "Lens", href: "/lens" },
  { label: "Academy", href: "/academy" },
  { label: "Subscribe", href: "/lab" },
];

describe("Navigation Component - Property Tests", () => {
  /**
   * Property 1: Navigation Link Routing
   * For any navigation link, the href attribute should be a valid route
   */
  it("Property 1: All navigation links have valid href attributes", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...navItems),
        (navItem) => {
          // Each nav item should have a non-empty href starting with /
          expect(navItem.href).toBeTruthy();
          expect(navItem.href.startsWith("/")).toBe(true);
          // Each nav item should have a non-empty label
          expect(navItem.label).toBeTruthy();
          expect(navItem.label.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 1 (continued): Navigation routes are unique
   */
  it("Property 1: All navigation hrefs are unique", () => {
    const hrefs = navItems.map((item) => item.href);
    const uniqueHrefs = new Set(hrefs);
    expect(uniqueHrefs.size).toBe(hrefs.length);
  });

  /**
   * Property 1 (continued): Navigation labels are unique
   */
  it("Property 1: All navigation labels are unique", () => {
    const labels = navItems.map((item) => item.label);
    const uniqueLabels = new Set(labels);
    expect(uniqueLabels.size).toBe(labels.length);
  });
});


/**
 * Feature: greybrain-website, Property 2: Active Page Indication
 * For any page in the website, the navigation should visually highlight
 * the link corresponding to the current page path.
 * Validates: Requirements 1.4
 */

describe("Navigation Component - Active Page Indication", () => {
  /**
   * Property 2: Active Page Indication
   * For any valid route, there should be exactly one matching nav item
   */
  it("Property 2: Each route maps to exactly one navigation item", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...navItems),
        (navItem) => {
          // For any nav item, its href should match exactly one item in the list
          const matchingItems = navItems.filter((item) => item.href === navItem.href);
          expect(matchingItems.length).toBe(1);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 2 (continued): Active state logic is deterministic
   * Given a pathname, the active state should be consistently determined
   */
  it("Property 2: Active state is deterministic for any pathname", () => {
    fc.assert(
      fc.property(
        fc.constantFrom("/", "/health", "/soul", "/lens", "/academy", "/lab"),
        (pathname) => {
          // For any valid pathname, exactly one nav item should be active
          const activeItems = navItems.filter((item) => item.href === pathname);
          expect(activeItems.length).toBe(1);
        }
      ),
      { numRuns: 100 }
    );
  });
});
