"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
       const response = await fetch("/api/auth/me", {
  cache: "no-store",
  credentials: "include",
});

        if (!response.ok) {
          setUser(null);
          return;
        }

        const data = await response.json();

        setUser(data.user ?? data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090d16] text-white">
        <p className="text-slate-400">Loading dashboard...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090d16] text-white">
        <div className="text-center">
          <h1 className="text-xl font-semibold">
            Please login first
          </h1>

          <a
            href="/login"
            className="mt-4 inline-block rounded-xl bg-purple-600 px-5 py-2 text-sm font-medium hover:bg-purple-500"
          >
            Go to Login
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090d16] text-white">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-white/10 bg-[#0d121d] p-5 lg:block">

          {/* Logo */}
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 font-bold">
              L
            </div>

            <span className="text-lg font-semibold">
              LifeOS
            </span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">

            <button className="flex w-full items-center gap-3 rounded-xl bg-purple-500/10 px-4 py-3 text-sm font-medium text-purple-300">
              <span>⌂</span>
              Overview
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              <span>✓</span>
              Tasks
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              <span>🔥</span>
              Habits
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              <span>🎯</span>
              Goals
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              <span>📊</span>
              Analytics
            </button>

          </nav>

          {/* Bottom */}
          <div className="absolute bottom-6 w-[216px]">

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              ⚙️ Settings
            </button>

            <div className="mt-4 border-t border-white/10 pt-4">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/20 text-sm font-semibold text-purple-300">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    {user.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    Free Plan
                  </p>
                </div>

              </div>
            </div>

          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1">

          {/* Topbar */}
          <header className="flex h-20 items-center justify-between border-b border-white/10 px-5 sm:px-8">

            <div>
              <p className="text-xs text-slate-500">
                Sunday, August 24
              </p>

              <h1 className="mt-1 text-xl font-semibold">
                Good morning, {user.name} 👋
              </h1>
            </div>

            <div className="flex items-center gap-3">

              <button className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] sm:block">
                + Add Task
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/10 text-sm font-semibold text-purple-300">
                {user.name.charAt(0).toUpperCase()}
              </div>

            </div>
          </header>

          {/* Dashboard */}
          <div className="p-5 sm:p-8">

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-500">
                  Total Tasks
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <h2 className="text-3xl font-bold">
                    12
                  </h2>

                  <span className="text-xs text-emerald-400">
                    +20%
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-500">
                  Habits
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <h2 className="text-3xl font-bold">
                    8
                  </h2>

                  <span className="text-xs text-purple-400">
                    7 day streak
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-500">
                  Active Goals
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <h2 className="text-3xl font-bold">
                    5
                  </h2>

                  <span className="text-xs text-blue-400">
                    58% progress
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-500">
                  Productivity
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <h2 className="text-3xl font-bold">
                    82%
                  </h2>

                  <span className="text-xs text-emerald-400">
                    Excellent
                  </span>
                </div>
              </div>

            </div>

            {/* Content Grid */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">

              {/* Today's Tasks */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold">
                      Today's Tasks
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                      Stay focused on what matters
                    </p>
                  </div>

                  <button className="text-sm text-purple-400 hover:text-purple-300">
                    View all
                  </button>
                </div>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs text-emerald-400">
                      ✓
                    </div>

                    <div className="flex-1">
                      <p className="text-sm text-slate-300">
                        Complete LifeOS project
                      </p>

                      <p className="mt-1 text-xs text-slate-600">
                        Completed
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-400">
                      Done
                    </span>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="h-6 w-6 rounded-full border border-purple-400/30" />

                    <div className="flex-1">
                      <p className="text-sm text-slate-300">
                        Practice React.js
                      </p>

                      <p className="mt-1 text-xs text-slate-600">
                        Today · 1 hour
                      </p>
                    </div>

                    <span className="rounded-full bg-purple-500/10 px-2 py-1 text-[10px] text-purple-400">
                      High
                    </span>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="h-6 w-6 rounded-full border border-blue-400/30" />

                    <div className="flex-1">
                      <p className="text-sm text-slate-300">
                        Read for 30 minutes
                      </p>

                      <p className="mt-1 text-xs text-slate-600">
                        Today · Personal growth
                      </p>
                    </div>

                    <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[10px] text-blue-400">
                      Medium
                    </span>
                  </div>

                </div>
              </div>

              {/* Streak */}
              <div className="rounded-2xl border border-purple-400/10 bg-gradient-to-br from-purple-500/[0.08] to-transparent p-6">

                <p className="text-sm text-slate-400">
                  Current Streak
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <span className="text-5xl">
                    🔥
                  </span>

                  <div>
                    <h2 className="text-4xl font-bold">
                      7
                    </h2>

                    <p className="text-sm text-purple-300">
                      days
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-slate-500">
                      Weekly goal
                    </span>

                    <span className="text-purple-300">
                      5 / 7
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full w-[71%] rounded-full bg-gradient-to-r from-purple-600 to-violet-400" />
                  </div>
                </div>

                <p className="mt-6 text-xs leading-5 text-slate-500">
                  You're building a strong routine. Keep going and
                  complete your weekly goal.
                </p>

              </div>

            </div>

            {/* Bottom */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">

              {/* Habits */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">
                    Today's Habits
                  </h2>

                  <span className="text-xs text-slate-500">
                    4 / 6 completed
                  </span>
                </div>

                <div className="mt-5 space-y-3">

                  {[
                    "Morning workout",
                    "Read 30 minutes",
                    "Drink 2L water",
                    "Practice coding",
                  ].map((habit, index) => (
                    <div
                      key={habit}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                          index < 2
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "border border-white/10 text-slate-600"
                        }`}
                      >
                        {index < 2 ? "✓" : ""}
                      </div>

                      <span className="text-sm text-slate-300">
                        {habit}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

              {/* Goals */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">
                    Active Goals
                  </h2>

                  <button className="text-sm text-purple-400">
                    View all
                  </button>
                </div>

                <div className="mt-5 space-y-5">

                  {[
                    ["Master React.js", 72],
                    ["Build LifeOS", 58],
                    ["DSA Preparation", 45],
                  ].map(([goal, progress]) => (
                    <div key={goal as string}>

                      <div className="mb-2 flex justify-between">
                        <span className="text-sm text-slate-300">
                          {goal}
                        </span>

                        <span className="text-xs text-slate-500">
                          {progress}%
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          style={{ width: `${progress}%` }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-violet-400"
                        />
                      </div>

                    </div>
                  ))}

                </div>
              </div>

            </div>

          </div>
        </section>
      </div>
    </main>
  );
}