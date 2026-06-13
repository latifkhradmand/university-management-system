import {
  FaSignInAlt,
  FaUserPlus,
  FaBlog,
  FaCogs,
  FaTrophy,
  FaUniversity,
  FaGraduationCap,
} from "react-icons/fa";

const ServiceButton = () => {

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
    <section className="w-full px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => console.log(item.action)}
              className="group bg-white rounded-3xl p-6 text-left border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${item.bgColor}`}
              >
                <Icon
                  className={`text-2xl ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.details}
              </p>

              {/* Arrow */}
              <div className="mt-5 flex justify-end">
                <span className="text-slate-400 group-hover:text-slate-800 transition-colors">
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
