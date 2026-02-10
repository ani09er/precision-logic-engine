import Navigation from "./Navigation";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 overflow-hidden">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
