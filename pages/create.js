import { Button } from "@material-ui/core";
import useUsers from "./hooks/useUsers.js";
import Form from "./components/Form.js";

const Create = () => {
  const { users, data, setData, newContact } = useUsers();

  return users ? (
    <>
      <Form data={data} setData={setData} />
      <Button type="submit" onClick={() => newContact(data)}>
        Criar
      </Button>
    </>
  ) : (
    <>Loading</>
  );
};

export default Create;
