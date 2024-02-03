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
            </div>
            <section>
            <hr />
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
            <hr />

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

        <StyledNoticiaDestaque>
          <h2>Noticias em Destaque</h2>

          <a href="/">
            <div className="noticiaMirim">
              <h4>
                <Image
                  className="imagem-noticia-mirim"
                  src="/images/botao-noticia.svg"
                  width={12} height={20}
                  alt="icone dentro de uma noticia" 
                /> 
                Noticias
              </h4>

              <section className="noticia-mirim-texto">
                <h4>Leitura rápida</h4>
                <p>NASA define cobertura para Estação Espacial</p>
              </section>
            </div>
          </a>

      
        </StyledNoticiaDestaque>

        <StyledBLog>
    <h1>NASA BLOG</h1>

    <section>
      <h2> Explorando Além dos Limites: Blog Espacial NASA-inspirado </h2>
      <p> Bem-vindo(a) ao nosso Blog Espacial, uma homenagem à grandiosa jornada da NASA. Aqui, mergulhamos nas maravilhas do cosmos, inspirados pela inigualável exploração espacial. De missões épicas a descobertas científicas extraordinárias, cada postagem é uma viagem pelo infinito..</p>

      <h3 className="h3botao">
          Recursos para Observação do Céu 
              
            <a href="">
            <Image
               className="botaoSeta"
               src="/images/botao-seta.svg"
               width={23} height={23}
               alt="Botão com uma seta" 
              />
            </a>
              
      </h3>
      <div className="videoH3">
      <iframe width="380" height="200" src="https://www.youtube.com/embed/iDAKTLmt2hs?si=mAtevu1E73b3KIIN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      
    </section>
        </StyledBLog>

        <StyledNoticia>
      <h2>HOJE</h2>
      <h3>Imagem de Hoje</h3>

      <Image
        src="/images/nasa-sun.png"
        width={370} height={300}
        alt="Imagem do Sol" 
              
      />

      <h3 className="botaoSt">
          Veja a imagem
          <Link href="/imagens">
          <Image
            className="botaoSeta"
            src="/images/botao-seta.svg"
            width={23} height={23}
            alt="Botão com uma seta"
          />
          </Link>
      </h3>

      <section className="subtitulo">
        <h3>Explorando a Temperatura do Sol</h3>
        <p>No coração de nosso sistema solar, o Sol reina supremo, uma esfera ardente de energia que desafia nossa compreensão. Seu núcleo, uma forja nuclear incandescente, atinge temperaturas de milhões de graus Celsius, desencadeando uma dança sublime de partículas e luz.</p>

        <h3>
          Arquivo de Imagens
          <Link href="/imagens">
          <Image
          className="botaoSeta2"
            src="/images/botao-seta.svg"
            width={23} height={23}
            alt="Botão com uma seta"
          />
          </Link>
      </h3>
      </section>
        </StyledNoticia>

        <StyledHr>
          <h2>A Mudança <br />
          Do Nosso Planeta</h2>
          <p>Por mais de 50 anos, os satélites da NASA forneceram dados sobre a terra, a água, o ar, a temperatura e o clima da Terra.  O Centro de Informação da Terra da NASA permite aos visitantes ver como o nosso planeta está a mudar em seis áreas principais: aumento do nível do mar e impactos costeiros, saúde e qualidade do ar, incêndios florestais, gases com efeito de estufa, energia sustentável e agricultura.</p>

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

        <StyledNoticia2>
      <h2>Explore o Universo a partir da sua Caixa de Entrada</h2>
      <p>Mantenha-se atualizado(a) sobre as últimas notícias da NASA – da Terra à Lua, do Sistema Solar e além.</p>

      <br />
      
      <p> Este site é dedicado exclusivamente a fins educativos e não tem intenção de obter lucro. Todo o conteúdo, imagens e informações apresentadas aqui são propriedade da NASA. Qualquer uso comercial ou reprodução do material deve ser feito em conformidade com os direitos autorais e permissões da NASA. Este site não é afiliado à NASA e <b>não tem a intenção de infringir os direitos autorais ou propriedade intelectual.</b></p>
      <h3 className="botaoSt">
        <a target="__blank" href="https://www.nasa.gov/">
          Site Oficial
          <Image
            className="botaoSeta"
            src="/images/botao-seta.svg"
            width={23} height={23}
            alt="Botão com uma seta"
          />
          </a>
      </h3>
        </StyledNoticia2>
    </>
  );
}

const StyledSection = styled.section`
  color: #ffffff;
  background-image: url("images/nasa-eclipse-mobile.png");
  background-size: cover;
  height: 95vh;
  background-repeat: no-repeat;
  padding: 0 2rem 0 2rem;


  h2 {
    font-size: 2.7rem;
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

  .botaoSeta {
    margin: 0.5rem 0 0 1rem;
  }

  .mini-noticias p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 3.5px;
  font-size: .7rem;
  line-height: 2rem;
  text-transform: uppercase;
} 

  hr {
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    border: none;
}

@media screen and (min-width: 650px ) {
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
  }

  .mini-noticias p {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 3.5px;
  font-size: .7rem;
  line-height: 2rem;
  text-transform: uppercase;
}

.mini-noticias {
  margin: 5rem 0 0 0;
}

.mini-noticias h3 {
  display: flex;
  align-items: center;
}
`;

const StyledNoticiaDestaque = styled.section`
  padding: 5rem 1rem 5rem 2rem;
  background-color: #fff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  h2 {
    font-size: 2.1rem;
    padding: 1rem 0 1rem 0;
  }

  a {
    color: #000000;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .noticiaMirim {
    background-image: linear-gradient(to right, #000000be, transparent), url("/images/nasa-estacao.png");
    width: 95%;
    height: 300px;
    background-size: cover;
    color: #fff;

    h4 {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      letter-spacing: 4px;
      font-size: 0.7rem;
      line-height: 2rem;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      
      .imagem-noticia-mirim {
        margin: 0 0.5rem 0 1rem;
      }
    }
}

  .noticia-mirim-texto {
    margin: 11rem 0 0 1rem;
  }


  p {
    line-height: 1.3rem;
  }
`;

const StyledBLog = styled.section`
  color: #ffffff;
  height: 75vh;
  padding: 4rem 2rem;
  background-color: #000000;

  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 4px;
    font-size: .6rem;
    line-height: 2rem;
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 2rem;
  }

  .h3botao {
    margin: 1.5rem 0 0 0;
  }

  iframe {
    margin: 2rem 0 0 0;
  }

  p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;
  }

  .botaoSeta {
  margin: 0.5rem 0 -0.2rem 1rem;
}
`;

const StyledNoticia = styled.section`
  padding: 5rem 1rem 5rem 2rem;
  background-color: #fff;

  h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 4px;
    font-size: .7rem;
    line-height: 2rem;
    text-transform: uppercase;
  }

  h3 {
    font-size: 2.1rem;
    padding: 1rem 0 1rem 0;
  }

  p {
    line-height: 1.3rem;
  }

  .botaoSeta {
    margin: 0.5rem 0 -0.2rem 1rem;
  }

  .botaoSeta2 {
    margin: -0.3rem 1rem;
  }

  .botaoSt {
    font-size: 18px;
    margin: -1.2rem 0 0 12rem;
  }

  .subtitulo h3 {
    font-size: 18px;
  }

  .subtitulo p {
      line-height: 1.6rem;
  }
`;

const StyledHr = styled.section`
  color: #ffffff;
  background-image: linear-gradient(to right, black, transparent), url("images/imagem-nasa.png");
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  padding: 0 0 0 2rem;

  h2 {
    font-size: 3rem;
    padding: 12rem 0 3rem 0;
  }

  p {
    line-height: 1.5rem;
    font-size: 1rem;
    padding: 0 3rem 0 0;
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

const StyledNoticia2 = styled.section`
  color: #000000;
  background-color: #fff;
  padding: 0 1rem 0 2rem;

  h2 {
    font-size: 2.1rem;
    padding: 4rem 0 3rem 0;
  }

  p {
    line-height: 1.5rem;
    font-size: 1.2rem;
    padding: 0 2rem 0 0;
  }

  a {
    color: #000000;
  }

  .botaoSeta {
    margin: 0.5rem 0 -0.2rem 1rem;
  }

  .botaoSt {
    font-size: 18px;
    margin: 1rem 0;
    padding-bottom: 3rem;
  }
`;