import { Outlet } from "react-router-dom";
import cls from "./MainLayout.module.scss";
import { Header } from "@/components/Header";
import { useTheme } from "@/hooks/useTheme";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ModalItem } from "@/components/ModalItem";
import { useContext } from "react";
import { LayoutContext } from "@/providers/LayoutContextProvider";

const MainLayout = () => {
  const { theme } = useTheme();

  const { isOpen, setIsOpen } = useContext(LayoutContext);

  return (
    <div id="app" className={`app ${theme}`}>
      <Header />

      <main className={cls.main}>
        <div className={cls.container}>
          <div className={cls.body}>
            <Navbar />

            <Outlet />
          </div>
        </div>
      </main>

      <Footer />

      <ModalItem isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export { MainLayout };
