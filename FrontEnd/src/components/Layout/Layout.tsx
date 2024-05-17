import { Footer, Navbar, Promotion } from "@/collection";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <div className="max-w-[1528px] m-auto min-h-screen">
        <Promotion />
        <Navbar />
        {children}
      </div>
      <div className="">
        <Footer />
      </div>
    </main>
  );
};
