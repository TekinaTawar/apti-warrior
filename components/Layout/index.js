import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import bg from "public/bg.png";

const BgContainer = styled.div`
position: absolute;
height: 100%;
width: 100%;
z-index: -99;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Apti Warrior</title>
        <meta name="description" content="Gamify your Aptitude Practice" />
      </Head>
      <BgContainer>
        <Image src={bg} alt="background" layout="fill" objectFit="cover" />
      </BgContainer>
      {children}
    </>
  );
};
export default Layout;
