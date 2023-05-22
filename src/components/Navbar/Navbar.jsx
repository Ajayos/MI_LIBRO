import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Badge, Box, IconButton, InputBase, Toolbar, Typography } from "@mui/material";
import Drawer from "../Drawer/Drawer";
import UserBar from "./UserBar";



export default function Navbar() {

  return (
    <Box bgcolor={"rgb(33, 41, 70)"} sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(33, 41, 70)" }}>

        <Toolbar>
            <Drawer />
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
