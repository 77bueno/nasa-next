import Link from "next/link";
import styled from "styled-components";

export default function Menu() {

  return (
    <StyledNav>

        <h2><a href="" class="icone"> &equiv; </a></h2>

   
            <Link href="/">Blog</Link>
            <Link href="/sobre">Sobre Nós</Link>
            <Link href="/contato">Contate-nos</Link>
            <Link href="/live">NASA <span>LIVE</span></Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
    
`;