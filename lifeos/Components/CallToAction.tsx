export default function CallToAction() {
  return (
    <section className="bg-white px-4 py-24 transition-colors duration-300 dark:bg-[#0b0f19] sm:px-6">
      <div className="mx-auto max-w-5xl">

        <div className="relative overflow-hidden rounded-3xl border border-violet-300 bg-violet-50 px-6 py-16 text-center dark:border-violet-500/20 dark:bg-gradient-to-br dark:from-violet-600/20 dark:via-indigo-600/10 dark:to-transparent sm:px-10">

          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative">

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
              Get Started
            </p>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
              Ready to take control of your{" "}
              <span className="text-violet-600 dark:text-violet-400">
                life?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-600 dark:text-gray-400">
              Start organizing your tasks, habits and goals today with LifeOS.
              Everything you need is just one step away.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="/signup"
                className="rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:bg-violet-500"
              >
                Get Started →
              </a>

              <a
                href="#features"
                className="rounded-xl border border-gray-200 bg-white px-7 py-3.5 font-semibold text-gray-900 transition hover:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Explore Features
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}