/* eslint-disable react/prop-types */
import "./Layout.css";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="fullwidth">
        <Header />
      </div>
      <main className="layout-content">{children}</main>
      <div className="fullwidth">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
