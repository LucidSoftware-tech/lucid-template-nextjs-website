import { MarketingHeader } from "@/components/layout/MarketingHeader";
import { MarketingFooter } from "@/components/layout/MarketingFooter";

export default function MarketingLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      <MarketingHeader />
      <main className="flex-1">
        {children}
      </main>
      <MarketingFooter />
    </div>
  );
}
