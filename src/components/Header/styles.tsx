import { createUseStyles } from "react-jss";

const Styles = createUseStyles({
  nav: {
    display: "flex",
    alignItems: "center",
    padding: "5px 50px 5px 15px",
    backgroundColor: "#ff8000",
    justifyContent: "space-between",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
  },

  logo: {
    height: "75px",
  },

  cart: {
    display: "flex",
    fontSize: "20px",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.6)",
    textDecoration: "none",

    "&:hover": {
      cursor: "pointer",
      color: "rgba(0, 0, 0, 0.7)",
    },
  },

  cartText: {
    display: "flex",
  },

  svg: {
    marginRight: "15px",
  },

  "@media (max-width: 600px)": {
    cartText: {
      display: "none",
    },
  },
});

export default Styles;
