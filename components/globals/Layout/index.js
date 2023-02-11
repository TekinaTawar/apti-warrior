import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import bg from "public/images/bg.png";
import { useSelector } from "react-redux";
import { selectError } from "@/redux/UI/uiSlice";
import { toast } from "react-toastify";

const BgImage = styled(Image)`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -99;
`;

const Layout = ({ children }) => {
  // const _error = useSelector(selectError);

  // toast.error(_error);
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
