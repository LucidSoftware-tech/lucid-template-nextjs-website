import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Icons } from "@/config/icons";

const teamMembers = [
  { name: "Jane Smith", role: "CEO & Co-Founder", bio: "Passionate about building tools that empower teams to ship faster and more confidently." },
  { name: "Alex Johnson", role: "CTO & Co-Founder", bio: "Full-stack engineer obsessed with clean architecture, performance, and developer experience." },
  { name: "Sam Williams", role: "Head of Design", bio: "Believes great design is invisible. Focused on creating intuitive, beautiful interfaces." },
];

export const metadata = {
  title: "About",
  description: `Learn more about the team and mission behind ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16 lg:pt-36">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            We build tools that <span className="text-primary">matter</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl leading-relaxed">
            {siteConfig.name} was founded on a simple belief: developers deserve better starting points.
            We create foundations that let you focus on what makes your product unique.
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
                  Every great product starts the same way — weeks spent on setup, configuration, and boilerplate before a single feature gets built.
                </p>
                <p>
                  We set out to change that. Not with a rigid framework, but with a clean, 
                  modern template that follows industry best practices while staying flexible enough 
                  to fit any vision.
                </p>
                <p>
                  {siteConfig.name} is the result: a production-ready starting point that combines 
                  thoughtful architecture with beautiful defaults, so you can ship your best work faster.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl bg-muted/30 aspect-square sm:aspect-video lg:aspect-square overflow-hidden flex items-center justify-center border shadow-inner">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
               <Icons.home className="h-32 w-32 text-primary/20" />
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
              A small, focused team dedicated to building excellent software.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="group relative rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-6 h-24 w-24 rounded-full bg-muted/50 mx-auto overflow-hidden ring-4 ring-background flex items-center justify-center">
                  <Icons.users className="h-10 w-10 text-muted-foreground/40" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to build something great?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Get in touch and let&apos;s discuss how we can help you ship faster.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold">
              Contact Us <Icons.chevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
