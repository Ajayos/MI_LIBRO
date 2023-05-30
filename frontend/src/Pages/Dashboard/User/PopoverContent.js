import React from 'react';
import {
  Avatar,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';

const PopoverContent = ({ user }) => {
  const {
    name,
    email,
    phoneNumber,
    dob,
    age,
    education,
    address,
    place,
    contactDetails,
    returnDate,
  } = user;

  return (
    <Box p={2} minWidth={400}>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar alt={name} src={user.pic} />
        </Grid>
        <Grid item xs={12} sm container direction="column">
          <Grid item xs>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="body2">{email}</Typography>
            <Typography variant="body2">{phoneNumber}</Typography>
          </Grid>

          <Grid item xs>
            <Typography variant="subtitle2">Personal Details</Typography>
            <Divider />

            <List dense>
              <ListItem>
                <ListItemText primary="Name" secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone" secondary={phoneNumber} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date of Birth" secondary={dob} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Age" secondary={age} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Education" secondary={education} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Place" secondary={place} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact Details" secondary={contactDetails} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Return Date" secondary={returnDate} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PopoverContent;
