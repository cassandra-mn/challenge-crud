import { Button, Container } from "@material-ui/core";
import useUsers from "./hooks/useUsers.js";
import Form from "./components/Form.js";
import GoBack from "./components/GoBack.js";

const Create = () => {
  const { users, data, setData, newContact } = useUsers();

  return users ? (
    <Container>
      <GoBack />
      <Form data={data} setData={setData} />
      <Button type="submit" onClick={() => newContact(data)}>
        Criar
      </Button>
    </Container>
  ) : (
    <>Loading</>
  );
};

export default Create;
