import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";
import Container from "@/components/UI/Container";

export async function getStaticProps({ params }) {
    const { id } = params;
    console.log(id);

    try {
        const resposta = await fetch(`${serverApi}/noticias/${id}`)
        if (!resposta.ok) {
            throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
          }

          const dados = await resposta.json();
          return {
            props: {
                post: dados,
            },
          };
    } catch (error) {
        console.error("Deu ruim: " + error.message);
        return {
            notFound: true,
          }
    }
}


export async function getStaticPaths() {
    return {
      paths: [],
      fallback: "blocking",
    }
  }

export default function Noticia({ post }){
    const tituloPagina = `${post.titulo}`;
    return (
    <>
    <Head>
        <title>{tituloPagina} - NASA</title>
        <meta name="description" content={post.descricao}/>    
    </Head>

    <StyledNoticiaId>
        <h2>{post.titulo}</h2>
        <Container>
            <h3>{post.categoria}</h3>
            <p>{post.descricao}</p>
        </Container>
    </StyledNoticiaId>
    </>
);
}

const StyledNoticiaId = styled.article`
    padding: 0;
`;