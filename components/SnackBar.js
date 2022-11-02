import { Snackbar } from "@material-ui/core";

const SnackBar = ({ message, setMessage }) => {
  return (
    <Snackbar
      message={message}
      open={message.length > 0}
      autoHideDuration={2500}
      onClose={() => setMessage("")}
    />
  );
};

export default SnackBar;
