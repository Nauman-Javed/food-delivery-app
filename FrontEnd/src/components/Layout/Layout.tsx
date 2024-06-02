import { Footer } from "@/collection/Global/Footer/Footer";
import { Navbar } from "@/collection/Global/Navbar/Navbar";
import { Promotion } from "@/collection/Global/Promotion/Promotion";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <main>
      <div className="max-w-[1528px]  m-auto min-h-screen">
        {path == "/profile" ? null : <Promotion />}
        {path == "/profile" ? null : <Navbar />}
        {children}
      </div>
      <div className="">
        <Footer />
      </div>
    </main>
  );
};
