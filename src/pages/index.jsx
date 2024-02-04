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
          <p className="textoDestaque">Desvendando o Universo com a NASA: Explorações Cósmicas, Pesquisas Avançadas e Fascinantes Descobertas Astronômicas para Iluminar o Nosso Conhecimento Celestial</p>

          <button className="botaoDestaque">Leia mais</button>

          <section className="mini-noticias">
            <section>
            <div className="mini-noticias-div">
              <hr />
              <p>geral</p>
              <h3>
                Historia do Eclipse 
                <a href="/">
                <Image
                className="botaoSeta"
                src="/images/botao-seta.svg"
                width={16} height={16}
                alt="Botão com uma seta" 
                />
                </a>
              </h3>
            </div>
            </section>

            <section>
            <div className="mini-noticias-div">
              <hr />
              <p>Missões Futuras</p>
              <h3>
                VIPER II
                <a href="/">
                <Image
                className="botaoSeta"
                src="/images/botao-seta.svg"
                width={16} height={16}
                alt="Botão com uma seta"
                />
                </a>
              </h3>
            </div>
            </section>
 
            <section>
            <div className="mini-noticias-div">
              <hr />

              <p>Atualizações da Estação Espacial</p>
              <h3>
                Nasa Blog
                <a href="/">
                <Image
                className="botaoSeta"
                src="/images/botao-seta.svg"
                width={16} height={16}
                alt="Botão com uma seta"
                />
                </a>
              </h3>
            </div>
            </section>
            
            
          </section>

        </StyledSection>

        <StyledNoticiaDestaque>
          <h2>Noticias em Destaque</h2>

          <section className="noticiasDestaqueLayout">
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

            <section className="noticiasDestaqueLayout2">
              <a href="/">
                <div className="noticiaMirim2">
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
                    <h4>Leitura Detalhada</h4>
                    <p>NASA convoca reunião estratégica sobre a Missão Artemis III</p>
                  </section>
                </div>
              </a>

              <section className="noticiasDestaqueLayout3">
                <a href="/">
                  <div className="noticiaMirim3">
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
                      <p>NASA executa testes com novo protótipo de Foguete</p>
                    </section>
                  </div>
                </a>

                <a href="/">
                  <div className="noticiaMirim4">
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
                      <p>Nuvens pairam sobre picos de gelo nos Estados Unidos</p>
                    </section>
                  </div>
                </a>
              </section>
            </section>
          </section>

      
        </StyledNoticiaDestaque>

        <StyledBLog>

    <section className="conteudo-lado-a">
      <section className="conteudo-lado-b">

        <h1>NASA BLOG</h1>

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
      </section>
      <div className="videoH3">
        <iframe width="380" height="200" src="https://www.youtube.com/embed/iDAKTLmt2hs?si=mAtevu1E73b3KIIN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      
    </section>
        </StyledBLog>

        <StyledNoticia>
            <section className="imagem-de-hoje">
              <section className="imagem-de-hoje-lado-a">
                  <h2>HOJE</h2>
                  <h3>Imagem de Hoje</h3>

              <Image
                className="imagem-de-hoje2"
                src="/images/nasa-sun.png"
                width={360} height={300}
                alt="Imagem do Sol" 
                      
              />
              </section>

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
  height: 90vh;
  background-repeat: no-repeat;
  padding: 0 2rem 0 2rem;


  h2 {
    font-size: 2.7rem;
    padding-top: 7rem;
  }

  h3 {
    display: flex;
    align-items: center;
  }

  p {
    line-height: 1.5rem;
  }

  .botaoDestaque {
    background-color: #cf0d0d;
    border: none;
    padding: 8px;
    margin: 1.5rem 0 5rem 0;
    border-radius: 6px;
    width: 10rem;
    height: 2.5rem;
    color: #ffff;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }

  .botaoSeta {
    margin: 0 0 0 1rem;
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
    margin: 0.5rem 0 0 0;
}

/* Para telas a partir de 700px */
@media screen and (min-width: 600px) { 
  height: 60vh;

  .textoDestaque {
    padding: 0 15rem 0 0;
  }

  .mini-noticias {
    display: flex;
    max-width: 1200px;
    
    p {
      font-size: .7rem;
      padding: 0 4rem 0 0;
      line-height: 1.6rem;
    }
    
    h3 {
      font-size: 1rem;
    }

    .mini-noticias-div {
      margin: 0 0 0 1rem;
    }
  }

}

@media screen and (min-width: 900px) { 
  background-image: url("images/nasa-eclipse.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;


  h2 {
    font-size: 4rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  .textoDestaque {
    padding: 0 20rem 0 0;
  }

  .botaoDestaque {
    padding: 12px;
    width: 12rem;
    height: 3rem;
  }
}

`;

const StyledNoticiaDestaque = styled.section`
  padding: 5rem 2rem 5rem 2rem;
  background-color: #fff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  h2 {
    font-size: 2.1rem;
    padding: 1rem 0 2rem 0;
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
      margin-bottom: 1rem;

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

  .noticiaMirim2 {
      background-image: linear-gradient(to right, #000000be, transparent), url("/images/nasa-reuniao.png");
      width: 95%;
      height: 315px;
      background-size: cover;
      color: #fff;
      margin-bottom: 1rem;

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

  .noticiaMirim3 {
      background-image: linear-gradient(to right, #000000be, transparent), url("/images/nasa-foguete.png");
      width: 95%;
      height: 220px;
      background-size: cover;
      color: #fff;
      margin-bottom: 1rem;

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

      .noticia-mirim-texto {
      margin: 5rem 1rem 0 1rem;
    }
  }

  .noticiaMirim4 {
      background-image: linear-gradient(to right, #000000be, transparent), url("/images/nasa-capa.png");
      width: 95%;
      height: 220px;
      background-size: cover;
      color: #fff;
      margin-bottom: 1rem;

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

      .noticia-mirim-texto {
      margin: 5rem 1rem 0 1rem;
    }
  }

  .noticia-mirim-texto {
    margin: 11rem 0 0 1rem;
  }


  p {
    line-height: 1.3rem;
  }

@media screen and (min-width: 600px) { 

  .noticiaMirim2 {
    .noticia-mirim-texto {
    margin: 19rem 0 0 1rem;
  }
  }

  .noticiaMirim2 {
    height: 460px;
  }

  .noticiaMirim {
    width: 100%;
  }

  .noticiaMirim3, .noticiaMirim4 {
    width: 100%;
  }

  .noticiasDestaqueLayout2 {
    display: flex;
}

.noticiasDestaqueLayout3 {
  display: flex;
  flex-direction: column;
}
}

@media screen and (min-width: 1000px) {
  .noticiaMirim2 {
    .noticia-mirim-texto {
    margin: 19rem 0 0 1rem;
  }
  }
}
`;

const StyledBLog = styled.section`
  color: #ffffff;
  height: 80vh;
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
    margin: 2rem 0 ;
    padding: 0 3rem 0 0;
  }

  p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;
  }

  .botaoSeta {
  margin: 0.5rem 0 -0.2rem 1rem;
}


@media screen and (min-width: 600px) { 
    iframe {
    width: 100%;
    height: 400px;
    padding: 0;
  }

}

@media screen and (min-width: 900px) { 
  height: 100vh;
  padding: 3rem 0 0 0;


  iframe {
    width: 500px;
    height: 450px;
    padding: 0;
  }

  .conteudo-lado-a {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
  }

  .conteudo-lado-b {
    width: 50%;
  }
}


`;

const StyledNoticia = styled.section`
  padding: 5rem 1rem 5rem 2rem;
  background-color: #fff;

  .imagem-de-hoje2 {
    padding: 0 1rem 0 0;
    cursor: pointer;
  }

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
    margin: -1.2rem 0 0 10rem;
  }

  .subtitulo h3 {
    font-size: 18px;
  }

  .subtitulo p {
      line-height: 1.6rem;
      padding-right: 1rem;
  }

@media screen and (min-width: 500px) { 

  .imagem-de-hoje2 {
    width: 350px;
    height: 350px;
    padding: 0;
  }

  .botaoSt {
    margin: -1.2rem 0 0 14rem;
  }
}

@media screen and (min-width: 1000px) { 
  .imagem-de-hoje {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .subtitulo {
    margin: 0 4rem 0 7rem ;
  }

  .subtitulo h3 {
    font-size: 22px;
  }

  .subtitulo p {
      line-height: 1.6rem;
      padding-right: 1rem;
      font-size: 18px;
  }

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
    padding: 8rem 0 3rem 0;
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

  @media screen and (min-width: 1000px) {
    h2 {
      font-size: 5rem;
    }

    p{
      font-size: 1.2rem;
      line-height: 1.8rem;
      max-width: 50%;
    }

    h3 {
      font-size: 1.5rem;
    } 
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