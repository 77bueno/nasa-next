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
      <section className="sessao-textos"> 
        <h2>Artemis I</h2>
        <h3 className="documentary">O documentário</h3>
        <p>Através do programa Artemis, a NASA mais uma vez pousará humanos na Lua. Acompanhe a jornada da NASA conforme lançamos nosso foguete Space Launch System (SLS) — o foguete mais poderoso que já construímos — e a nave espacial Orion em um teste de voo ao redor da Lua.</p>

        <button>Assista</button>
      </section>
    </StyledLive>

    <StyledLive2>
      <h2 className="primeiroh2">Eventos Ao Vivo e Transmissões Oficiais</h2>
      <p className="aovivo">saiba mais no site oficial</p>

      <hr />

      <section className="lives">
        <iframe width="350" height="250" src="https://www.youtube.com/embed/21X5lGlDOfg?si=UUVBkNr6j69NvlBx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>  

        <iframe width="350" height="250 " src="https://www.youtube.com/embed/jPTD2gnZFUw?si=jGiHFw8eaqeOL_lq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>

        <iframe width="350" height="250" src="https://www.youtube.com/embed/P9C25Un7xaM?si=XPT_6pOfMNgiM6N_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
      </section>
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

  

  @media screen and (min-width: 600px) { 
    p {
      max-width:  70%;
    }
  }

  @media screen and (min-width: 1000px) { 
    height: 100vh;
    background-image: linear-gradient(to right, black, transparent), url("images/nasa-artemis.png");

    p {
      max-width: 50%;
      font-size: 20px;
    }

    h2 {
      font-size: 4rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1400px) { 
    .sessao-textos {
      padding: 4rem 0 0 6rem;
    }
  }

  @media screen and (min-width: 1700px) { 
    .sessao-textos {
      padding: 4rem 0 0 14rem;
    }

    p {
      max-width: 50%;
      line-height: 1.8rem;
      font-size: 22px;
    }

    h2 {
      font-size: 4.5rem;
    }

    h3 {
      font-size: 2rem;
    }
  }
`;



const StyledLive2 = styled.section`

  .primeiroh2 {
    font-size: 2rem;
    padding: 9rem 2rem 0 0;
    margin: 0 0 0 2rem;
  }

  p {
    line-height: 1.5rem;
    margin: 1.5rem 1rem 0 2rem;
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
    margin: 2rem 2rem 0.5rem 2rem;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  iframe {
    padding: 0 2rem 1rem 2rem;
    width: 100%;
  }

  @media screen and (min-width: 1000px) {
      iframe {
      width: 100%;
      height: 250px;
      max-width: 70vw;
      padding: 0 2rem 2rem 2rem;
    }

    h2, p {
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (min-width: 1700px) {
    h2, p {
      text-align: center;
      
    }

    p {
      padding-top: 1rem;
    }
  }
  
`;