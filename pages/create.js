import useUsers from "./hooks/useUsers.js";
import { TextField, Button, Grid } from "@material-ui/core";

const Create = () => {
  const { users, data, setData, newContact } = useUsers();

  return users ? (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            label="Digite o nome"
            type="text"
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Digite o email"
            type="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Digite o endereço"
            type="text"
            required
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            label="Digite o(s) hobbie(s)"
            type="text"
            required
            value={data.hobbies}
            onChange={(e) => setData({ ...data, hobbies: e.target.value })}
          />
        </Grid>
      </Grid>
      <Button type="submit" onClick={newContact}>
        Criar
      </Button>
    </div>
  ) : (
    <>Loading</>
  );
};

export default Create;
