"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/config/icons";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useUIStore } from "@/store";
import { cn } from "@/lib/cn";
import { useEffect } from "react";

export function Sidebar({ className }) {
  const pathname = usePathname();
  const { isSidebarOpen, setSidebarOpen } = useUIStore();

  // Close sidebar on mobile after navigation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Init
    return () => window.removeEventListener("resize", handleResize);
  }, [setSidebarOpen]);

  return (
    <>
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 translate-x-0 transform border-r bg-card transition-transform duration-200 ease-in-out lg:static lg:block",
          !isSidebarOpen && "-translate-x-full lg:translate-x-0 lg:w-0 lg:overflow-hidden lg:border-0",
          className
        )}
      >
        <div className="flex h-14 items-center justify-between border-b px-4 lg:justify-start">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold tracking-tight">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-primary-foreground text-xs">
              {siteConfig.logoText[0]}
            </div>
            {siteConfig.name}
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1 text-muted-foreground hover:text-foreground"
          >
            <Icons.close className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-2 pt-2">
          {navigationConfig.map((item) => {
            const Icon = Icons[item.icon];
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {Icon && <Icon className="h-4 w-4 shrink-0" />}
                {item.title}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
