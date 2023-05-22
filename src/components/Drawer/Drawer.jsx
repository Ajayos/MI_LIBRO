import { Avatar, Box, Button, Drawer, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";
import LOGO from './logo.png'

const drawerWidth = "15%";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000000",
    color: "#e40202",
  },
  avatar: {
    margin: "2%",
    cursor: "pointer",
  },
  button: {
    color: "#ce0000",
    margin: "2%",
    textTransform: "capitalize",
  },
}));

const Drawer_ = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box>
      <Button
        aria-label="open drawer"
        onClick={(e) => {
          setOpenDrawer(true);
        }}
      >
        <Avatar
          alt="Mi_LIBRO"
          src={LOGO}
        />
      </Button>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button className={classes.button}>GitHub</Button>
          <Button className={classes.button}>WhatsApp</Button>
          <Button className={classes.button}>Report Bug</Button>
          <Button className={classes.button}>Help</Button>
          <Button className={classes.button}>Learn</Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Drawer_;
