import ServiceButton from "../ServiceButton/ServiceButton";

function Services() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            Services
          </p>
          <h2 className="text-3xl font-semibold text-slate-800 dark:text-white sm:text-4xl">
            Everything you need for a smooth university experience
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mx-0 sm:text-base">
            From admissions to academic support, our platform brings the most
            important campus services together in one place.
          </p>
        </div>
        <ServiceButton />
      </div>
    </section>
  );
}

export default Services;
