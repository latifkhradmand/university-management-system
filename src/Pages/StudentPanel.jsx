import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaCalendarAlt,
  FaChartLine,
  FaClipboardList,
  FaGraduationCap,
  FaMoneyBillWave,
  FaUserCircle,
  FaUserFriends,
} from "react-icons/fa";
import ThemeToggle from "../Components/ThemeToggle/ThemeToggle";

const quickLinks = [
  {
    title: "My Courses",
    description: "Access enrolled subjects and learning materials.",
    icon: FaBookOpen,
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Timetable",
    description: "Check your class schedule and lecture timings.",
    icon: FaCalendarAlt,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Results",
    description: "View grades, assessments, and performance trends.",
    icon: FaChartLine,
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Assignments",
    description: "Track pending submissions and deadlines.",
    icon: FaClipboardList,
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Library",
    description: "Browse digital books, journals, and study resources.",
    icon: FaGraduationCap,
    accent: "from-rose-500 to-pink-500",
  },
  {
    title: "Fees",
    description: "Manage tuition payments and invoice history.",
    icon: FaMoneyBillWave,
    accent: "from-slate-600 to-slate-800",
  },
];

const supportCards = [
  {
    title: "Student Support",
    description:
      "Get help with academic advising, counseling, and campus services.",
    icon: FaUserFriends,
  },
];

function StudentPanel() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState("Overview");
  const [breadcrumbPath, setBreadcrumbPath] = useState(["Overview"]);
  const studentProfile = {
    name: "Mohammad Hamidi",
    id: "STU-202605",
    major: "Software Engineering",
    level: "4th Year",
  };

  const handleSelectView = (view) => {
    setActiveView(view);
    setBreadcrumbPath((prev) => {
      if (prev.includes(view)) {
        return prev.slice(0, prev.indexOf(view) + 1);
      }
      return [...prev, view];
    });
  };

  const handleBack = () => {
    if (breadcrumbPath.length <= 1) return;
    const nextPath = breadcrumbPath.slice(0, -1);
    setBreadcrumbPath(nextPath);
    setActiveView(nextPath[nextPath.length - 1]);
  };

  const handleNext = () => {
    if (breadcrumbPath.length <= 1) return;
    const currentIndex = breadcrumbPath.indexOf(activeView);
    const nextView = breadcrumbPath[currentIndex + 1];
    if (nextView) {
      setActiveView(nextView);
    }
  };

  const isDetailView = quickLinks.some((item) => item.title === activeView);

  const renderActiveView = () => {
    switch (activeView) {
      case "My Courses":
        return (
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-lg font-semibold">My Courses</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Stay up to date with schedules, progress, and learning
                  materials.
                </p>
              </div>
              <button className="cursor-pointer rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                View All Courses
              </button>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                [
                  "Data Structures",
                  "CS201",
                  "Mon/Wed 10:00 AM",
                  "Dr. Hassan",
                  84,
                  "Syllabus",
                  "Assignments",
                ],
                [
                  "Database Systems",
                  "CS305",
                  "Tue/Thu 1:00 PM",
                  "Prof. Leila",
                  76,
                  "Notes",
                  "Forum",
                ],
                [
                  "Computer Networks",
                  "CS310",
                  "Fri 9:00 AM",
                  "Dr. Noor",
                  91,
                  "Lab",
                  "Grades",
                ],
              ].map((course) => (
                <div
                  key={course[0]}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold">{course[0]}</h4>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {course[1]} • {course[3]}
                      </p>
                    </div>
                    <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                      {course[4]}%
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Schedule: {course[2]}
                  </p>
                  <div className="mt-3 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{ width: `${course[4]}%` }}
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">
                      {course[5]}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 dark:bg-slate-800">
                      {course[6]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Timetable":
        return (
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-semibold">Class Timetable</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Weekly classes, labs, tutorials, and campus events are organized
              into a single view.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {[
                ["Monday", "09:00 AM • Physics", "Lab Block A", "3 classes"],
                ["Wednesday", "11:00 AM • Database", "Room 204", "2 classes"],
                ["Friday", "01:00 PM • Networks", "Room 310", "1 lab"],
              ].map((slot) => (
                <div
                  key={slot[0]}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <h4 className="font-semibold">{slot[0]}</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {slot[1]}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {slot[2]}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                    {slot[3]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Results":
        return (
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-semibold">Grades & Results</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Track your semester marks, grade history, and upward performance
              trend.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {[
                ["Data Structures", "A", "92", "Internal 45 • External 47"],
                ["Database Systems", "B+", "81", "Internal 39 • External 42"],
                ["Networks", "A-", "88", "Internal 43 • External 45"],
              ].map((item) => (
                <div
                  key={item[0]}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <h4 className="font-semibold">{item[0]}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Grade: {item[1]}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Marks: {item[2]}/100
                  </p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {item[3]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      case "Assignments":
        return (
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-semibold">Assignments</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Review pending tasks, submitted work, and upcoming deadlines in
              one place.
            </p>
            <div className="grid gap-3 lg:grid-cols-2">
              {[
                [
                  "Database ERD",
                  "Due Tomorrow",
                  "High",
                  "In Progress",
                  "Submit",
                ],
                [
                  "Networks Quiz",
                  "Due Friday",
                  "Medium",
                  "Not Started",
                  "Start",
                ],
                ["Research Report", "Submitted", "Low", "Reviewed", "Resubmit"],
              ].map((task) => (
                <div
                  key={task[0]}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h4 className="font-semibold">{task[0]}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {task[1]}
                      </p>
                    </div>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                      {task[2]}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                    Status: {task[3]}
                  </p>
                  <button className="mt-3 rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white">
                    {task[4]}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "Library":
        return (
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-semibold">Library</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Browse digital resources, borrowed books, and study material
              collections.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ["Software Engineering", "Book", "Due July 15", "Renew"],
                ["Research Methods", "Journal", "Available now", "Open"],
                ["Algorithms", "E-book", "Due July 19", "Preview"],
              ].map((item) => (
                <div
                  key={item[0]}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <h4 className="font-semibold">{item[0]}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Resource Type: {item[1]}
                  </p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {item[2]}
                  </p>
                  <button className="mt-3 rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200">
                    {item[3]}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case "Fees":
        return (
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-semibold">Fees</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Review your balance, payment history, and any dues that need
              attention.
            </p>
            <div className="grid gap-3 lg:grid-cols-2">
              {[
                ["Tuition", "$2,400", "Paid"],
                ["Hostel", "$540", "Pending"],
                ["Library", "$80", "Paid"],
                ["Pending Dues", "$420", "Due July 30"],
              ].map((fee) => (
                <div
                  key={fee[0]}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <h4 className="font-semibold">{fee[0]}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {fee[1]}
                  </p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {fee[2]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-lg font-semibold">Overview</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              This portal is organized into your academic, attendance,
              financial, and support areas.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 text-slate-800 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-semibold text-white">
                {studentProfile.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                  Student Portal
                </p>
                <h1 className="text-xl font-semibold sm:text-2xl">
                  {studentProfile.name}
                </h1>
                <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    ID: {studentProfile.id}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    {studentProfile.major}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-800">
                    {studentProfile.level}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => navigate("/")}
                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-600/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
                  Student Roadmap
                </span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                  Step {Math.max(1, breadcrumbPath.length - 1)} of 6
                </span>
              </div>
              <h2 className="mt-2 text-lg font-semibold">
                Follow your journey step by step
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Move through your student services in a clear, guided path.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleBack}
                disabled={breadcrumbPath.length <= 1}
                className="cursor-pointer rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={
                  breadcrumbPath.indexOf(activeView) >=
                  breadcrumbPath.length - 1
                }
                className="cursor-pointer rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
              >
                Next →
              </button>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-linear-to-r from-slate-50 via-white to-blue-50 p-2 dark:border-slate-800 dark:from-slate-950/70 dark:via-slate-900 dark:to-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              {breadcrumbPath.map((step, index) => {
                const isActive = index === breadcrumbPath.length - 1;
                const isFirst = index === 0;

                return (
                  <div
                    key={`${step}-${index}`}
                    className="flex items-center gap-2"
                  >
                    {index > 0 && (
                      <span className="text-slate-400 dark:text-slate-500">
                        &gt;
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setActiveView(step);
                        setBreadcrumbPath((prev) => prev.slice(0, index + 1));
                      }}
                      className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                        isActive
                          ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                          : "border-slate-300 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                      } ${isFirst ? "cursor-default" : "cursor-pointer"}`}
                    >
                      {step}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {isDetailView ? (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-linear-to-r from-slate-50 to-blue-50 p-4 shadow-sm dark:border-slate-800 dark:from-slate-950/70 dark:to-slate-900 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">{activeView}</h2>
                <p className="mt-1 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  You are currently viewing this section as its own page.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleSelectView("Overview")}
                className="cursor-pointer rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                ← Back to Dashboard
              </button>
            </div>
            <div className="mt-6 min-h-96">{renderActiveView()}</div>
          </section>
        ) : (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => handleSelectView(item.title)}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${item.accent}`}
                  >
                    <Icon className="text-xl text-white" />
                  </div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </section>
        )}
      </div>
    </div>
  );
}

export default StudentPanel;
