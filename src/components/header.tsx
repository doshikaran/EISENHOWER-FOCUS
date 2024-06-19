"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-[#fefae0] border-b text-foreground py-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link
              href="/"
              className="font-bold text-slate-800 dark:text-slate-50"
            >
              EISENHOWER FOCUS
            </Link>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/dashboard"
                  className={`${
                    pathname === "/dashboard" 
                     ? "text-green-900 font-semibold tracking-widest uppercase"
                      : " tracking-widest uppercase hover:text-gray-600"
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/tasks"
                  className={`${
                    pathname === "/tasks"
                      ? "text-green-900 font-semibold tracking-widest uppercase"
                      : " tracking-widest uppercase hover:text-gray-600"
                  }`}
                >
                  Tasks
                </Link>
              </li>
              <li>
                <Link
                  href="/challenges"
                  className={`${
                    pathname === "/challenges"
                      ? "text-green-900 font-semibold tracking-widest uppercase"
                      : " tracking-widest uppercase hover:text-gray-600"
                  }`}
                >
                  Challenges
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-5 items-center">
            <UserButton />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
