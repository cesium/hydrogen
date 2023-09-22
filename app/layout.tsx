import "/styles/globals.css";
import { Inter, Orbitron } from "@next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--orbitron-font" });

export const metadata = {
  title: "Hydrogen",
  description: "CeSIUM landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        {/* Top Orange Bar */}
        <div className="h-2 w-full bg-cesium-900" />
        {/* Main Content */}
        <div className="m-auto max-w-screen-xl space-y-32 px-20 py-14 text-gray-900">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
