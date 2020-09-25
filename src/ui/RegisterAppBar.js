import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BasicButton from "./BasicButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function RegisterAppBar() {
  const classes = useStyles();
  const { goBack } = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Register
          </Typography>
          <BasicButton
            name="Go back"
            type="undo"
            handleClick={() => goBack()}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
