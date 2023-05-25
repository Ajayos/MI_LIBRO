import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  widgetHeader: {
    padding: 5,
    paddingBottom: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  widgetBody: {
    paddingBottom: 6,
    paddingRight: 15,
    paddingLeft: 6,
  },
  noPadding: {
    padding: 0,
  },
}));
