import styled from "styled-components";

export default function ListaNoticias({posts}) {
    return (
        <StyledListaNoticias>
            {posts.map( (post, index) => {
                return (
                    <article>
                        <h4>{post.titulo}</h4>
                        <p>{post.categoria}</p>
                        <h5>{post.data}</h5>
                        <p>{post.descricao}</p>
                    </article> 
                )
            } )}
        </StyledListaNoticias>
    )
}

const StyledListaNoticias = styled.section`

`;