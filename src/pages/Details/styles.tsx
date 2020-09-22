import { createUseStyles } from "react-jss";

const Styles = createUseStyles({
  details: {
    margin: "30px",
    padding: "30px",
    borderRadius: "5px",
    backgroundColor: "#f7f7f7",
    boxShadow: "0 0px 7px rgba(0, 0, 0, 0.3)",
  },

  containerDetails: {
    display: "flex",
  },

  containerImgDetails: {
    padding: "5px",
    marginRight: "15px",
    borderRadius: "3px",
    flexDirection: "column",
    border: "1px solid #cecece",
  },

  nameProduct: {
    display: "flex",
    padding: "10px",
    color: "#ffffff",
    borderRadius: "3px",
    marginBottom: "15px",
    backgroundColor: "#ff8000",
  },

  imgHeight: {
    height: "350px",
  },

  containerDescription: {
    display: "flex",
    padding: "30px",
    borderRadius: "3px",
    flexDirection: "column",
    border: "1px solid #cecece",
  },

  price: {
    fontSize: "23px",
    textAlign: "right",
    margin: "30px 30px 30px 30px",
  },

  containerPrice: {
    display: "flex",
    marginBottom: "45px",
    alignItems: "center",
    flexDirection: "column",
  },

  nameProductMobile: {
    display: "none",
  },

  "@media (max-width: 600px)": {
    containerDetails: {
      flexDirection: "column",
    },

    containerImgDetails: {
      marginRight: 0,
      marginBottom: "15px",
    },

    imgHeight: {
      height: "145px",
      width: "100%",
    },

    nameProduct: {
      display: "none",
    },

    nameProductMobile: {
      display: "flex",
      padding: "10px",
      color: "#ffffff",
      borderRadius: "3px",
      marginBottom: "15px",
      backgroundColor: "#ff8000",
    },
  },
});

export default Styles;
