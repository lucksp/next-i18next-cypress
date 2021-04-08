import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Details } from "../../features/Account/Details";

const AccountIndex = () => {
  const { t } = useTranslation("account");

  return (
    <>
      <Head>
        <title>{`Testing | ${t("accountTitle")}`}</title>
        <meta
          property="og:title"
          content={`Testing | ${t("accountTitle")}`}
          key="title"
        />
      </Head>
      <Details />
    </>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  // exposes `_nextI18Next` as props which includes our namespaced files
  props: {
    ...(await serverSideTranslations(locale, ["common", "account"])),
  },
});

export default AccountIndex;
