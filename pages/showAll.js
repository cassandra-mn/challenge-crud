import useUsers from "./hooks/useUsers.js";
import { Grid } from "@material-ui/core";
import ShowContact from "./components/ShowContact.js";

const ShowAll = () => {
  const { users } = useUsers();

  return users ? (
    <>
      <h1 className="warning">*Clique sobre um contato para editá-lo</h1>
      <Grid>
        {users.map((user) => {
          return <ShowContact user={user} key={user.id}/>
        })}
      </Grid>
    </>
  ) : (
    <>Loading</>
  );
};

export default ShowAll;
