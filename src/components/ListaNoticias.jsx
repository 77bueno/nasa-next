import styled from "styled-components";
import Link from "next/link";

export default function ListaNoticias({ posts }) {
  return (
    <StyledListaNoticias>
      {posts.map((post) => (
        <article key={post.id}>
          <Link className="lista-noticia" href={`/noticias/${post.id}`}>
            
              <section>
                <h4>{post.titulo}</h4>
                <h5>{post.categoria}</h5>
                <h5>{post.data}</h5>
              </section>
              <p>{post.descricao}</p>
            
          </Link>
        </article>
      ))}
    </StyledListaNoticias>
  );
}

const StyledListaNoticias = styled.section`

  article {
    background-color: #ffffff;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    border-radius: 8px;
    padding: 20px;
    margin: 2rem 0 2rem 0;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        color: #0000f1;
    }
  }

  a {
    text-decoration: none;
    color: #000000;

    &:hover {
        color: #0000f1;
    }
  }
  h1 {
    font-size: 2.7rem;
    padding: 7rem 0 0 0;
  }

  p {
    line-height: 1.5rem;
  }

  h4, h5 {
    margin: 0 0 0.5rem 0;
  }
  
  @media screen and (min-width: 600px) {
        .lista-noticia {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 1rem 0;
    }     
  }

  @media screen and (min-width: 700px) {
    h4, h5 {
        margin: 0 1rem 0 0;
    }
  }

`;