import '@/styles/globals.css'
import Layout from "@/components/Layout";
import App from "next/app";

export default function myApp({ Component, pageProps }) {
  const navData = [
    { name: "Home", link: "/" },
    { name: "Athens", link: "/projects/athens" },
    { name: "Tomato", link: "/projects/tomato" },
    { name: "Colours", link: "/projects/colours" },
  ];

  

  return (
    <Layout navData={navData}>
      <Component {...pageProps} />
    </Layout>
  );
}

myApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
