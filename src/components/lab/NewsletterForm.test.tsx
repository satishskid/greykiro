import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { validateEmail } from "./NewsletterForm";

/**
 * Feature: greybrain-website, Property 5: Valid Email Submission
 * For any string that matches a valid email format (contains @ and domain),
 * submitting the newsletter form should succeed without validation errors.
 * Validates: Requirements 9.4
 */

/**
 * Feature: greybrain-website, Property 6: Invalid Email Rejection
 * For any string that does not match a valid email format,
 * submitting the newsletter form should display a validation error message.
 * Validates: Requirements 9.5
 */

// Generator for valid email addresses
const validEmailArbitrary = fc.tuple(
  fc.stringMatching(/^[a-zA-Z][a-zA-Z0-9._-]{0,20}$/), // local part
  fc.stringMatching(/^[a-zA-Z][a-zA-Z0-9-]{0,10}$/),   // domain
  fc.constantFrom("com", "org", "net", "io", "ai", "co.uk", "edu")
).map(([local, domain, tld]) => `${local}@${domain}.${tld}`);

// Generator for invalid email addresses
const invalidEmailArbitrary = fc.oneof(
  fc.constant(""),                           // empty string
  fc.constant("   "),                        // whitespace only
  fc.stringMatching(/^[^@]+$/),              // no @ symbol
  fc.stringMatching(/^@[a-z]+\.[a-z]+$/),    // no local part
  fc.stringMatching(/^[a-z]+@$/),            // no domain
  fc.stringMatching(/^[a-z]+@[a-z]+$/),      // no TLD (no dot in domain)
  fc.constant("test@"),                      // incomplete
  fc.constant("@test.com"),                  // missing local
  fc.constant("test@test"),                  // missing TLD
);

describe("NewsletterForm - Property Tests", () => {
  /**
   * Property 5: Valid Email Submission
   * For any valid email format, validation should pass
   */
  it("Property 5: Valid emails pass validation", () => {
    fc.assert(
      fc.property(
        validEmailArbitrary,
        (email) => {
          expect(validateEmail(email)).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 5 (continued): Common valid email formats
   */
  it("Property 5: Common valid email formats pass validation", () => {
    const validEmails = [
      "test@example.com",
      "user.name@domain.org",
      "user-name@domain.net",
      "user_name@domain.io",
      "a@b.co",
      "test123@test123.com",
    ];

    validEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  /**
   * Property 6: Invalid Email Rejection
   * For any invalid email format, validation should fail
   */
  it("Property 6: Invalid emails fail validation", () => {
    fc.assert(
      fc.property(
        invalidEmailArbitrary,
        (email) => {
          expect(validateEmail(email)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property 6 (continued): Common invalid email formats
   */
  it("Property 6: Common invalid email formats fail validation", () => {
    const invalidEmails = [
      "",
      "   ",
      "notanemail",
      "@nodomain.com",
      "noat.com",
      "missing@tld",
      "spaces in@email.com",
    ];

    invalidEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(false);
    });
  });

  /**
   * Property 5 & 6: Validation is deterministic
   */
  it("Property 5 & 6: Validation is deterministic", () => {
    fc.assert(
      fc.property(
        fc.string(),
        (email) => {
          const result1 = validateEmail(email);
          const result2 = validateEmail(email);
          expect(result1).toBe(result2);
        }
      ),
      { numRuns: 100 }
    );
  });
});
