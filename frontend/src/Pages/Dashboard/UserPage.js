import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Avatar,
  TextField,
  Checkbox,
  Stack,
  Typography,
  IconButton,
  TablePagination,
  Card,
  Popover,
  MenuItem,
  Skeleton,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Label from "../../components/label";
import Scrollbar from "../../components/scrollbar";
import UserListHead from "./User/UserListHead";
import UserListToolbar from "./User/UserListToolbar";
import { Helmet } from "react-helmet-async";
import Container from "@mui/material/Container";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PopoverContent from "./User/PopoverContent";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../utils/api";

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "email", label: "Email", alignRight: false },
  { id: "phone", label: "Phone", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "seen", label: "Seen", alignRight: false },
  { id: "actions", label: "Actions", alignRight: true },
];

const USERLIST = [];

function UserFetcher() {
  const { isAuthenticated, IsPermit, user, GetDashboradData, adminHomeData } = useAuth();
  const [users, setUsers] = useState(USERLIST);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(null);
  const [popoverContent, setPopoverContent] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    IsPermit(true);
    const fetchUsers = async () => {
      try {
        const response = await API.get("/admins/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleFilterByName = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick2 = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = users.map((user) => user.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleViewDetails = (user) => {
    setPopoverContent(user);
  };

  const handleEditUser = (user) => {
    // Handle edit action here
    console.log("Edit user:", user);
  };

  const handleDeleteUser = (user) => {
    // Handle delete action here
    console.log("Delete user:", user);
  };

  const handlePopoverClose = () => {
    setPopoverContent(null);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, filteredUsers.length - page * rowsPerPage);

  const isNotFound = filteredUsers.length === 0;

  return (
    <>
      <Helmet>
        <title>User | MI LIBRO</title>
      </Helmet>

      <Container>
        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={searchTerm}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell colSpan={7}>
                        <Skeleton animation="wave" height={50} />
                        <Skeleton animation="wave" height={50} />
                        <Skeleton animation="wave" height={50} />
                        <Skeleton animation="wave" height={50} />
                        <Skeleton animation="wave" height={50} />
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        const { id, name, status, pic, phoneNumber, email, seen, access } = row;
                        const selectedUser = selected.indexOf(name) !== -1;

                        return (
                          <TableRow
                            hover
                            key={id}
                            tabIndex={-1}
                            role="checkbox"
                            selected={selectedUser}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={selectedUser}
                                onChange={(event) => handleClick(event, name)}
                              />
                            </TableCell>

                            <TableCell component="th" scope="row" padding="none">
                              <Stack direction="row" alignItems="center" spacing={2}>
                                <Avatar alt={name} src={pic} />
                                <Typography variant="subtitle2" noWrap>
                                  {name}
                                </Typography>
                              </Stack>
                            </TableCell>

                            <TableCell align="left">{email}</TableCell>
                            <TableCell align="left">{phoneNumber}</TableCell>
                            <TableCell align="center">
                              <Label
                                variant="filled"
                                color={access ? "success" : "error"}
                              >
                                {access ? "Access" : "Blocked"}
                              </Label>
                            </TableCell>
                            <TableCell align="left">{seen}</TableCell>
                            <TableCell align="right">
                              <IconButton
                                aria-label="View Details"
                                onClick={() => handleViewDetails(row)}
                              >
                                <RemoveRedEyeIcon />
                              </IconButton>
                              <IconButton
                                aria-label="Edit User"
                                onClick={() => handleEditUser(row)}
                              >
                                <EditIcon />
                              </IconButton>
                              <IconButton
                                aria-label="Delete User"
                                onClick={handleOpenMenu}
                              >
                                <MoreVertIcon />
                              </IconButton>
                              <Popover
                                open={open !== null && open === row.id}
                                anchorEl={open}
                                onClose={handleCloseMenu}
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "center",
                                }}
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "center",
                                }}
                              >
                                <MenuItem onClick={() => handleDeleteUser(row)}>
                                  <DeleteIcon color="error" />
                                  Delete User
                                </MenuItem>
                              </Popover>
                            </TableCell>
                          </TableRow>
                        );
                      })
                  )}

                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={7} />
                    </TableRow>
                  )}

                  {isNotFound && !isLoading && (
                    <TableRow>
                      <TableCell align="center" colSpan={7} sx={{ py: 3 }}>
                        No users found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          {!isNotFound && !isLoading && (
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              component="div"
              count={filteredUsers.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Card>
      </Container>

      <Popover
        open={popoverContent !== null}
        anchorEl={popoverContent}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        {popoverContent && <PopoverContent user={popoverContent} />}
      </Popover>
    </>
  );
}

export default UserFetcher;