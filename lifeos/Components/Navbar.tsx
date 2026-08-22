"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-violet-500/20">
            L
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Life<span className="text-violet-400">OS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            How It Works
          </Link>

          <Link
            href="#dashboard"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            href="#about"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            About
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-gray-300 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0b0f19] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            <Link
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Features
            </Link>

            <Link
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              How It Works
            </Link>

            <Link
              href="#dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              About
            </Link>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-5">
              <Link
                href="/login"
                className="text-center text-gray-300 hover:text-white"
              >
                Log in
              </Link>

              <Link
                href="/signup"
                className="rounded-xl bg-white px-5 py-3 text-center font-semibold text-gray-900"
              >
                Get Started
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}