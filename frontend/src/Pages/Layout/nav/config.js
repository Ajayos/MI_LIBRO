import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBoxIcon from '@mui/icons-material/AddBox';

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/home',
    icon: <DashboardIcon />,
  },
  {
    title: 'User',
    path: '/dashboard/user',
    icon: <GroupIcon />,
  },
  {
    title: 'Books',
    path: '/dashboard/books',
    icon: <LibraryBooksIcon />,
  },
  {
    title: 'Add Book',
    path: '/dashboard/addBook',
    icon: <AddBoxIcon />,
  },
];

export default navConfig;
