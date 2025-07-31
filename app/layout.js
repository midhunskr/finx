import { Lexend } from "next/font/google";
import "./globals.css";

const lexendSans = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Finx | Effortless Financial Reporting for Smarter Decisions",
  description: "Create accurate financial reports quickly and confidently — no complexity, just clarity.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lexendSans.variable} antialiased overflow-y-scroll snap-y snap-mandatory`}>
        <main>{children}</main>
        <footer className="px-5 py-10 bg-green-dark justify-between text-light text-center md:px-12 lg:px-20 lg:py-5 xxl:px-64 xl:px-40 xl:py-10 xxxl:px-80 xxxl:py-10">
          <div className="flex flex-col items-start justify-between space-y-4">
            <div className="flex items-center justify-center w-full pt-14">
              <p className="text-sm text-text-disabled">© 2025 Finx | All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
