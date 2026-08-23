export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Get started with LifeOS by creating your personal account in just a few seconds.",
    },
    {
      number: "02",
      title: "Organize Your Life",
      description:
        "Add your tasks, habits and goals and keep everything organized in one place.",
    },
    {
      number: "03",
      title: "Track Your Progress",
      description:
        "Use your dashboard to monitor your progress and stay focused on what matters.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-white px-4 py-24 transition-colors duration-300 dark:bg-[#0b0f19] sm:px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            How It Works
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Get organized in{" "}
            <span className="text-violet-600 dark:text-violet-400">
              three simple steps
            </span>
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400">
            LifeOS makes it simple to plan, organize and improve your everyday
            life.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-7 transition hover:-translate-y-1 hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-500/40"
            >

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-sm font-bold text-white">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}