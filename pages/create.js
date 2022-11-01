import { TextField, Button, Grid } from "@material-ui/core";
import useUsers from "./hooks/useUsers.js";
import Select from "react-select";

const Create = () => {
  const { users, 
    data, setData, 
    statesFormated, selectState, 
    citiesFormated, selectCity,
    hobbiesFormated, insertHobbies, 
    newContact,
  } = useUsers();

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
          <Select
            placeholder="Selecione o estado"
            required
            options={statesFormated}
            onChange={(e) => selectState(e)}
          />
        </Grid>
        {data.state ?
          <Grid item xs={8}>
            <Select
              placeholder="Selecione a cidade"
              required
              options={citiesFormated}
              onChange={(e) => selectCity(e)}
            />
          </Grid>
          : 
          <Grid item xs={8}>
            <Select
              placeholder="Selecione a cidade"
              required
              options={[{label: "Escolha o estado"}]}
            />
          </Grid>
        }
        <Grid item xs={8}>
          <Select
            closeMenuOnSelect={false}
            options={hobbiesFormated}
            isMulti
            required
            placeholder="Selecione o(s) hobbie(s)"
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
