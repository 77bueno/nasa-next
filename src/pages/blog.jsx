import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
  <>
    <Head>
        <title>NASA - Blog</title>
        <meta name="keywords" content="Administração Nacional Aeronáutica e Espacial" />
      </Head>

      <StyledBlog>
        <h1>oi</h1>

      </StyledBlog>
  </>
  )
}

const StyledBlog = styled.article`
  background-color: #fff;
`;