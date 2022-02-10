import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, title, description }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      <div>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: "Josué L.",
  description: "Desarrollador Front-End",
};
