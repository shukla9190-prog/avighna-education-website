import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Class 6th to 10th",
    description:
      "Foundation classes with strong focus on concepts, school exams, discipline and regular practice.",
    icon: "book",
    colorClass: "bg-blue-100 text-blue-900",
  },
  {
    title: "Class 11th and 12th",
    description:
      "Board-oriented and concept-driven preparation for senior secondary students with academic planning.",
    icon: "target",
    colorClass: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "JEE Main and NEET Physics",
    description:
      "Physics preparation with numerical practice, conceptual clarity and exam-focused problem solving.",
    icon: "graduation",
    colorClass: "bg-green-100 text-green-800",
  },
];

const highlights = [
  "Concept-based classroom teaching",
  "Regular tests and performance tracking",
  "Personal guidance from experienced directors",
  "Special focus on Physics for JEE Main and NEET",
];

const features = [
  { title: "Personal Attention", icon: "users" },
  { title: "Concept Clarity", icon: "book" },
  { title: "Exam-Oriented Practice", icon: "target" },
  { title: "Experienced Faculty", icon: "graduation" },
];

const directors = [
  {
    initials: "AS",
    name: "Director Anand Shukla",
    experience: "20 years of teaching experience",
    description:
      "With two decades of academic experience, Anand Shukla sir brings depth, discipline and student-focused mentoring to Avighna Education Academy.",
    badgeClass: "bg-blue-900 text-white",
  },
  {
    initials: "AS",
    name: "Director Archit Shukla",
    experience: "10+ years of teaching experience",
    description:
      "Archit Shukla sir contributes strong academic guidance, modern teaching methods and focused support for school and competitive exam students.",
    badgeClass: "bg-yellow-500 text-slate-950",
  },
];

function Icon({ name, className = "", size = 28 }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  const icons = {
    book: (
      <svg {...commonProps}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
        <path d="M8 6h8" />
        <path d="M8 10h8" />
      </svg>
    ),
    graduation: (
      <svg {...commonProps}>
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
        <path d="M22 10v6" />
      </svg>
    ),
    target: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
    users: (
      <svg {...commonProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    phone: (
      <svg {...commonProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    map: (
      <svg {...commonProps}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    star: (
      <svg {...commonProps}>
        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
    ),
  };

  return icons[name] || icons.star;
}

function runSmokeTests() {
  console.assert(courses.length === 3, "Expected exactly three course cards.");
  console.assert(
    courses.some((course) => course.title.includes("JEE Main") && course.title.includes("NEET Physics")),
    "Expected a JEE Main and NEET Physics course card."
  );
  console.assert(directors.length === 2, "Expected exactly two director profiles.");
  console.assert(
    directors.some((director) => director.name.includes("Anand Shukla")),
    "Expected Anand Shukla profile."
  );
  console.assert(
    directors.some((director) => director.name.includes("Archit Shukla")),
    "Expected Archit Shukla profile."
  );
  console.assert(highlights.length >= 4, "Expected at least four admission highlights.");
}

runSmokeTests();

export default function AvighnaEducationAcademy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-blue-900">Avighna Education Academy</h1>
            <p className="text-xs font-medium text-slate-500">Class 6th to 12th | JEE Main | NEET Physics</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#courses" className="hover:text-blue-800">Courses</a>
            <a href="#directors" className="hover:text-blue-800">Directors</a>
            <a href="#why" className="hover:text-blue-800">Why Us</a>
            <a href="#contact" className="hover:text-blue-800">Contact</a>
          </nav>
          <Button className="rounded-2xl bg-blue-900 px-5 hover:bg-blue-800">Enroll Now</Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-6 py-20 text-white md:py-28">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-yellow-300 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-yellow-200 ring-1 ring-white/20">
                Strong Foundation. Focused Preparation. Better Results.
              </p>
              <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Learn with clarity from Class 6th to 12th
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Avighna Education Academy provides focused academic coaching for school students and competitive exam preparation for JEE Main and NEET Physics.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="rounded-2xl bg-yellow-400 px-7 text-slate-950 hover:bg-yellow-300">
                  Join Our Classes
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl border-white/40 bg-transparent px-7 text-white hover:bg-white hover:text-blue-950">
                  View Courses
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-[2rem] bg-white/10 p-5 shadow-2xl ring-1 ring-white/20"
            >
              <div className="rounded-[1.5rem] bg-white p-8 text-slate-900">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-2xl bg-blue-100 p-3 text-blue-900">
                    <Icon name="graduation" size={30} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Admissions Open</h3>
                    <p className="text-sm text-slate-500">For Class 6th to 12th, JEE Main and NEET Physics</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <Icon name="star" className="mt-0.5 text-yellow-500" size={18} />
                      <p className="font-medium text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="courses" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-800">Our Courses</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">Programs Designed for Academic and Competitive Success</h2>
              <p className="mt-4 text-slate-600">Structured learning support for school classes and focused preparation for engineering and medical entrance exams.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {courses.map((course) => (
                <Card key={course.title} className="rounded-3xl border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className={`mb-5 inline-flex rounded-2xl p-4 ${course.colorClass}`}>
                      <Icon name={course.icon} size={32} />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{course.title}</h3>
                    <p className="text-slate-600">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="directors" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-800">Leadership</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">Guided by Experienced Directors</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {directors.map((director) => (
                <Card key={director.name} className="rounded-3xl border-0 bg-slate-50 shadow-lg">
                  <CardContent className="p-8">
                    <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold ${director.badgeClass}`}>
                      {director.initials}
                    </div>
                    <h3 className="text-2xl font-bold">{director.name}</h3>
                    <p className="mt-2 text-lg font-semibold text-blue-900">{director.experience}</p>
                    <p className="mt-4 leading-7 text-slate-600">{director.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-800">Why Choose Us</p>
                <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">A complete learning environment for serious students</h2>
                <p className="mt-5 leading-8 text-slate-600">
                  We focus on building fundamentals, improving problem-solving ability and developing exam discipline through regular practice and mentoring.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-3xl bg-white p-6 shadow-lg">
                    <Icon name={feature.icon} className="mb-4 text-blue-900" size={34} />
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-blue-950 px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">Contact Us</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">Start your learning journey with Avighna Education Academy</h2>
              <p className="mt-5 text-blue-100">For admission details, batch timing and course information, contact our academic team.</p>
            </div>
            <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
              <div className="mb-5 flex items-center gap-4">
                <Icon name="phone" className="text-blue-900" />
                <div>
                  <p className="font-bold">Phone / WhatsApp</p>
                  <p className="text-slate-600">9893821227, 8962921227</p>
                </div>
              </div>
              <div className="mb-7 flex items-center gap-4">
                <Icon name="map" className="text-blue-900" />
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-slate-600">Sudama Nagar, E Sector</p>
                </div>
              </div>
              <Button className="w-full rounded-2xl bg-blue-900 py-6 text-base hover:bg-blue-800">Request Admission Details</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-300">
        <p className="font-semibold">Avighna Education Academy</p>
        <p className="mt-2">Class 6th to 12th | JEE Main | NEET Physics</p>
      </footer>
    </div>
  );
}
