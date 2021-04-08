import { useRouter } from "next/dist/client/router";
import React from "react";
import { useTranslation } from "react-i18next";

const IndexContent = () => {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <>
      <div>
        <p>
          Hi this is a test component. You should see a translated form below.
          This particular paragraph is NOT translated
        </p>
      </div>
      <div>{t("login")}</div>
      <button
        onClick={() => {
          router.push("/account");
        }}
      >
        {t("button.submit")}
      </button>
    </>
  );
};

export { IndexContent };
