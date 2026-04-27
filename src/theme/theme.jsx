import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#3d5a4c" },       
    secondary: { main: "#f0a500" },     
    text: { primary: "#1a1a1a", secondary: "#666666" },
    background: { default: "#f5f5f0", paper: "#ffffff" },
  },
  typography: {
    fontFamily: "'Segoe UI', sans-serif",
    h1: { fontWeight: 700, fontSize: "2.6rem", lineHeight: 1.2 },
    h2: { fontWeight: 700, fontSize: "1.9rem" },
    h3: { fontWeight: 600, fontSize: "1.1rem" },
    body1: { fontSize: "0.92rem", color: "#555" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 30, paddingLeft: 24, paddingRight: 24 },
      },
    },
  },
});

export default theme;
