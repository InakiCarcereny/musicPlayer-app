import { Poppins } from "next/font/google";
import "./globals.css";
import { NavLinks } from "./components/NavLinks";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} max-w-[600px] mx-auto w-full flex flex-col h-screen bg-slate-200`}>
        
        <main className="flex flex-col flex-1">
          {children}
        </main>

        <footer className="flex items-center justify-center gap-12">
          <NavLinks />
        </footer>  
      </body>
    </html>
  );
}
