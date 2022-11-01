import useUsers from "./hooks/useUsers.js";
import { TextField, Button } from "@material-ui/core";
import ShowContact from "./components/ShowContact.js";

const FindUser = () => {
  const { users, email, setEmail, findByEmail, user } = useUsers();

  return users ? (
    <>
      <TextField
        label="Digite o email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" onClick={findByEmail}>
        Buscar
      </Button>

      {user ? <ShowContact user={user} /> : <></>}
    </>
  ) : (
    <>Loading</>
  );
};

export default FindUser;
