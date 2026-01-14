"use client";

import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { CheckCircle, AlertCircle } from "lucide-react";

// Email validation function - exported for testing
export function validateEmail(email: string): boolean {
  if (!email || email.trim() === "") return false;
  // Basic email regex: must have @ and domain with at least one dot
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate email
    if (!email.trim()) {
      setErrorMessage("Please enter your email address");
      setStatus("error");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Success
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
        <h3 className="text-xl font-bold text-brand-charcoal mb-2">
          Welcome to The Lab!
        </h3>
        <p className="text-gray-600 font-sans">
          Check your inbox for your first experiment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={setEmail}
          error={status === "error" ? errorMessage : undefined}
          id="newsletter-email"
          name="email"
          className="flex-grow"
        />
        <Button
          type="submit"
          variant="primary"
          disabled={status === "loading"}
          className="whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : "Join The Lab"}
        </Button>
      </div>
      {status === "error" && (
        <div className="flex items-center gap-2 mt-3 text-red-500 text-sm">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  );
}
