import useUsers from "./hooks/useUsers.js";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

const FindUser = () => {
  const { users } = useUsers();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState();

  function findByEmail() {
    const user = users.find((user) => user.email === email);
    if (user) {
      setUser(user);
      alert("Encontrei um usuário!");
      console.log(user);
    } else {
      alert("Usuário não encontrado!");
    }
    setEmail("");
  }

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
    </>
  ) : (
    <>Loading</>
  );
};

export default FindUser;
