import { CourseCard, Testimonials } from "@/components/academy";
import type { Course } from "@/components/academy";

const courses: Course[] = [
  {
    id: "no-code-ai-doctor",
    title: "The No-Code AI Doctor",
    duration: "6 Weeks",
    description: "Build medical AI tools without writing code",
    price: 499,
    currency: "$",
    featured: true,
    curriculum: [
      {
        title: "Week 1: AI Fundamentals for Healthcare",
        lessons: [
          "Understanding LLMs and their medical applications",
          "Prompt engineering basics",
          "Healthcare data considerations",
        ],
      },
      {
        title: "Week 2: No-Code Platforms Overview",
        lessons: [
          "Introduction to Bubble, Zapier, and Make",
          "Connecting to AI APIs",
          "Building your first workflow",
        ],
      },
      {
        title: "Week 3-4: Building Clinical Tools",
        lessons: [
          "Symptom checker development",
          "Clinical documentation assistant",
          "Patient education generator",
        ],
      },
      {
        title: "Week 5-6: Deployment & Compliance",
        lessons: [
          "HIPAA considerations",
          "Testing and validation",
          "Launching your tool",
        ],
      },
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
      {
        title: "Week 1: The Neuroscience of Stress",
        lessons: [
          "Understanding the stress response",
          "Cortisol and chronic stress",
          "Brain plasticity and recovery",
        ],
      },
      {
        title: "Week 2: Vedic Wisdom Decoded",
        lessons: [
          "The science behind meditation",
          "Dharma and purpose",
          "Ancient practices, modern evidence",
        ],
      },
      {
        title: "Week 3: The Dopamine-Dharma Protocol",
        lessons: [
          "Rewiring reward circuits",
          "Building sustainable motivation",
          "Daily practice design",
        ],
      },
      {
        title: "Week 4: Integration & Maintenance",
        lessons: [
          "Creating your personal protocol",
          "Measuring progress",
          "Long-term sustainability",
        ],
      },
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
      {
        title: "Module 1: Ideation & Validation",
        lessons: [
          "Finding problems worth solving",
          "Market research for healthcare",
          "Validating your idea",
        ],
      },
      {
        title: "Module 2: Product Development",
        lessons: [
          "MVP design principles",
          "No-code development",
          "User testing basics",
        ],
      },
      {
        title: "Module 3: Business Fundamentals",
        lessons: [
          "Healthcare business models",
          "Regulatory considerations",
          "Funding options",
        ],
      },
      {
        title: "Module 4: Launch & Scale",
        lessons: [
          "Go-to-market strategy",
          "Building your first users",
          "Scaling considerations",
        ],
      },
    ],
  },
];

const testimonials = [
  {
    id: "1",
    name: "Dr. Priya Sharma",
    role: "Cardiologist, Mumbai",
    content:
      "The No-Code AI Doctor course transformed how I approach patient education. I built a custom tool in just 3 weeks!",
  },
  {
    id: "2",
    name: "Dr. Rahul Mehta",
    role: "General Practitioner, Delhi",
    content:
      "The Scientific Search for Peace helped me recover from burnout. The neuroscience-backed approach made all the difference.",
  },
  {
    id: "3",
    name: "Dr. Ananya Reddy",
    role: "Psychiatrist & Founder",
    content:
      "Docpreneur Blueprint gave me the framework to launch my mental health startup. Now serving 1000+ patients monthly.",
  },
];

export default function AcademyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-blue/5 via-white to-brand-gold/5 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            The Academy
          </h1>
          <p className="text-lg text-gray-600 font-sans max-w-2xl mx-auto">
            Transform from Consumer to Innovator. Practical courses designed for
            healthcare professionals ready to lead.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="container-custom section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />
    </>
  );
}

export { courses };
