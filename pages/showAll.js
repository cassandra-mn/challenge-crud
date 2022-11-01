import useUsers from "./hooks/useUsers.js";
import { Button, Grid } from "@material-ui/core";
import ShowContact from "./components/ShowContact.js";
import Form from "./components/Form.js";

const ShowAll = () => {
  const { users, editContact, deleteContact, edit, setEdit } = useUsers();

  return users ? (
    <>
      <h1 className="warning">*Clique sobre um contato para editá-lo</h1>
      <Grid>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <ShowContact
                user={user}
                setEdit={setEdit}
                deleteContact={deleteContact}
              />
              {edit.id === user.id ? (
                <>
                  <Form data={edit} setData={setEdit} />
                  <Button onClick={() => editContact(edit)}>Salvar alterações</Button>
                </>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </Grid>
    </>
  ) : (
    <>Loading</>
  );
};

export default ShowAll;
