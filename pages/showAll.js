import { Button, Grid } from "@material-ui/core";
import useUsers from "../hooks/useUsers.js";
import ShowContact from "../components/ShowContact.js";
import Form from "../components/Form.js";
import GoBack from "../components/GoBack.js";
import SnackBar from "../components/SnackBar.js";
import Loading from "../components/Loading.js";

const ShowAll = () => {
  const {
    users,
    editContact,
    deleteContact,
    edit,
    setEdit,
    message,
    setMessage,
  } = useUsers();

  return users ? (
    <>
      <GoBack />
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
                  <Button onClick={() => editContact(edit)}>
                    Salvar alterações
                  </Button>
                </>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </Grid>
      <SnackBar message={message} setMessage={setMessage} />
    </>
  ) : (
    <Loading />
  );
};

export default ShowAll;
