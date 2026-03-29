"use client";

import { useState } from "react";
import { Icons } from "@/config/icons";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      e.target.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Header Section */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 text-center px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in touch</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;re here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          
          {/* Contact Info Block */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="grid gap-6">
              
              <div className="flex items-start">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icons.mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Email Sales</h3>
                  <p className="text-muted-foreground mt-1 text-sm">sales@example.com</p>
                  <p className="text-muted-foreground text-sm">Response in 1-2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icons.settings className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Technical Support</h3>
                  <p className="text-muted-foreground mt-1 text-sm">support@example.com</p>
                  <p className="text-muted-foreground text-sm">24/7 prioritized resolution</p>
                </div>
              </div>
              
            </div>

            <div className="pt-8 border-t">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Can I use this for multiple projects?</strong><br/>Yes, the standard license allows an unlimited number of personal projects.</p>
                <p><strong className="text-foreground">Do you offer refunds?</strong><br/>We offer a 14-day money-back guarantee if you&apos;re unhappy.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border bg-card p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email address</label>
                <Input id="email" type="email" placeholder="john@example.com" icon={Icons.mail} required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="How can we help you?" required className="min-h-[120px]" />
              </div>

              <Button type="submit" className="w-full h-11" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </span>
                ) : "Send Message"}
              </Button>
              
              {isSuccess && (
                <div className="mt-4 p-3 rounded-md bg-green-500/10 text-green-600 text-sm font-medium flex items-center border border-green-500/20">
                  <span className="flex h-5 w-5 rounded-full bg-green-500 items-center justify-center text-white mr-2 text-xs">✓</span>
                  Message sent successfully! We&apos;ll be in touch soon.
                </div>
              )}
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
