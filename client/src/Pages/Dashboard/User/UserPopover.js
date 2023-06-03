import React from 'react';
import { Popover, Typography, List, ListItem, ListItemText } from '@mui/material';

const UserPopover = ({ anchorEl, user, onClose }) => {
  const isOpen = Boolean(anchorEl);

  const handleClose = () => {
    onClose();
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <List>
        <ListItem>
          <ListItemText primary="Name" secondary={user?.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={user?.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone" secondary={user?.phone} />
        </ListItem>
        {/* Add more user information to display in the popover */}
      </List>
    </Popover>
  );
};

export default UserPopover;
