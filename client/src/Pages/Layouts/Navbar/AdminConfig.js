import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CommentBankIcon from '@mui/icons-material/CommentBank';
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
    title: "Requested Books",
    path: "/req-books",
    icon: <CommentBankIcon />,
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
