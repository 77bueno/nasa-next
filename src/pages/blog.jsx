import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ListaNoticias from "@/components/ListaNoticias";
import { useState } from "react";
import serverApi from "./api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/noticias.json`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

    const arrayDeNoticias = Object.keys(dados).map((post) => ({
      ...dados[post],
      id: post,
    }));

    const categorias = arrayDeNoticias.map((post) => post.categoria);
    const categoriasUnicas = [...new Set(categorias)];

    return {
      props: {
        posts: arrayDeNoticias,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}
export default function Blog({posts}) {
  const [ListaDeNoticias, setListaDeNoticias] = useState(posts);
  return (
  <>
    <Head>
        <title>NASA - Blog</title>
      </Head>

      <StyledBlog>
        <article className="blog-inicial">
          <h1>Nasa Blog</h1>

          <p className="fonte-maior">Seja bem-vindo ao nosso Blog Espacial, um lugar onde a curiosidade encontra o cosmos. Explore conosco as maravilhas do espaço, desde missões extraordinárias até as últimas descobertas da NASA. Embarque nesta jornada cósmica de conhecimento e maravilhe-se com os segredos do universo. Vamos desvendar juntos os mistérios do espaço e celebrar a beleza da exploração interplanetária.</p>

        </article>

        <section className="mini-noticias">
          <ListaNoticias posts={ListaDeNoticias} />
        </section>

      </StyledBlog>
  </>
  )
}

const StyledBlog = styled.article`
  margin: 0 2rem;

  h1 {
    font-size: 2.7rem;
    padding: 7rem 0 3rem 0;
  }

  p {
    line-height: 1.5rem;
  }

  @media screen and (min-width: 600px) {
    margin: 0 5rem;
  }

  @media screen and (min-width: 900px) { 
    margin: 0 10rem;

    h1 {
      font-size: 2.9rem;
    }

    
      .fonte-maior {
        font-size: 1.2rem;
      }
  }

  @media screen and (min-width: 1100px) { 
    margin: 0 12rem;
  }
`;
