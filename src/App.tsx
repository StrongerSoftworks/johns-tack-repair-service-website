import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MenuSidebar } from "@/components/Menu/MenuSidebar";

import "./styles/main.css";

function App() {
  return (
    <SidebarProvider defaultOpen={false}>
      <MenuSidebar />
      <main className="flex flex-col">
        <Header />
        <div className="mx-2 md:mx-16 lg:mx-28 mt-48">
          <About />
          <Contact />
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;
