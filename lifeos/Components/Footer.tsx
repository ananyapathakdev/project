export default function Footer() {
  return (
    <footer
      className="
        border-t border-gray-200
        bg-white
        px-4 py-12
        transition-colors duration-300
        dark:border-white/10
        dark:bg-[#0b0f19]
        sm:px-6
      "
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">

        <div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Life<span className="text-violet-600 dark:text-violet-400">OS</span>
          </div>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Organize your life. Focus on what matters.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a href="#features" className="hover:text-violet-500">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-violet-500">
            How It Works
          </a>

          <a href="#about" className="hover:text-violet-500">
            About
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500">
          © 2026 LifeOS
        </p>

      </div>
    </footer>
  );
}