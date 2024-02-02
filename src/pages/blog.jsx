import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
  <>
    
    <StyledBLog>
    <h1>NASA BLOG</h1>

    <section>
      <h2> Explorando Além dos Limites: Blog Espacial NASA-inspirado </h2>
      <p> Bem-vindo(a) ao nosso Blog Espacial, uma homenagem à grandiosa jornada da NASA. Aqui, mergulhamos nas maravilhas do cosmos, inspirados pela inigualável exploração espacial. De missões épicas a descobertas científicas extraordinárias, cada postagem é uma viagem pelo infinito..</p>

      <h3 className="h3botao">
          Recursos para Observação do Céu 
              <Link href="/">
              <Image
               className="botaoSeta"
               src="/images/botao-seta.svg"
               width={23} height={23}
               alt="Botão com uma seta" 
              />
              </Link>
      </h3>
      <div className="videoH3">
      <iframe width="350" height="200" src="https://www.youtube.com/embed/iDAKTLmt2hs?si=mAtevu1E73b3KIIN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      
    </section>
    </StyledBLog>

    <StyledNoticia>
      <h2>HOJE</h2>
      <h3>Imagem de Hoje</h3>

      <Image
        src="/images/nasa-sun.png"
        width={350} height={300}
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

    <StyledNoticia2>
      <h2>Explore o Universo a partir da sua Caixa de Entrada</h2>
      <p>Mantenha-se atualizado(a) sobre as últimas notícias da NASA – da Terra à Lua, do Sistema Solar e além.</p>
      <br />
      <p>Nós nunca compartilharemos seu endereço de e-mail. <span>Política Privada.</span></p>
      <h3 className="botaoSt">
          Inscrever-se
          <Link href="/imagens">
          <Image
            className="botaoSeta"
            src="/images/botao-seta.svg"
            width={23} height={23}
            alt="Botão com uma seta"
          />
          </Link>
      </h3>
    </StyledNoticia2>
  </>
  )
}

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
  padding: 5rem 2rem;
  background-color: #fff;

  h2 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 4px;
    font-size: .6rem;
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

const StyledNoticia2 = styled.section`
  color: #fff;
  background-image: linear-gradient(to right, black, transparent), url("images/nasa-galaxia2.png");
  background-size: cover;
  height: 50vh;
  background-repeat: no-repeat;
  padding: 0 0 0 2rem;

  h2 {
    font-size: 2rem;
    padding: 4rem 0 3rem 0;
  }

  p {
    line-height: 1.5rem;
    font-size: 1.2rem;
    padding: 0 2rem 0 0;
  }

  .botaoSeta {
    margin: 0.5rem 0 -0.2rem 1rem;
  }

  .botaoSt {
    font-size: 18px;
    margin: 1rem 0;
  }

  span {
    text-decoration: underline;
  }
`;