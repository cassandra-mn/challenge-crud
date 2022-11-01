import { Grid, Button } from "@material-ui/core";
import useUsers from "../hooks/useUsers.js";

const ShowContact = ({ user }) => {
  const { id, name, email, state, city, hobbies } = user;
  const { deleteContact } = useUsers();

  return (
    <div className="block">
      <Grid className="contact" onClick={() => editContact(user)}>
        <Grid item>Nome: {name}</Grid>
        <Grid item>E-mail: {email}</Grid>
        <Grid item>
          Endereço: {city} - {state}
        </Grid>
        <Grid item>Hobbie(s): {hobbies.toString().replaceAll(",", ", ")}</Grid>
      </Grid>
      <Button onClick={() => deleteContact(id)}>apagar</Button>
    </div>
  );
};

export default ShowContact;
