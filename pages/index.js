import { Container, Link } from "@material-ui/core";
import { AiOutlinePlusCircle, AiOutlineSearch, AiOutlineUnorderedList } from "react-icons/ai";

const Home = () => {
  return (
    <Container>
      <h1 className="h1">Agenda</h1>
      <Link href="/create">
        Adicionar contato
        <AiOutlinePlusCircle className="icons" />
      </Link>
      <Link href="/find">
        Procurar contato
        <AiOutlineSearch className="icons" />
      </Link>
      <Link href="/showAll">
        Mostrar todos os contatos
        <AiOutlineUnorderedList className="icons" />
      </Link>
    </Container>
  );
};

export default Home;
