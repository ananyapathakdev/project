"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("lifeos-theme");

    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("lifeos-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("lifeos-theme", "light");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="
        fixed left-0 right-0 top-0 z-50
        border-b border-gray-200/80
        bg-white/90
        backdrop-blur-xl
        transition-colors duration-300
        dark:border-white/10
        dark:bg-[#0b0f19]/90
      "
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 font-bold text-white shadow-lg shadow-violet-600/20">
            L
          </div>

          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Life<span className="text-violet-600 dark:text-violet-400">OS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-600 transition hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 transition hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
          >
            How It Works
          </Link>

          <Link
            href="#dashboard"
            className="text-sm font-medium text-gray-600 transition hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
          >
            Dashboard
          </Link>

          <Link
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
          >
            About
          </Link>
        </div>

        {/* Right */}
        <div className="hidden items-center gap-3 md:flex">

          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-100 transition hover:bg-gray-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <Link
            href="/login"
            className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            Get Started →
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">

          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-100 dark:border-white/10 dark:bg-white/5"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-100 text-xl text-gray-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-5 dark:border-white/10 dark:bg-[#0b0f19] md:hidden">
          <div className="flex flex-col gap-1">

            <Link
              href="#features"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
            >
              Features
            </Link>

            <Link
              href="#how-it-works"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
            >
              How It Works
            </Link>

            <Link
              href="#dashboard"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
            >
              Dashboard
            </Link>

            <Link
              href="#about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
            >
              About
            </Link>

            <Link
              href="/login"
              onClick={closeMenu}
              className="mt-2 rounded-xl border border-gray-200 px-4 py-3 text-center text-gray-700 dark:border-white/10 dark:text-gray-300"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-violet-600 px-5 py-3 text-center font-semibold text-white"
            >
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}