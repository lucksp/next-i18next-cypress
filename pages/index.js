const Index = () => null;

export async function getServerSideProps({ locale }) {
  return {
    redirect: {
      destination: `${locale !== "en" ? `/${locale}` : ""}/redirected`,
      permanent: true,
    },
  };
}

export default Index;
