export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="bg-white px-4 py-24 transition-colors duration-300 dark:bg-[#0b0f19] sm:px-6"
    >
      <div className="mx-auto max-w-5xl">

        <div className="rounded-2xl border border-gray-200 bg-gray-100 p-2 shadow-2xl dark:border-white/10 dark:bg-white/[0.03] sm:p-3">

          <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#111827] sm:p-8">

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Good morning 👋
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  Your Dashboard
                </h2>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                  Here's your productivity overview for today.
                </p>
              </div>

              <div className="w-fit rounded-lg bg-violet-500/10 px-4 py-2 text-sm text-violet-600 dark:text-violet-300">
                Today
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tasks
                </p>

                <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                  12
                </p>

                <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                  ↑ 20% completed
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Habits
                </p>

                <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                  8
                </p>

                <p className="mt-2 text-sm text-violet-600 dark:text-violet-400">
                  🔥 7 day streak
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Goals
                </p>

                <p className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                  5
                </p>

                <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                  3 active goals
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}