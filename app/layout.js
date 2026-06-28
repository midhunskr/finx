import { Lexend } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const lexendSans = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.finxofficial.com'),
  title: "Finx | Effortless Financial Reporting for Smarter Decisions",
  description: "Create accurate financial reports quickly and confidently — no complexity, just clarity.",
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Finx | Effortless Financial Reporting for Smarter Decisions",
    description: "Create accurate financial reports quickly and confidently — no complexity, just clarity.",
    url: 'https://www.finxofficial.com',
    siteName: 'Finx',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Finx — Effortless Financial Reporting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Finx | Effortless Financial Reporting for Smarter Decisions",
    description: "Create accurate financial reports quickly and confidently — no complexity, just clarity.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Finx",
  description: "Accurate financial reporting and bookkeeping services for businesses",
  url: "https://www.finxofficial.com",
  telephone: ["+919497436877", "+966536096221"],
  email: "info@finxofficial.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Malaz",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  serviceType: ["Bookkeeping", "Accounting", "Financial Reporting"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lexendSans.variable} antialiased overflow-y-auto`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-green-accent focus:px-4 focus:py-2 focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>
        <Script
          async
          defer
          data-website-id="d829651f-2cca-41f4-a3ca-0a3690db4608"
          src="https://umami-one-theta.vercel.app/script.js"
        />
        <main id="main-content">{children}</main>
        <footer className="px-5 py-10 bg-green-dark text-light md:px-12 lg:px-20 lg:py-5 xxl:px-64 xl:px-40 xl:py-10 xxxl:px-80 xxxl:py-10">
          <div className="flex items-center justify-center w-full pt-14">
            <p className="text-sm text-text-disabled">© {new Date().getFullYear()} Finx | All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
