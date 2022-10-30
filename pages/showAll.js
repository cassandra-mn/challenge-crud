import useUsers from "./hooks/useUsers.js";

const FindUser = () => {
  const { users } = useUsers();

  return users ? (
    <>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <>Loading</>
  );
};

export default FindUser;
