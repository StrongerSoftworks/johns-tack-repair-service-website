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
      <div className="flex flex-col max-w-7xl bg-slate-100">
        <Header />
        <div className="mx-2 md:mx-16 lg:mx-28 mt-32">
          <About />
          <Contact />
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default App;
