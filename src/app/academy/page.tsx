import { CourseCard, Testimonials } from "@/components/academy";
import type { Course } from "@/components/academy";

const courses: Course[] = [
  // Registrations Open
  {
    id: "genai-express",
    title: "Generative AI For Doctors - Express",
    duration: "2 Weeks",
    description: "Empowering doctors, clinicians, and healthcare innovators to harness the potential of GenAI responsibly, effectively, and ethically.",
    status: "open",
    rating: 5.0,
    enrollUrl: "https://learn.greybrain.ai/course/gen-ai-doctors-express",
    curriculum: [
      {
        title: "Week 1: GenAI Fundamentals",
        lessons: [
          "Understanding LLMs in healthcare",
          "Prompt engineering for clinical use",
          "Ethical considerations",
        ],
      },
      {
        title: "Week 2: Practical Applications",
        lessons: [
          "Clinical documentation with AI",
          "Patient communication tools",
          "Building your first AI workflow",
        ],
      },
    ],
  },
  // Featured Programs
  {
    id: "genai-comprehensive",
    title: "Generative AI for Doctors/Healthcare Professionals",
    duration: "12 Weeks",
    description: "Comprehensive 12-week program covering all aspects of AI integration in healthcare practice. Master generative AI tools tailored for healthcare.",
    status: "featured",
    enrollUrl: "https://learn.greybrain.ai/course/gen-ai-healthcare",
    curriculum: [
      {
        title: "Module 1-3: Foundations",
        lessons: [
          "AI/ML fundamentals for clinicians",
          "Healthcare data & privacy",
          "Clinical AI landscape",
        ],
      },
      {
        title: "Module 4-8: Applications",
        lessons: [
          "Diagnostic AI tools",
          "Documentation & workflow",
          "Patient engagement",
        ],
      },
      {
        title: "Module 9-12: Advanced",
        lessons: [
          "Building custom solutions",
          "Implementation strategies",
          "Future of clinical AI",
        ],
      },
    ],
  },
  {
    id: "physcipreneur",
    title: "PhyScipreneur: The Doctor's MBA",
    duration: "12 Weeks",
    description: "Entrepreneurship course for doctors focusing on idea validation, feasibility, business strategy and growth planning in healthcare.",
    status: "featured",
    enrollUrl: "https://learn.greybrain.ai",
    curriculum: [
      {
        title: "Phase 1: Ideation",
        lessons: [
          "Problem identification",
          "Market research",
          "Idea validation",
        ],
      },
      {
        title: "Phase 2: Business",
        lessons: [
          "Business model design",
          "Financial planning",
          "Legal & regulatory",
        ],
      },
      {
        title: "Phase 3: Growth",
        lessons: [
          "Go-to-market strategy",
          "Scaling operations",
          "Funding & investment",
        ],
      },
    ],
  },
  {
    id: "ai-research",
    title: "AI for Research Papers",
    duration: "4 Weeks",
    description: "Learn to leverage AI tools for literature review, data analysis, and writing research papers more efficiently.",
    status: "featured",
    enrollUrl: "https://learn.greybrain.ai/course/ai-for-research-papers",
  },
  // Coming Soon
  {
    id: "workshop-medicos",
    title: "Workshop: GenAI for Medicos - Institutional",
    duration: "4 Hours",
    description: "Exclusive workshop designed to upskill medical students and faculty with cutting-edge GenAI applications in healthcare and medical education.",
    status: "coming-soon",
    enrollUrl: "https://learn.greybrain.ai",
  },
  {
    id: "workshop-doctors",
    title: "Workshop: GenAI for Doctors",
    duration: "4 Hours",
    description: "Collaborative GenAI workshop designed for large groups of doctors and healthcare professionals showing how to use AI in real clinical workflows.",
    status: "coming-soon",
    enrollUrl: "https://learn.greybrain.ai",
  },
];

// Real testimonials from doctors
const testimonials = [
  {
    id: "1",
    name: "Dr. Gaurav Gupta",
    role: "Pediatrician & AI Healthcare Trainer",
    content: "Through this intensive 2-week program, I've deepened my expertise in applying Generative AI to real-world medical scenarios. I am taking this knowledge forward as a Certified AI Healthcare Trainer.",
  },
  {
    id: "2",
    name: "Dr. Aditya Kulkarni",
    role: "Consultant Hepatology & Gastroenterology, Narayana Health",
    content: "Worth it. This course has helped me discover a new world of AI tools. It has made a great impact on my day-to-day activities by making tasks easier.",
  },
  {
    id: "3",
    name: "Dr. Utkarsh Bhagat",
    role: "Director & Head, Neurosurgery, Narayana Superspeciality Hospital",
    content: "Preparing slides and leaflets for patients is now simple, and I was able to give clear instructions to my technical team for establishing the website.",
  },
  {
    id: "4",
    name: "Dr. Deepak Chiradoni",
    role: "Senior Consultant Pediatrician, Basaveshwara Hospital",
    content: "Created BY doctors FOR doctors, with eminent scientists who understand real-world healthcare challenges. The curriculum is fantastic.",
  },
];

export default function AcademyPage() {
  const openCourses = courses.filter((c) => c.status === "open");
  const featuredCourses = courses.filter((c) => c.status === "featured");
  const comingSoonCourses = courses.filter((c) => c.status === "coming-soon");

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-blue/5 via-white to-brand-gold/5 py-12">
        <div className="container-custom">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-2 py-1 rounded">
              IIHMR Bangalore Partner
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-3">
            AI School
          </h1>
          <p className="text-gray-600 font-sans max-w-xl">
            Master AI in Healthcare — Comprehensive courses designed for healthcare professionals. No-Code GenAI Mastery for 10x Productivity.
          </p>
        </div>
      </section>

      {/* Registrations Open */}
      {openCourses.length > 0 && (
        <section className="container-custom py-10">
          <h2 className="text-xl font-bold text-brand-charcoal mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Registrations Open
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Programs */}
      <section className="container-custom py-10 border-t border-gray-100">
        <h2 className="text-xl font-bold text-brand-charcoal mb-6">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      {comingSoonCourses.length > 0 && (
        <section className="container-custom py-10 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-400 mb-6">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />
    </>
  );
}

export { courses };
