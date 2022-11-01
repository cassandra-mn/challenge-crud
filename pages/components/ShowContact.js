import { Grid, Button } from "@material-ui/core";

const ShowContact = ({ user, setEdit, deleteContact }) => {
  const { id, name, email, state, city, hobbies } = user;

  return (
    <div className="block">
      <Grid className="contact" onClick={() => setEdit(user)}>
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
