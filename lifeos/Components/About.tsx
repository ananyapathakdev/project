export default function About() {
  return (
    <section
      id="about"
      className="
        bg-white
        px-4
        py-24
        transition-colors duration-300
        dark:bg-[#0b0f19]
        sm:px-6
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            About LifeOS
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Everything you need to{" "}
            <span className="text-violet-600 dark:text-violet-400">
              organize your life.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-400">
            LifeOS is a modern productivity platform that brings your tasks,
            habits, goals and daily planning together in one simple dashboard.
          </p>

        </div>

        {/* Content */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div
            className="
              rounded-2xl
              border border-gray-200
              bg-gray-50
              p-7
              transition duration-300
              hover:-translate-y-1
              hover:border-violet-300
              dark:border-white/10
              dark:bg-white/[0.03]
              dark:hover:border-violet-500/40
            "
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-2xl">
              🎯
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Stay Focused
            </h3>

            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              Focus on the things that matter most and avoid the distraction
              of managing everything across different apps.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              rounded-2xl
              border border-gray-200
              bg-gray-50
              p-7
              transition duration-300
              hover:-translate-y-1
              hover:border-violet-300
              dark:border-white/10
              dark:bg-white/[0.03]
              dark:hover:border-violet-500/40
            "
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-2xl">
              ⚡
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Work Smarter
            </h3>

            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              Plan your day, track your progress and build productive habits
              with a simple and powerful workflow.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              rounded-2xl
              border border-gray-200
              bg-gray-50
              p-7
              transition duration-300
              hover:-translate-y-1
              hover:border-violet-300
              dark:border-white/10
              dark:bg-white/[0.03]
              dark:hover:border-violet-500/40
            "
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-2xl">
              📈
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Track Progress
            </h3>

            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
              See your tasks, habits and goals in one place and understand how
              you are progressing every day.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}4