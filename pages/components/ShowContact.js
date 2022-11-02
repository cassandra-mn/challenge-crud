import { Grid, Button } from "@material-ui/core";
import { AiOutlineDelete } from "react-icons/ai";

const ShowContact = ({ user, setEdit, deleteContact }) => {
  const { id, name, email, state, city, hobbies } = user;

  return (
    <div className="block">
      <Grid container onClick={() => setEdit(user)}>
        <p>Nome: {name}</p>
        <p>E-mail: {email}</p>
        <p>Endereço: {city} - {state}</p>
        <p>Hobbie(s): {hobbies.toString().replaceAll(",", ", ")}</p>
      </Grid>
      <Button className="button" onClick={() => deleteContact(id)}><AiOutlineDelete /></Button>
    </div>
  );
};

export default ShowContact;
