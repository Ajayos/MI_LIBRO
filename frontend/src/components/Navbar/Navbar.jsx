import * as React from "react";
import { AppBar, Box, Avatar, Button, Toolbar, Typography } from "@mui/material";
import UserBar from "./UserBar";
import LOGO from "../../image/logo.png"


export default function Navbar() {

  return (
    <Box bgcolor={"rgb(33, 41, 70)"} sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(33, 41, 70)" }}>

        <Toolbar>
        <Button
        aria-label="open drawer"
        onClick={() => {window.location.replace("/");}}
      >
        <Avatar
          alt="Mi_LIBRO"
          src={LOGO}
        />
      </Button>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
           {' MI LIBRO '}
          </Typography>
          
        <Box sx={{ flexGrow: 1 }} />
          <UserBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
