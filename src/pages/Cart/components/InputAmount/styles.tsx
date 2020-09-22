import { createUseStyles } from "react-jss";

const Styles = createUseStyles({
  inputNumberButtons: {
    width: "40px",
    height: "100%",
  },

  inputNumber: {
    textAlign: "right",
  },

  "@media (max-width: 768px)": {
    inputNumber: {
      width: "100px",
    },

    inputNumberButtons: {
      height: "45px",
    },
  },
});

export default Styles;
