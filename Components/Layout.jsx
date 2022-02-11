//Next.js
import Head from "next/head";

//Components
import Footer from "./Footer";
import Navbar from "./Navbar";
import Social from "./Social";

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
          <Social />
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
