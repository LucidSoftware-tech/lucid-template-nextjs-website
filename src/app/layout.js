import "./globals.css";
import { siteConfig } from "@/config/site";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
