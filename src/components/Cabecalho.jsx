import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import styled from "styled-components";

export default function Cabecalho() {
  return (
    <StyledHeader>
      <div className="limitador">
            <Menu />
          <h1>
            <Link className="logo" href="/">
                <Image
                src="/images/nasa-logo.svg"
                width={55}
                height={55}
                alt="Logo NASA"
                />
            </Link>
          </h1>

          <Link className="lupa" href="/contato">
            <Image 
              src="/images/icon-lupa.svg"
              width={44}
              height={44}
              alt="Icone Lupa" 
            />
          </Link>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
    background-color: black;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: white;
    }
    
`;