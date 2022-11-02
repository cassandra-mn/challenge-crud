import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0c0636",
    },
    secondary: {
      main: "#095169",
    },
    text: {
      primary: "#0c0636",
      secondary: "#095169",
    },
  },
  shape: {
    borderRadius: 3,
  },
  overrides: {
    MuiButton: {
      root: {
        width: "40%",
        height: "80px",
        margin: "0 30%",
        marginTop: "20px",
        fontSize: "15px",
        fontWeight: "bold",
        borderRadius: "15px",
        backgroundColor: "#fcddc8",
        position: "relative",
        "&:hover": {
          backgroundColor: "#cdbbbb",
        },
      },
    },
    MuiTypography: {
      root: {
        width: "100vw",
        height: "30%",
        padding: "30px",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fffeea",
        border: "1px solid #fcddc8",
        "&:hover": {
          fontSize: "30px",
          textDecoration: "none",
          backgroundColor: "#fcddc8",
        },
      },
    },
    MuiTextField: {
      root: {
        width: "80%",
      },
    },
    MuiFormControl: {
      root: {
        height: "60px",
        margin: "0 10%",
        fontSize: "20px",
        lineHeight: "40px",
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: "20px",
      },
    },
    MuiInputBase: {
      root: {
        fontSize: "20px",
      },
    },
    MuiGrid: {
      root: {
        display: "flex",
        flexDirection: "column",
      }
    },
  },
});

export default theme;
