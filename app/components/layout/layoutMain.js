import Footer from "./footer";
import Header from "./header";

export default function LayoutMain({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
