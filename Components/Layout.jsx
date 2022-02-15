//Next.js
import Head from "next/head";

//components
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocialIzq from "./SocialIzq";
import SocialDer from "./SocialDer";

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
          <SocialIzq />
          {children}
          <SocialDer />
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
