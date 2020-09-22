import { createUseStyles } from "react-jss";

const Styles = createUseStyles({
  cardCart: {
    margin: "30px",
    display: "flex",
    borderRadius: "5px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
    padding: "30px 45px 15px 45px",
    boxShadow: "0 0px 7px rgba(0, 0, 0, 0.3)",
  },

  textCart: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },

  svg: {
    marginRight: "15px",

    "&:hover": {
      transition: "0.2s",
      cursor: "pointer",
      color: "#3e3e3e",
    },
  },

  amountInput: {
    marginTop: "15px",
  },

  productItem: {
    width: "100%",
    display: "flex",
    borderRadius: "3px",
    alignItems: "center",
    margin: "0 10px 15px 10px",
    border: "1px solid #c3c3c3",
    backgroundColor: "#f5f5f5",
    padding: "15px 20px 15px 20px",
    justifyContent: "space-between",
  },

  productImg: {
    width: "270px",
    height: "150px",
    marginRight: "30px",
    border: "1px solid #e6e6e6",
  },

  containerImg: {
    display: "flex",
  },

  containerFields: {
    display: "flex",
    flexDirection: "column",
  },

  productName: {
    display: "flex",
    fontSize: "22px",
    marginTop: "30px",
    color: "#181818",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputNumberButtons: {
    width: "40px",
    height: "100%",
  },

  inputNumber: {
    textAlign: "right",
  },

  textPrice: {
    marginTop: "0px",
  },

  "@media (max-width: 768px)": {
    containerImg: {
      flexDirection: "column",
    },

    productImg: {
      width: "auto",
      height: "110px",
      marginRight: "0px",
    },

    productItem: {
      flexDirection: "column",
    },

    textPrice: {
      fontSize: "24px",
      marginTop: "15px",
    },

    inputNumber: {
      width: "100px",
    },

    inputNumberButtons: {
      height: "45px",
    },
  },
});

export default Styles;
