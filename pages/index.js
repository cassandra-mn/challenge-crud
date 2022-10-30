import Link from 'next/link';
import {Button} from '@material-ui/core';

const Home = () => {

  
  return (
    <div>
      <h1>Agenda de contatos</h1>
      <Link href='/'>
        <Button>Adicionar contato</Button>
      </Link>
      <br />
      <Link href='/find'>
        <Button>Procurar contato</Button>
      </Link>
      <br />
      <Link href='/'>
        <Button>Mostrar todos os contatos</Button>
      </Link>
    </div>
  );
}

export default Home;