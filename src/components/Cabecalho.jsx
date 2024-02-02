import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import styled from "styled-components";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <div className="limitador">
      <Link className="lupa" href="/contato">
          <Image
            src="/images/icon-lupa.svg"
            width={35}
            height={35}
            alt="Icone Lupa"
          />
        </Link>
        <h1 className="logo">
          <Link href="/">
            <Image
              src="/images/nasa-logo.svg"
              width={55}
              height={55}
              alt="Logo NASA"
            />
          </Link>
        </h1>
        <Menu />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: black;
  width: 100%;
  z-index: 555;
  

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    padding: 1rem 0 0 0;
    align-items: center;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .limitador {
  width: 95%;
  max-width: 1350px;
  margin: auto;
}
`;
