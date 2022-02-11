import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <div>
        <Navbar />

        <main>
          <h1>HASKLDJSALK</h1>
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}

Layout.defaultProps = {
  title: "Josué L.",
  description: "Desarrollador Front-End",
};
