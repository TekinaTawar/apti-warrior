import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import bg from "public/images/bg.png";

const BgImage = styled(Image)`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Apti Warrior</title>
        <meta name="description" content="Gamify your Aptitude Practice" />
      </Head>
      <BgImage src={bg} alt="" />
      {children}
    </>
  );
};
export default Layout;
