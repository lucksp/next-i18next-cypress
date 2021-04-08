import { appWithTranslation } from "next-i18next";
import Cookie from "js-cookie";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }
  let userDate;
  if (Cookie.get("userDate")) {
    userDate = null;
  } else {
    Cookie.set("userDate", new Date().toISOString());
    userDate = Cookie.get("userDate");
  }

  pageProps.userDate = userDate;

  return { pageProps };
};

export default appWithTranslation(MyApp);
