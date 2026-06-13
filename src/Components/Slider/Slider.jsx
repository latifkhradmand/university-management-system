import { useState, useEffect } from "react";

export default function Slider() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=60",
      title: "History of the University",
      description:
        "Established to empower future leaders, our university has grown from a small institution into a modern center of excellence.",
      buttonText: "Explore History",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=60",
      title: "Register Now",
      description:
        "Complete your online application, upload documents, and begin your academic journey today.",
      buttonText: "Apply Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=60",
      title: "Awards & Achievements",
      description:
        "Recognized for academic excellence, innovation, and outstanding student success.",
      buttonText: "View Awards",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=60",
      title: "Student & Staff Login",
      description:
        "Access courses, schedules, attendance, grades, and university services.",
      buttonText: "Login",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=60",
      title: "University Management System",
      description:
        "Manage admissions, academics, examinations, finance, and analytics from one platform.",
      buttonText: "Learn More",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides Track */}
      <div
        className="flex h-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: `translate3d(-${current * 100}%,0,0)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl px-6 md:px-16 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                  {slide.description}
                </p>

                <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-500 ${
              current === index ? "w-10 bg-white" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
