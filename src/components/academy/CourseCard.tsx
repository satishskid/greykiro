"use client";

import { useState } from "react";
import { Card, Button } from "@/components/ui";
import { ChevronDown, ChevronUp, Clock, Star } from "lucide-react";

interface CurriculumModule {
  title: string;
  lessons: string[];
}

interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  status: "open" | "featured" | "coming-soon";
  rating?: number;
  curriculum?: CurriculumModule[];
  enrollUrl?: string;
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const statusConfig = {
    open: { label: "Registrations Open", color: "bg-green-500" },
    featured: { label: "Featured", color: "bg-brand-blue" },
    "coming-soon": { label: "Coming Soon", color: "bg-gray-400" },
  };

  const status = statusConfig[course.status];

  return (
    <>
      <Card className="flex flex-col h-full relative overflow-hidden">
        {/* Status Badge */}
        <div className={`absolute top-0 right-0 ${status.color} text-white text-xs font-medium px-3 py-1 rounded-bl-lg`}>
          {status.label}
        </div>

        {/* Course Header */}
        <div className="mb-4 pt-2">
          <h3 className="text-lg font-bold text-brand-charcoal mb-2 pr-24">
            {course.title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {course.duration}
            </span>
            {course.rating && (
              <span className="flex items-center gap-1 text-brand-gold">
                <Star size={14} fill="currentColor" />
                {course.rating}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 font-sans text-sm mb-4 flex-grow">
          {course.description}
        </p>

        {/* Curriculum Accordion */}
        {course.curriculum && course.curriculum.length > 0 && (
          <div className="mb-4" data-testid="curriculum-accordion">
            <h4 className="font-medium text-sm text-brand-charcoal mb-2">Curriculum</h4>
            <div className="space-y-1">
              {course.curriculum.map((module, index) => (
                <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-2.5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                    aria-expanded={expandedModule === index}
                  >
                    <span className="font-medium text-xs text-brand-charcoal">
                      {module.title}
                    </span>
                    {expandedModule === index ? (
                      <ChevronUp size={14} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={14} className="text-gray-400" />
                    )}
                  </button>
                  {expandedModule === index && (
                    <div className="px-2.5 pb-2.5">
                      <ul className="space-y-1">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li
                            key={lessonIndex}
                            className="text-xs text-gray-500 pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-brand-blue"
                          >
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        {course.enrollUrl && course.status === "open" ? (
          <a
            href={course.enrollUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-auto inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90 transition-colors"
          >
            Enroll Now →
          </a>
        ) : (
          <Button
            variant={course.status === "coming-soon" ? "secondary" : "primary"}
            className="w-full mt-auto"
            onClick={() => setShowModal(true)}
          >
            {course.status === "coming-soon" ? "Get Notified" : "Register Interest"}
          </Button>
        )}
      </Card>

      {/* Registration Modal */}
      {showModal && (
        <RegistrationModal
          courseName={course.title}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

function RegistrationModal({ courseName, onClose }: { courseName: string; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-brand-charcoal mb-2">You&apos;re on the list!</h3>
            <p className="text-gray-600 text-sm font-sans">
              We&apos;ll notify you when enrollment opens for {courseName}.
            </p>
            <button
              onClick={onClose}
              className="mt-4 text-brand-blue text-sm font-medium hover:underline"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-bold text-brand-charcoal mb-1">Register Interest</h3>
            <p className="text-gray-500 text-sm mb-4">{courseName}</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-blue"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-blue"
              />
              <input
                type="tel"
                placeholder="Phone (Optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-brand-blue"
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-brand-blue rounded-lg hover:bg-brand-blue/90"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export type { Course, CurriculumModule };
