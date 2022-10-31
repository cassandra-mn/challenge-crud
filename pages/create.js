import useUsers from "./hooks/useUsers.js";
import { TextField, Button, Grid } from "@material-ui/core";
import Select from "react-select";

const Create = () => {
  const { users, data, setData, hobbies, newContact } = useUsers();
  const hobbiesOptions = hobbies?.map((hobby) => {
    return { value: hobby.hobby, label: hobby.hobby };
  });

  function insertHobbies(list) {
    list.forEach((hobby) => {
      setData({ ...data, hobbies: [...data.hobbies, hobby.value] });
    });
  }

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
          <Select
            closeMenuOnSelect={false}
            options={hobbiesOptions}
            isMulti
            required
            onChange={(list) => insertHobbies(list)}
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
