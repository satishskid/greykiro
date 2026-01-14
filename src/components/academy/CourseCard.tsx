"use client";

import { useState } from "react";
import { Card, Button } from "@/components/ui";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CurriculumModule {
  title: string;
  lessons: string[];
}

interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  price: number;
  currency: string;
  curriculum: CurriculumModule[];
  featured?: boolean;
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  return (
    <Card
      className={`flex flex-col h-full ${
        course.featured ? "border-brand-blue border-2" : ""
      }`}
    >
      {course.featured && (
        <div className="bg-brand-blue text-white text-center py-2 text-sm font-medium -mx-6 -mt-6 mb-6 rounded-t-xl">
          Most Popular
        </div>
      )}

      {/* Course Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-brand-charcoal mb-2">
          {course.title}
        </h3>
        <p className="text-sm text-brand-blue font-medium mb-3">
          {course.duration}
        </p>
        <p className="text-gray-600 font-sans text-sm">{course.description}</p>
      </div>

      {/* Pricing */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg" data-testid="pricing-section">
        <div className="text-3xl font-bold text-brand-charcoal">
          {course.currency}
          {course.price.toLocaleString()}
        </div>
        <p className="text-sm text-gray-500">One-time payment</p>
      </div>

      {/* Curriculum Accordion */}
      <div className="flex-grow mb-6" data-testid="curriculum-accordion">
        <h4 className="font-medium text-brand-charcoal mb-3">Curriculum</h4>
        <div className="space-y-2">
          {course.curriculum.map((module, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setExpandedModule(expandedModule === index ? null : index)
                }
                aria-expanded={expandedModule === index}
              >
                <span className="font-medium text-sm text-brand-charcoal">
                  {module.title}
                </span>
                {expandedModule === index ? (
                  <ChevronUp size={16} className="text-gray-400" />
                ) : (
                  <ChevronDown size={16} className="text-gray-400" />
                )}
              </button>
              {expandedModule === index && (
                <div className="px-3 pb-3">
                  <ul className="space-y-1">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li
                        key={lessonIndex}
                        className="text-sm text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-brand-blue"
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

      {/* CTA Button */}
      <Button variant="primary" className="w-full mt-auto">
        Enroll Now
      </Button>
    </Card>
  );
}

export type { Course, CurriculumModule };
