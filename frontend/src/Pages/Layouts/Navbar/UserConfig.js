import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

const navConfig = [
  {
    title: "Home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    title: "Books",
    path: "/books",
    icon: <LibraryBooksIcon />,
  },
  {
    title: "My Books",
    path: "/my-books",
    icon: <LocalLibraryIcon />,
  },
  {
    title: "Liked books",
    path: "/liked-books",
    icon: <AutoStoriesIcon />,
  },
  {
    title: "Account",
    path: "/account",
    icon: <PersonIcon />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
  },
];

export default navConfig;
