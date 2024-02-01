import Link from "next/link";
import styled from "styled-components";

export default function Menu() {
  return (
    <StyledNav>
      <Link href="/">Blog</Link>
      <Link href="/sobre">Sobre Nós</Link>
      <Link href="/contato">Contate-nos</Link>
      <Link href="/live">NASA+<span className="live">LIVE</span></Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  a {
    margin-right: 20px;
    text-decoration: none;
    color: white;
    font-weight: bold; /* Adicione negrito para dar mais destaque aos links */
    transition: color 0.3s ease; /* Adicione uma transição suave na cor */
  }

  .live {
    margin-left: 5px;
    border: solid 1px red;
    font-weight: 300;
    font-size: 13px;
    padding: 2px;
    border-radius: 2px;

    &:hover {
      background-color: red;
    }
  }

  
`;
