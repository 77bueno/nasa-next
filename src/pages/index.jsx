import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>NASA</title>
        <meta name="keywords" content="Administração Nacional Aeronáutica e Espacial" />
      </Head>
        <StyledSection>
          <h2>O Eclipse <br /> que Encantou a Terra</h2>
          <br />
          <p>Desvendando o Universo com a NASA: Explorações Cósmicas, Pesquisas Avançadas <br /> e Fascinantes Descobertas Astronômicas para Iluminar o Nosso Conhecimento Celestial</p>

          <button className="botaoDestaque">Leia mais</button>

          <section className="mini-noticias">
            <hr />
            <p>geral</p>
            <h3>
              Historia do Eclipse 
              <Link href="/">
              <Image
               className="botaoSeta"
               src="/images/botao-seta.svg"
               width={23} height={23}
               alt="Botão com uma seta" 
              />
              </Link>
            </h3>
          </section>

        </StyledSection>

        <StyledHr>
          <p>geral</p>
          <h3>eclipse history</h3>
        </StyledHr>
    </>
  );
}

const StyledSection = styled.section`
  color: #ffffff;
  background-image: url("images/nasa-eclipse2.png");
  background-size: cover;
  height: 95vh;
  background-repeat: no-repeat;
  padding: 0 0 0 2rem;


  h2 {
    font-size: 60px;
    padding-top: 7rem;
    
  }

  p {
    line-height: 1.5rem;
  }

  .botaoDestaque {
    background-color: #cf0d0d;
    border: none;
    padding: 8px;
    margin: 1.5rem 0 0 0;
    border-radius: 6px;
    width: 10rem;
    height: 2.5rem;
    color: #ffff;
    font-weight: bold;
    font-size: 18px;
  }

  hr {
  border: none;
  height: 1px;
  width: 22rem;
  background: rgba(255, 255, 255, 0.3);  
  margin: 5rem 0 0 0;
}

.mini-noticias p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 3.5px;
  font-size: .7rem;
  line-height: 2rem;
  text-transform: uppercase;
}

.mini-noticias h3 {
  display: flex;
  align-items: center;
}

.botaoSeta {
  margin: 0.5rem 0 0 1rem;
}
`;

const StyledHr = styled.section`

`;