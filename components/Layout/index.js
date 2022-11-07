import Head from "next/head";

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Apti Warrior</title>
        <meta name="description" content="Gamify your Aptitude Practice" />
      </Head>
      {children}
    </>
  );
};
export default Layout;
