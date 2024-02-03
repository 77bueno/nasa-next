import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
  <>
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