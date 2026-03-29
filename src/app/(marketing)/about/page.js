import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Icons } from "@/config/icons";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-36">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Building the foundation of modern <span className="text-primary">software</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl leading-relaxed">
            At {siteConfig.name}, we believe that every great product starts with a solid foundation. 
            Our mission is to empower developers and entrepreneurs to build exceptional applications without 
            reinventing the mechanics of standard boilerplate.
          </p>
        </div>
      </section>

      {/* Story / Mission Section */}
      <section className="py-20 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  It all started with a simple observation: we were spending weeks building the same features for every new project. 
                  Authentication, dashboards, user management, and a design system.
                </p>
                <p>
                  We knew there had to be a better way. We didn't want a heavy, bloated framework that forced us into obscure patterns. 
                  We wanted standard React, standard Next.js, and standard Tailwind CSS, but perfectly orchestrated.
                </p>
                <p>
                  That's why we created {siteConfig.name}. An obsessively designed template focused on premium aesthetics and dense utility, letting you get straight to the code that matters.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl bg-muted/30 aspect-square sm:aspect-video lg:aspect-square overflow-hidden flex items-center justify-center border shadow-inner">
               <div className="absolute inset-0 bg-primary/5"></div>
               <Icons.settings className="h-32 w-32 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Meet the Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our small, dedicated team obsessed with shipping excellent software quickly.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((member) => (
              <div key={member} className="group relative rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-6 h-32 w-32 rounded-full bg-muted/50 mx-auto overflow-hidden ring-4 ring-background flex items-center justify-center">
                  <Icons.users className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-primary font-medium text-sm mb-4">Co-Founder & CEO</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    A serial builder who previously scaled multiple SaaS products from 0 to 1M ARR. Obsessed with high-performance UI.
                  </p>
                  <div className="flex justify-center space-x-3 text-muted-foreground">
                     {/* Dummy social links */}
                     <Link href="#" className="hover:text-foreground transition-colors"><Icons.mail className="h-4 w-4" /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Want to see what we've built?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Experience the standard of our templates starting today.
          </p>
          <Link href="/">
            <Button size="lg" variant="secondary" className="rounded-full px-8 text-primary font-semibold">
              Go to Home <Icons.chevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
