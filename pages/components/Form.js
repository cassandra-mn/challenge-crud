import { TextField, Grid } from "@material-ui/core";
import Select from "react-select";
import useLocales from "../hooks/useLocales.js";

const Form = ({data, setData}) => {
  const { statesFormated, citiesFormated, hobbiesFormated, getCity } = useLocales();

  return (
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
          onChange={(e) =>
            setData({ ...data, state: e.value }) & getCity(e.value)
          }
        />
      </Grid>
      {data.state ? (
        <Grid item xs={8}>
          <Select
            placeholder="Selecione a cidade"
            required
            options={citiesFormated}
            onChange={(e) => setData({ ...data, city: e.value })}
          />
        </Grid>
      ) : (
        <Grid item xs={8}>
          <Select
            placeholder="Selecione a cidade"
            required
            options={[{ label: "Escolha o estado" }]}
          />
        </Grid>
      )}
      <Grid item xs={8}>
        <Select
          closeMenuOnSelect={false}
          options={hobbiesFormated}
          isMulti
          required
          placeholder="Selecione o(s) hobbie(s)"
          onChange={(list) => {
            list.forEach((hobby) => {
              setData({ ...data, hobbies: [...data.hobbies, hobby.value] });
            });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Form;
