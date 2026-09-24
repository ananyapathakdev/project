"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type Task = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  createdAt: string;
};

type Habit = {
  id: number;
  name: string;
  completed: boolean;
  userId: number;
  createdAt: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [habits, setHabits] = useState<Habit[]>([]);

  const [loading, setLoading] = useState(true);
  const [tasksLoading, setTasksLoading] = useState(true);
  const [habitsLoading, setHabitsLoading] = useState(true);

  const [addingTask, setAddingTask] = useState(false);
  const [addingHabit, setAddingHabit] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // =========================
  // GET LOGGED-IN USER
  // =========================
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

  // =========================
  // GET TASKS
  // =========================
  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetch("/api/tasks", {
          cache: "no-store",
          credentials: "include",
        });

        if (!response.ok) {
          console.error("Failed to fetch tasks");
          return;
        }

        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setTasksLoading(false);
      }
    };

    getTasks();
  }, []);

  // =========================
  // GET HABITS
  // =========================
  useEffect(() => {
    const getHabits = async () => {
      try {
        const response = await fetch("/api/habits", {
          cache: "no-store",
          credentials: "include",
        });

        if (!response.ok) {
          console.error("Failed to fetch habits");
          return;
        }

        const data = await response.json();
        setHabits(data);
      } catch (error) {
        console.error("Failed to fetch habits:", error);
      } finally {
        setHabitsLoading(false);
      }
    };

    getHabits();
  }, []);

  // =========================
  // ADD TASK
  // =========================
  const handleAddTask = async () => {
    const title = window.prompt("Enter your task:");

    if (!title || title.trim() === "") {
      return;
    }

    try {
      setAddingTask(true);

      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          title: title.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to add task");
        return;
      }

      setTasks((prevTasks) => [data, ...prevTasks]);
    } catch (error) {
      console.error("Failed to add task:", error);
      alert("Something went wrong");
    } finally {
      setAddingTask(false);
    }
  };

  // =========================
  // ADD HABIT
  // =========================
  const handleAddHabit = async () => {
    const name = window.prompt("Enter your habit:");

    if (!name || name.trim() === "") {
      return;
    }

    try {
      setAddingHabit(true);

      const response = await fetch("/api/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: name.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to add habit");
        return;
      }

      setHabits((prevHabits) => [data, ...prevHabits]);
    } catch (error) {
      console.error("Failed to add habit:", error);
      alert("Something went wrong");
    } finally {
      setAddingHabit(false);
    }
  };

  // =========================
  // TOGGLE TASK
  // =========================
  const handleToggleTask = async (task: Task) => {
    try {
      const response = await fetch("/api/tasks", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          id: task.id,
          completed: !task.completed,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to update task");
        return;
      }

      setTasks((prevTasks) =>
        prevTasks.map((item) =>
          item.id === data.id ? data : item
        )
      );
    } catch (error) {
      console.error("Failed to update task:", error);
      alert("Something went wrong");
    }
  };

  // =========================
  // DELETE TASK
  // =========================
  const handleDeleteTask = async (taskId: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch("/api/tasks", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          id: taskId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to delete task");
        return;
      }

      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    } catch (error) {
      console.error("Failed to delete task:", error);
      alert("Something went wrong");
    }
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        alert("Logout failed");
        setLoggingOut(false);
        return;
      }

      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
      alert("Something went wrong");
      setLoggingOut(false);
    }
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090d16] text-white">
        <p className="text-slate-400">
          Loading dashboard...
        </p>
      </main>
    );
  }

  // =========================
  // NOT LOGGED IN
  // =========================
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

        {/* ================= SIDEBAR ================= */}
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

          {/* Bottom Section */}
          <div className="absolute bottom-6 w-[216px]">

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              ⚙️ Settings
            </button>

            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/10 hover:text-red-300 disabled:opacity-50"
            >
              🚪
              {loggingOut ? "Logging out..." : "Logout"}
            </button>

            {/* User */}
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

        {/* ================= MAIN ================= */}
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

              <button
                onClick={handleAddTask}
                disabled={addingTask}
                className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] disabled:opacity-50 sm:block"
              >
                {addingTask ? "Adding..." : "+ Add Task"}
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/10 text-sm font-semibold text-purple-300">
                {user.name.charAt(0).toUpperCase()}
              </div>

            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-5 sm:p-8">

            {/* ================= STATS ================= */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

              {/* Tasks */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-500">
                  Total Tasks
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <h2 className="text-3xl font-bold">
                    {tasks.length}
                  </h2>

                  <span className="text-xs text-emerald-400">
                    Live
                  </span>
                </div>
              </div>

              {/* Habits */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-500">
                  Habits
                </p>

                <div className="mt-3 flex items-end justify-between">
                  <h2 className="text-3xl font-bold">
                    {habits.length}
                  </h2>

                  <span className="text-xs text-purple-400">
                    Active
                  </span>
                </div>
              </div>

              {/* Goals */}
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

              {/* Productivity */}
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

            {/* ================= TASKS + STREAK ================= */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">

              {/* Tasks */}
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

                  <button
                    onClick={handleAddTask}
                    disabled={addingTask}
                    className="text-sm text-purple-400 hover:text-purple-300 disabled:opacity-50"
                  >
                    {addingTask ? "Adding..." : "+ Add"}
                  </button>

                </div>

                <div className="mt-6 space-y-3">

                  {tasksLoading ? (
                    <p className="text-sm text-slate-500">
                      Loading tasks...
                    </p>
                  ) : tasks.length === 0 ? (

                    <div className="rounded-xl border border-dashed border-white/10 p-6 text-center">

                      <p className="text-sm text-slate-500">
                        No tasks yet.
                      </p>

                      <button
                        onClick={handleAddTask}
                        className="mt-3 text-sm text-purple-400 hover:text-purple-300"
                      >
                        Add your first task
                      </button>

                    </div>

                  ) : (

                    tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                      >

                        <button
                          onClick={() => handleToggleTask(task)}
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                            task.completed
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "border border-purple-400/30 hover:border-purple-400"
                          }`}
                        >
                          {task.completed ? "✓" : ""}
                        </button>

                        <div className="flex-1">

                          <p
                            className={`text-sm ${
                              task.completed
                                ? "text-slate-500 line-through"
                                : "text-slate-300"
                            }`}
                          >
                            {task.title}
                          </p>

                          <p className="mt-1 text-xs text-slate-600">
                            {task.completed
                              ? "Completed"
                              : "Pending"}
                          </p>

                        </div>

                        <div className="flex items-center gap-3">

                          <span
                            className={`rounded-full px-2 py-1 text-[10px] ${
                              task.completed
                                ? "bg-emerald-500/10 text-emerald-400"
                                : "bg-purple-500/10 text-purple-400"
                            }`}
                          >
                            {task.completed ? "Done" : "Pending"}
                          </span>

                          <button
                            onClick={() =>
                              handleDeleteTask(task.id)
                            }
                            title="Delete task"
                            className="rounded-lg px-2 py-1 text-sm text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                          >
                            🗑️
                          </button>

                        </div>

                      </div>
                    ))

                  )}

                </div>
              </div>

              {/* Current Streak */}
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

            {/* ================= HABITS + GOALS ================= */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">

              {/* REAL HABITS */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="font-semibold">
                      Today's Habits
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                      Build your daily routine
                    </p>
                  </div>

                  <button
                    onClick={handleAddHabit}
                    disabled={addingHabit}
                    className="text-sm text-purple-400 hover:text-purple-300 disabled:opacity-50"
                  >
                    {addingHabit ? "Adding..." : "+ Add"}
                  </button>

                </div>

                <div className="mt-5 space-y-3">

                  {habitsLoading ? (

                    <p className="text-sm text-slate-500">
                      Loading habits...
                    </p>

                  ) : habits.length === 0 ? (

                    <div className="rounded-xl border border-dashed border-white/10 p-6 text-center">

                      <p className="text-sm text-slate-500">
                        No habits yet.
                      </p>

                      <button
                        onClick={handleAddHabit}
                        className="mt-3 text-sm text-purple-400 hover:text-purple-300"
                      >
                        Add your first habit
                      </button>

                    </div>

                  ) : (

                    habits.map((habit) => (
                      <div
                        key={habit.id}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                      >

                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
                            habit.completed
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "border border-white/10 text-slate-600"
                          }`}
                        >
                          {habit.completed ? "✓" : ""}
                        </div>

                        <span
                          className={`text-sm ${
                            habit.completed
                              ? "text-slate-500 line-through"
                              : "text-slate-300"
                          }`}
                        >
                          {habit.name}
                        </span>

                      </div>
                    ))

                  )}

                </div>

              </div>

              {/* Active Goals */}
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