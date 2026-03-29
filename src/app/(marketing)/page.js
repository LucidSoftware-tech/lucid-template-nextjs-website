import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/config/icons";

export default function LandingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-32 lg:pt-36 lg:pb-48">
        {/* Subtle mesh background effect - simplified using Tailwind gradients */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-8 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Introducing Website Generation
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            {siteConfig.name} for <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">Exceptional Websites</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            {siteConfig.description} Go from zero to production-ready in minutes. 
            Stop building boilerplate and start building your product.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 text-base h-12">
                Start Building Free <Icons.chevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 text-base h-12 bg-background/50 backdrop-blur-sm">
                Explore Features
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 sm:mt-24 w-full max-w-5xl rounded-xl border border-border/50 bg-card/40 p-2 shadow-2xl backdrop-blur-xl">
            <div className="rounded-lg border bg-background overflow-hidden aspect-video flex items-center justify-center relative shadow-inner">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent z-0"></div>
               <div className="z-10 text-center space-y-4 p-6">
                 <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 ring-1 ring-primary/20">
                   <Icons.dashboard className="h-8 w-8" />
                 </div>
                 <h3 className="text-2xl font-bold">Gorgeous Default UI</h3>
                 <p className="text-muted-foreground max-w-md mx-auto">This area can be replaced with a screenshot of your actual app or a product video showcasing the dashboard.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to scale</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Built on industry standards: Next.js App Router, Tailwind CSS, and a comprehensive configuration system.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icons.dashboard className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Dynamic Dashboard</h3>
              <p className="text-muted-foreground">Config-driven sidebar, robust layout, and ready-to-use data tables with pagination and search.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icons.lock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Authentication</h3>
              <p className="text-muted-foreground">Pre-built auth flows integrated. Just swap out the mock services for your API in `lib/api-client.js`.</p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icons.settings className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Configuration First</h3>
              <p className="text-muted-foreground">Centralized settings inside the `config/` directory lets you re-theme and re-route the app in purely JSON/JS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl max-w-2xl mx-auto">
            Ready to completely transform your workflow?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Start generating full-stack SaaS project templates instantly. Stop rewriting the same setup over and over.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold text-primary h-12">
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
