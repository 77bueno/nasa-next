import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
  <>
    <Head>
        <title>NASA - Blog</title>
      </Head>

      <StyledBlog>
        <article className="blog-inicial">
          <h1>Nasa Blog</h1>

          <p>Seja bem-vindo ao nosso Blog Espacial, um lugar onde a curiosidade encontra o cosmos. Explore conosco as maravilhas do espaço, desde missões extraordinárias até as últimas descobertas da NASA. Embarque nesta jornada cósmica de conhecimento e maravilhe-se com os segredos do universo. Vamos desvendar juntos os mistérios do espaço e celebrar a beleza da exploração interplanetária.</p>

        </article>

        <section className="mini-noticias">
        <hr />
            <h2>Titulo...</h2>
            <h3>Subtitulo...</h3>
            <p>Descrição...</p>
        </section>

        <section className="mini-noticias">
        <hr />
          <Image
                className="botaoSeta"
                src="/images/nasa-pluton.png"
                width={90} height={90}
                alt="Imagem da Noticia" 
            />
            <h2>Titulo...</h2>
            <h3>Subtitulo...</h3>
            <p>Descrição...</p>
        </section>

      </StyledBlog>
  </>
  )
}

const StyledBlog = styled.article`
  padding: 0 2rem;

  h1 {
    font-size: 2.7rem;
    padding: 7rem 0 1rem 0;
  }

  p {
    line-height: 1.5rem;
  }
  
  hr {
    margin: 1rem 0 1rem 0;
  }

`;