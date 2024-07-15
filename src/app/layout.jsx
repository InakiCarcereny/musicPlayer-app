import { Poppins } from "next/font/google";
import "./globals.css";
import { NavLinks } from "./components/NavLinks";
import { Providers } from "../redux/provider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} max-w-[600px] mx-auto w-full flex flex-col h-screen bg-slate-200`}>
        
        <Providers>
          <main className="flex flex-col flex-1 mx-4 sm:mx-0">
            {children}
          </main>
        </Providers>

        <footer className="max-w-[600px] mx-auto w-full flex fixed bottom-0 left-0 right-0 items-center justify-center gap-12 shadow-xl bg-gray-100 rounded-tr-xl rounded-tl-xl pt-4">
          <NavLinks />
        </footer>  
      </body>
    </html>
  );
}
