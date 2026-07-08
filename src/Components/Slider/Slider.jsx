import { useState, useEffect } from "react";

export default function Slider() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
      title: "History of the University",
      description:
        "Discover how our institution grew into a leading center of innovation, teaching, and student success.",
      buttonText: "Explore History",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",
      title: "Register Now",
      description:
        "Begin your academic journey with a simple online admission process and guided support.",
      buttonText: "Apply Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
      title: "Awards & Achievements",
      description:
        "See the milestones, honors, and accomplishments that define our campus community.",
      buttonText: "View Awards",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
      title: "Student & Staff Login",
      description:
        "Access your dashboard for schedules, grades, attendance, and essential university services.",
      buttonText: "Login",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80",
      title: "University Management System",
      description:
        "Manage admissions, academics, examinations, finance, and analytics from one connected platform.",
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
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      <div
        className="flex min-h-[70vh] transition-transform duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[80vh] lg:min-h-[90vh]"
        style={{ transform: `translate3d(-${current * 100}%,0,0)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative min-w-full shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full min-h-[70vh] w-full object-cover sm:min-h-[80vh] lg:min-h-[90vh]"
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-900/50 to-slate-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_35%)]" />

            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-center px-4 py-16 sm:px-10 sm:py-20 lg:px-16">
                <div className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur sm:text-sm">
                  University Highlights
                </div>
                <h1 className="max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:mt-4 sm:text-base md:text-lg lg:text-xl">
                  {slide.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                  <button className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 sm:px-8 sm:py-3 sm:text-base">
                    {slide.buttonText}
                  </button>
                  <button className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:px-8 sm:py-3 sm:text-base">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20 sm:flex"
        aria-label="Previous slide"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20 sm:flex"
        aria-label="Next slide"
      >
        ❯
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-2 backdrop-blur sm:bottom-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              current === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
