export default function Hero() {
  return (
    <section className="min-h-screen overflow-hidden bg-white px-4 pb-20 pt-32 transition-colors duration-300 dark:bg-[#0b0f19] sm:px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-600 dark:text-violet-300">
            ✨ Your life, organized in one place
          </div> 

          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-7xl dark:text-white">
            Take Control of Your {" "}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Life
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-400">
            LifeOS helps you manage your tasks, habits, goals and daily life
            from one simple and powerful dashboard.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#dashboard"
              className="rounded-xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition hover:bg-violet-500"
            >
              Get Started →
            </a>

            <a
              href="#how-it-works"
              className="rounded-xl border border-gray-200 bg-gray-100 px-7 py-3.5 font-semibold text-gray-900 transition hover:bg-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}