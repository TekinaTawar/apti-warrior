import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import bg from "public/images/bg.png";

import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { useGetUserProfileQuery } from "@/redux/user/userSlice";

const BgImage = styled(Image)`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -99;
`;

const Layout = ({ children }) => {
  const cookies = new Cookies();
  // const router = useRouter();
  const jwt = cookies.get("jwt");
  const {} = useGetUserProfileQuery({skip: !jwt});


  // if (jwt) {
  //   if (router.pathname.startsWith("/auth")) {
  //     router.push("/dashboard");
  //   }
  // } else {
  //   if (!router.pathname.startsWith("/auth")) {
  //     router.push("/auth/login");
  //   }
  // }
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
