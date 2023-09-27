import "/styles/globals.css";
import { Inter, Orbitron } from "@next/font/google";
import Navbar from "@/components/Navbar/Navbar";
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
        {/* Background */}
        {/* --> checkered lines */}
        <div className="absolute -z-50 h-full w-full">
          <div>
            {[...Array(7)].map((_, index) => (
              <div
                key={index}
                className="absolute h-0.5 w-full bg-gray-50 shadow-inner"
                style={{ marginTop: `calc(128px * ${index + 1})` }}
              />
            ))}
          </div>
          <div className="flex flex-row">
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                className="absolute h-full w-0.5 bg-gray-50 shadow-inner"
                style={{ marginLeft: `calc(128px * ${index + 1})` }}
              />
            ))}
          </div>
        </div>
        {/* --> left to right gradient */}
        <div className="absolute -z-40 h-full w-full bg-gradient-to-r from-white to-transparent" />
        {/* --> bottom to top gradient */}
        <div className="absolute -z-40 mt-[200px] h-full w-full bg-gradient-to-t from-white to-transparent" />
        {/* Main Content */}
        <div className="z-50 m-auto max-w-screen-xl space-y-32 px-20 py-14 text-gray-900">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
