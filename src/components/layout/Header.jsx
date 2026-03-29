"use client";

import { usePathname } from "next/navigation";
import { Icons } from "@/config/icons";
import { navigationConfig } from "@/config/navigation";
import { useUIStore, useAuthStore } from "@/store";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header({ className }) {
  const pathname = usePathname();
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  // Derive title from config based on pathname matching startsWith
  const currentNavItem = navigationConfig.find((item) => pathname.startsWith(item.href)) || { title: "Dashboard" };

  const handleLogout = () => {
    logout();
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  };

  return (
    <header className={cn("sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b bg-background px-4 sm:px-6", className)}>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background lg:hidden hover:bg-accent hover:text-accent-foreground"
        >
          <Icons.menu className="h-4 w-4" />
          <span className="sr-only">Toggle Sidebar</span>
        </button>
        <h1 className="text-lg font-semibold">{currentNavItem.title}</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium hidden sm:inline-block">{user?.name}</span>
          <Avatar fallback={user?.name?.[0]} />
        </div>
        <Button variant="ghost" size="icon" onClick={handleLogout} title="Logout">
          <Icons.logout className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>
    </header>
  );
}
