import useUsers from "./hooks/useUsers.js";
import { TextField, Button, Container } from "@material-ui/core";
import ShowContact from "./components/ShowContact.js";
import Form from "./components/Form.js";

const FindUser = () => {
  const { users, email, setEmail, findByEmail, user, edit, setEdit, editContact, deleteContact } = useUsers();

  return users ? (
    <Container>
      <TextField
        label="Digite o email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" onClick={findByEmail}>
        Buscar
      </Button>

      {user ? (
        <>
          <ShowContact user={user} setEdit={setEdit} deleteContact={deleteContact}/>
          {edit.id === user.id ? (
            <>
              {console.log(edit)}
              <Form data={edit} setData={setEdit} />
              <Button onClick={() => editContact(edit)}>
                Salvar alterações
              </Button>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </Container>
  ) : (
    <>Loading</>
  );
};

export default FindUser;
