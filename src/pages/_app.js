import "@/styles/globals.css";
import Layout from "/src/components/UI/Layout.jsx";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}