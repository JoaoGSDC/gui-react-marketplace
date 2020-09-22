import { createUseStyles } from "react-jss";

const Styles = createUseStyles({
  home: {
    margin: "30px",
    borderRadius: "5px",
    backgroundColor: "#f7f7f7",
    boxShadow: "0 0px 7px rgba(0, 0, 0, 0.3)",
  },

  searchContainer: {
    display: "flex",
    marginLeft: "30px",
    marginTop: "-15px",
    color: "#ff8000",
  },

  inputWidth: {
    width: "calc(100% - 90px)",
  },

  productsContainer: {
    display: "flex",
    flexWrap: "wrap",
  },

  imgs: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "5px",
    backgroundColor: "#dadada",
    backgroundImage: "linear-gradient(#ffffff, #cecece)",
  },

  imgsNinja: {
    height: "400px",
    animation: "0.75s ease-out 0s 1 slideInFromRight",
  },

  imgsLogo: {
    height: "300px",
    marginTop: "-125px",
    animation: "0.75s ease-out 0s 1 slideInFromLeft",
  },

  "@keyframes slideInFromLeft": {
    "0%": {
      transform: "translateX(-100%)",
    },

    "100%": {
      transform: "translateX(0)",
    },
  },

  "@keyframes slideInFromRight": {
    "0%": {
      transform: "translateX(100%)",
    },

    "100%": {
      transform: "translateX(0)",
    },
  },

  "@media (max-width: 600px)": {
    imgsNinja: {
      height: "200px",
    },

    imgsLogo: {
      height: "100px",
      marginTop: "-50px",
    },
  },
});

export default Styles;
