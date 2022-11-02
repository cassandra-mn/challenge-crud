import { Button, Container } from "@material-ui/core";
import useUsers from "../hooks/useUsers.js";
import Form from "../components/Form.js";
import GoBack from "../components/GoBack.js";
import SnackBar from "../components/SnackBar.js";
import Loading from "../components/Loading.js";

const Create = () => {
  const { users, data, setData, newContact, message, setMessage } = useUsers();

  return users ? (
    <Container>
      <GoBack />
      <Form data={data} setData={setData} />
      <Button type="submit" onClick={() => newContact(data)}>
        Criar
      </Button>
      <SnackBar message={message} setMessage={setMessage} />
    </Container>
  ) : (
    <Loading />
  );
};

export default Create;
