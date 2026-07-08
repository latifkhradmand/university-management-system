import {
  FaSignInAlt,
  FaUserPlus,
  FaBlog,
  FaCogs,
  FaTrophy,
  FaUniversity,
  FaGraduationCap,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServiceButton = () => {
  const navigate = useNavigate();
  const handleAction = (action) => {
    if (action === "login") {
      navigate("/login");
      return;
    }

    console.log(action);
  };

  const menuItems = [
    {
      id: 1,
      name: "Login",
      details: "Access your student, faculty, or administrator account.",
      icon: FaSignInAlt,
      action: "login",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      name: "University Registration",
      details: "Apply for admission and complete your enrollment process.",
      icon: FaUserPlus,
      action: "register",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      name: "University Weblog",
      details: "Read university news, events, announcements, and articles.",
      icon: FaBlog,
      action: "blog",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      id: 4,
      name: "Services",
      details: "Access student services, library resources, and support.",
      icon: FaCogs,
      action: "services",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: 5,
      name: "Awards & Achievements",
      details: "Explore university accomplishments and student successes.",
      icon: FaTrophy,
      action: "awards",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      id: 6,
      name: "University History",
      details: "Learn about the university's legacy and development.",
      icon: FaUniversity,
      action: "history",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      id: 7,
      name: "External Courses",
      details: "Browse online and partner courses available outside campus.",
      icon: FaGraduationCap,
      action: "courses",
      bgColor: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <section className="w-full rounded-4xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur sm:p-6 lg:p-8 dark:border-slate-800 dark:bg-slate-900/80">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => handleAction(item.action)}
              className="group cursor-pointer rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-slate-700 dark:from-slate-800 dark:to-slate-900"
            >
              {/* Icon */}
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.bgColor} shadow-inner`}
              >
                <Icon
                  className={`text-xl ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-slate-800 dark:text-white">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-slate-500 dark:text-slate-300">
                {item.details}
              </p>

              {/* Arrow */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                  Explore
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 dark:bg-slate-100 dark:text-slate-900">
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceButton;
