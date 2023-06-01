import { styled } from "@mui/material/styles";
import { Box, Stack, AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { bgBlur } from "../../../components/Css/Style";
import { useAuth } from "../../../contexts/AuthContext";
import ListIcon from "@mui/icons-material/List";
import Searchbar from "./Searchbar";
import AccountPopover from "./AccountPopover";
import NotificationsPopover from "./NotificationsPopover";
import Mood from "./DarkLight"

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default function Header({ onOpenNav }) {
  const { isAuthenticated } = useAuth();
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <ListIcon />
        </IconButton>
        
        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Mood />
          
          {isAuthenticated && <NotificationsPopover />}
          {isAuthenticated && <AccountPopover />}
          {!isAuthenticated && (
            <Button variant="contained" onClick={console.log("login")}>
              LOGIN
            </Button>
          )}
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
