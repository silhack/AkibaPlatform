import ScrollToTopButton from "../ui/ScrollToTopButton";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="p-0">
        {children}
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
