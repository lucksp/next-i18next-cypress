import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { IndexContent } from "../features/IndexContent";

const AccountIndex = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t("commonTitle")}`}</title>
        <meta
          property="og:title"
          content={` ${t("commonTitle")}`}
          key="title"
        />
      </Head>
      <IndexContent />
    </>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  // exposes `_nextI18Next` as props which includes our namespaced files
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default AccountIndex;
