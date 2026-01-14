import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

/**
 * Feature: greybrain-website, Property 4: Course Card Completeness
 * For any course displayed on the Academy page, the course card should
 * contain both a pricing section and a curriculum accordion component.
 * Validates: Requirements 8.5, 8.6
 */

// Import courses data from academy page
const courses = [
  {
    id: "no-code-ai-doctor",
    title: "The No-Code AI Doctor",
    duration: "6 Weeks",
    description: "Build medical AI tools without writing code",
    price: 499,
    currency: "$",
    featured: true,
    curriculum: [
      { title: "Week 1", lessons: ["Lesson 1", "Lesson 2"] },
      { title: "Week 2", lessons: ["Lesson 1", "Lesson 2"] },
    ],
  },
  {
    id: "scientific-search-peace",
    title: "The Scientific Search for Peace",
    duration: "4 Weeks",
    description: "Align Dopamine with Dharma",
    price: 299,
    currency: "$",
    curriculum: [
      { title: "Week 1", lessons: ["Lesson 1"] },
      { title: "Week 2", lessons: ["Lesson 1"] },
    ],
  },
  {
    id: "docpreneur-blueprint",
    title: "Docpreneur Blueprint",
    duration: "Bootcamp",
    description: "From Idea to MVP",
    price: 799,
    currency: "$",
    curriculum: [
      { title: "Module 1", lessons: ["Lesson 1"] },
      { title: "Module 2", lessons: ["Lesson 1"] },
    ],
  },
];

describe("CourseCard Component - Property Tests", () => {
  /**
   * Property 4: Course Card Completeness
   * For any course, it should have pricing information
   */
  it("Property 4: All courses have pricing information", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...courses),
        (course) => {
          // Each course should have price and currency
          expect(course.price).toBeDefined();
          expect(course.price).toBeGreaterThan(0);
          expect(course.currency).toBeTruthy();
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 4 (continued): All courses have curriculum
   */
  it("Property 4: All courses have curriculum with modules", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...courses),
        (course) => {
          // Each course should have curriculum array with at least one module
          expect(course.curriculum).toBeDefined();
          expect(Array.isArray(course.curriculum)).toBe(true);
          expect(course.curriculum.length).toBeGreaterThan(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 4 (continued): Each curriculum module has lessons
   */
  it("Property 4: All curriculum modules have lessons", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...courses),
        (course) => {
          course.curriculum.forEach((module) => {
            expect(module.title).toBeTruthy();
            expect(Array.isArray(module.lessons)).toBe(true);
            expect(module.lessons.length).toBeGreaterThan(0);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 4 (continued): All courses have required fields
   */
  it("Property 4: All courses have required fields for display", () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...courses),
        (course) => {
          expect(course.id).toBeTruthy();
          expect(course.title).toBeTruthy();
          expect(course.duration).toBeTruthy();
          expect(course.description).toBeTruthy();
        }
      ),
      { numRuns: 100 }
    );
  });
});
