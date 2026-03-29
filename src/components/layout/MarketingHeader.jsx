"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/config/icons";
import { cn } from "@/lib/cn";
import { useState, useEffect } from "react";

export function MarketingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tighter text-lg">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs">
            {siteConfig.logoText[0]}
          </div>
          {siteConfig.name}
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
          <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:inline-block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </Link>
          <Link href="/contact">
            <Button size="sm" className="rounded-full px-5">Get Started <Icons.chevronRight className="ml-1 h-3 w-3" /></Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
