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
            <div>
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
            </div>

            <section>
            <p>Missões Futuras</p>
            <h3>
               VIPER II
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

            <section>
            <p>Atualizações da Estação Espacial</p>
            <h3>
              Nasa Blog 
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
          </section>

        </StyledSection>

        <StyledHr>
          <h2>A Mudança <br />
          Do Nosso Planeta</h2>
          <p>Por mais de 50 anos, os satélites da NASA forneceram dados <br /> sobre a terra, a água, o ar, a temperatura e o clima da Terra. <br /> O Centro de Informação da Terra da NASA permite aos visitantes <br /> ver como o nosso planeta está a mudar em seis áreas principais: <br /> aumento do nível do mar e impactos costeiros, saúde e qualidade do ar, <br /> incêndios florestais, gases com efeito de estufa, energia sustentável e agricultura.</p>

        <h3>
            Comece a explorar 
            <Link href="/">
            <Image
              className="botaoSeta"
              src="/images/botao-seta.svg"
              width={23} height={23}
              alt="Botão com uma seta" 
            />
            </Link>
          </h3>
          
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
    cursor: pointer;
  }


.mini-noticias p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 3.5px;
  font-size: .7rem;
  line-height: 2rem;
  text-transform: uppercase;
}

.mini-noticias {
  display: flex;
  margin: 3.5rem 0 0 0;
}

.mini-noticias section {
  border: none;
  height: 1px;
  width: 22rem;
  background: rgba(255, 255, 255, 0.3);
  margin:  2rem 1.5rem  0 1.5rem;
}

.mini-noticias div {
  border: none;
  height: 1px;
  width: 22rem;
  background: rgba(255, 255, 255, 0.3);
  margin:   2rem 1.5rem 0 0;
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
  color: #ffffff;
  background-image: url("images/imagem-nasa.png");
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  padding: 0 0 0 2rem;

  h2 {
    font-size: 80px;
    padding: 12rem 0 3rem 0;
  }

  p {
    line-height: 1.5rem;
    font-size: 1.2rem;
  }

  h3 {
    display: flex;
    align-items: center;
    margin-top: 1.4rem;
  }

  .botaoSeta {
    margin: 0.5rem 0 0 1rem;
  }


`;