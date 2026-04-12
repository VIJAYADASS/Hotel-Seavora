import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Navbar />     
      <main className="pt-0">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;