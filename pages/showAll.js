import useUsers from "./hooks/useUsers.js";
import { Grid } from "@material-ui/core";

const ShowAll = () => {
  const { users } = useUsers();

  return users ? (
    <Grid container spacing={6}>
      {users.map((user) => {
        const {name, email, address, hobbies} = user;

        return (
          <Grid
            container item
            spacing={2}
            wrap="nowrap"
            direction="column"
            key={user.id}
          >
            <Grid item>Nome: {name}</Grid>
            <Grid item>E-mail: {email}</Grid>
            <Grid item>Endereço: {address}</Grid>
            <Grid item>Hobbie(s): {hobbies.toString().replaceAll(',', ', ')}</Grid>
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <>Loading</>
  );
};

export default ShowAll;
