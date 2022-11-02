import { TextField, FormGroup } from "@material-ui/core";
import Select from "react-select";
import useLocales from "../hooks/useLocales.js";

const Form = ({ data, setData }) => {
  const { statesFormated, citiesFormated, hobbiesFormated, getCity } =
    useLocales();

  return (
    <FormGroup className="container" spacing={2}>
      <TextField
        label="Digite o nome"
        type="text"
        required
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <TextField
        label="Digite o email"
        type="email"
        required
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <Select
        className="select"
        placeholder="Selecione o estado"
        required
        options={statesFormated}
        onChange={(e) =>
          setData({ ...data, state: e.value }) & getCity(e.value)
        }
      />
      {data.state ? (
        <Select
          className="select"
          placeholder="Selecione a cidade"
          required
          options={citiesFormated}
          onChange={(e) => setData({ ...data, city: e.value })}
        />
      ) : (
        <Select
          className="select"
          placeholder="Selecione a cidade"
          required
          options={[{ label: "Escolha o estado" }]}
        />
      )}
      <Select
        className="select"
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
    </FormGroup>
  );
};

export default Form;
