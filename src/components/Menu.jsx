import Link from "next/link";
import styled from "styled-components";

export default function Menu() {
  return (
     <StyledNav>
      <Link href="/blog">Blog</Link>
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
    font-weight: bold; 
    /* transition: color 0.3s ease;  */
  }

  .live {
    margin-left: 5px;
    border: solid 1px #cf0d0d;
    font-weight: 300;
    font-size: 13px;
    padding: 2px;
    border-radius: 2px;

    &:hover {
      background-color: #cf0d0d;
    }
  }
  
`;
