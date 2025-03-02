import Header from "@/components/Header";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { SidebarProvider } from "@/components/ui/sidebar";
import { MenuSidebar } from "@/components/Menu/MenuSidebar";

import "./styles/main.css";

function App() {
  return (
    <SidebarProvider defaultOpen={false}>
      <MenuSidebar />
      <div className="flex flex-col bg-slate-100 w-full">
        <Header />
        <div className="flex justify-center mx-2 mt-48">
          <div className="lg:max-w-4xl">
            <About />
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default App;
