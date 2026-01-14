"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap, Clock, ArrowRight, Bell, CheckCircle, Sparkles } from "lucide-react";

const announcements = {
  running: [
    {
      id: "genai-express",
      title: "Generative AI For Doctors - Express",
      duration: "2 Weeks",
      status: "Enrolling Now",
      highlight: "Next batch starts Jan 20",
    },
  ],
  upcoming: [
    {
      id: "genai-comprehensive",
      title: "Generative AI for Healthcare Professionals",
      duration: "12 Weeks",
      status: "Coming Feb 2025",
      highlight: "Comprehensive program",
    },
    {
      id: "physcipreneur",
      title: "PhyScipreneur: The Doctor's MBA",
      duration: "12 Weeks",
      status: "Coming Q1 2025",
      highlight: "Entrepreneurship for doctors",
    },
  ],
};

export function CourseAnnouncements() {
  const [notified, setNotified] = useState<string[]>([]);

  const handleNotify = (courseId: string) => {
    if (!notified.includes(courseId)) {
      setNotified([...notified, courseId]);
    }
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-brand-charcoal flex items-center gap-2">
              <GraduationCap className="text-brand-blue" size={24} />
              AI School Updates
            </h2>
            <p className="text-sm text-gray-500 font-sans mt-1">
              Courses designed for healthcare professionals
            </p>
          </div>
          <Link
            href="/academy"
            className="text-sm font-medium text-brand-blue hover:text-brand-blue/80 flex items-center gap-1 transition-colors"
          >
            View All Courses <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Running Courses */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-green-600 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Enrolling Now
            </h3>
            {announcements.running.map((course) => (
              <Link
                key={course.id}
                href="/academy"
                className="block p-4 rounded-lg border border-green-100 bg-green-50/50 hover:bg-green-50 hover:border-green-200 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-brand-charcoal text-sm group-hover:text-green-700 transition-colors">
                      {course.title}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock size={10} /> {course.duration}
                      </span>
                      <span className="text-xs text-green-600 font-medium">
                        {course.highlight}
                      </span>
                    </div>
                  </div>
                  <span className="flex-shrink-0 px-2.5 py-1 text-xs font-medium text-white bg-green-600 rounded-full">
                    Enroll
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Upcoming Courses */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-brand-blue uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles size={12} />
              Coming Soon
            </h3>
            {announcements.upcoming.map((course) => (
              <div
                key={course.id}
                className="p-4 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 hover:border-gray-200 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-brand-charcoal text-sm">
                      {course.title}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock size={10} /> {course.duration}
                      </span>
                      <span className="text-xs text-gray-500">
                        {course.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleNotify(course.id)}
                    disabled={notified.includes(course.id)}
                    className={`flex-shrink-0 px-2.5 py-1 text-xs font-medium rounded-full flex items-center gap-1 transition-all ${
                      notified.includes(course.id)
                        ? "text-green-600 bg-green-50 cursor-default"
                        : "text-brand-blue bg-brand-blue/10 hover:bg-brand-blue/20"
                    }`}
                  >
                    {notified.includes(course.id) ? (
                      <>
                        <CheckCircle size={10} /> Notified
                      </>
                    ) : (
                      <>
                        <Bell size={10} /> Notify Me
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
