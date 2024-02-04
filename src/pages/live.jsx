import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Live() {
  return (
    <>
    <Head>
        <title>NASA - Ao Vivo</title>
      </Head>
    <StyledLive>
      <h2>Artemis I</h2>
      <h3 className="documentary">O documentário</h3>
      <p>Através do programa Artemis, a NASA mais uma vez pousará humanos na Lua. Acompanhe a jornada da NASA conforme lançamos nosso foguete Space Launch System (SLS) — o foguete mais poderoso que já construímos — e a nave espacial Orion em um teste de voo ao redor da Lua.</p>

      <button>Assista</button>
    </StyledLive>

    <StyledLive2>
      <h2 className="primeiroh2">Eventos Ao Vivo e Transmissões Oficiais</h2>
      <p className="aovivo">Live dos perfis oficiais</p>

      <hr />
      <iframe width="380" height="250" src="https://www.youtube.com/embed/21X5lGlDOfg?si=UUVBkNr6j69NvlBx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <h2>Live para fins educacionais</h2>  

      <hr />
      <iframe width="380" height="250 " src="https://www.youtube.com/embed/jPTD2gnZFUw?si=jGiHFw8eaqeOL_lq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </StyledLive2>
    </>
  )
}

const StyledLive = styled.section`
  color: #ffffff;
  background-image: linear-gradient(to right, black, transparent), url("images/nasa-artemis2.png");
  background-size: cover;
  height: 75vh;
  background-repeat: no-repeat;
  padding: 0 0 0 2rem;


  h2 {
    font-size: 2.9rem;
    padding-top: 9rem;
  }

  p {
    line-height: 1.5rem;
    margin: 1.5rem 2rem 0 0;
    font-size: 18px;
  }

  .documentary {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 3.5px;
  }

  button {
    background-color: #cf0d0d;
    border: none;
    padding: 8px;
    margin: 1.5rem 0 0 0;
    width: 10rem;
    height: 2.5rem;
    color: #ffff;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
`;

const StyledLive2 = styled.section`
  margin: 0 0 0 2rem;

  .primeiroh2 {
    font-size: 2rem;
    padding: 9rem 2rem 0 0;
  }

  p {
    line-height: 1.5rem;
    margin: 1.5rem 1rem 0 0;
    font-size: 18px;
  }

  .aovivo {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 3.5px;
  }

  iframe {
    margin-top: 1rem;
  }

  hr {
    margin: 2rem 2rem 0.5rem 0;
  }
`;