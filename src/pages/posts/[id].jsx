import Head from "next/head";
import styled from "styled-components";
import serverApi from "../api/server";
import Container from "@/components/UI/Container";
import Image from "next/image";

export async function getStaticProps({ params }) {
    const { id } = params;

    try {
        const resposta = await fetch(`${serverApi}/noticias/${id}.json`)
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
        <section className="sessao-dinamica">
            <div>
                <Image
                        className="botaoSeta"
                        src={post.image}
                        width={350} height={250}
                        alt={`${post.image}`}
                    />
            </div>
            
            <Container>
                <h2>{post.titulo}</h2>
                <h3>{post.categoria}</h3>
                <p>{post.descricao}</p>
            </Container>
        </section>
    </StyledNoticiaId>
    </>
);
}

const StyledNoticiaId = styled.article`
    .sessao-dinamica {
        max-width: 80%;
        margin: auto;
        padding-top: 5rem;
    }

    div {
       
    }

@media screen and (min-width: 600px) {
}
`;