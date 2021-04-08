import { useRouter } from "next/dist/client/router";
import { useTranslation } from "react-i18next";

const Details = () => {
  const router = useRouter();
  const { t } = useTranslation(["common", "account"]);
  return (
    <>
      <h2>{t("account:accountStatusHeader")}</h2>
      <div>{t("account:accountInfoDescription")}</div>
      <button
        type="button"
        onClick={() => {
          router.push("/");
        }}
      >
        {t("button.goBack")}
      </button>
    </>
  );
};

export { Details };
