export default function Features() {
  const features = [
    ["✓", "Task Management", "Organize your daily tasks and focus on what matters most."],
    ["🔥", "Habit Tracking", "Build better habits and keep track of your daily streaks."],
    ["🎯", "Goal Tracking", "Set goals and track your progress step by step."],
    ["📊", "Productivity Analytics", "Understand your productivity and improve your routine."],
    ["📅", "Daily Planning", "Plan your day and keep everything organized."],
    ["⚡", "Smart Dashboard", "See your tasks, habits and goals from one simple dashboard."],
  ];

  return (
    <section
      id="features"
      className="bg-white px-4 py-24 transition-colors duration-300 dark:bg-[#0b0f19] sm:px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Features
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Everything you need to manage your life
          </h2>

          <p className="mt-5 text-gray-600 dark:text-gray-400">
            Stay organized, focused and productive with LifeOS.
          </p>

        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {features.map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-500/40"
            >
              <div className="mb-5 text-3xl">{icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}