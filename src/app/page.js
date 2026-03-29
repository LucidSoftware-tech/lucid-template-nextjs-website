import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-2xl">
        {siteConfig.description}
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/login">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link href="/dashboard">
          <Button size="lg" variant="outline">View Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
