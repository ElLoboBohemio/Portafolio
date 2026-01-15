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
        <meta
          name="keywords"
          content="Content Editor, Salud, Divulgación Científica, Fact-checking, Estrategia Digital, Terapia Física, UCR"
        />
      </Head>
      <Navbar />
      <div>
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
  title: "Josué Lobo",
  description: "Josué Lobo | Content Editor & Especialista en Comunicación Científica",
};
