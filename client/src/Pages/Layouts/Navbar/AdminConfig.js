import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddBoxIcon from "@mui/icons-material/AddBox";

const navConfig = [
  {
    title: "Dashboard",
    path: "/home",
    icon: <DashboardIcon />,
  },
  {
    title: "User",
    path: "/user",
    icon: <GroupIcon />,
  },
  {
    title: "Books",
    path: "/books",
    icon: <LibraryBooksIcon />,
  },
  {
    title: "Add Book",
    path: "/addBook",
    icon: <AddBoxIcon />,
  },
];

export default navConfig;
