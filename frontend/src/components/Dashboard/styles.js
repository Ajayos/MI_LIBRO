import { makeStyles } from "@mui/styles";
export default makeStyles(theme => ({
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  totalValueContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  totalValue: {
    display: "flex",
    alignItems: "baseline",
  },
  tableWidget: {
    overflowX: "auto",
  },
  success: {
    backgroundColor: "green",
    color: '#fff',
  },
  warning: {
    backgroundColor: "yellow",
    color: '#fff',
  },
  secondary: {
    backgroundColor:"violet",
    color: '#fff',
  }
}));