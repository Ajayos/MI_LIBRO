import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../contexts/AuthContext";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

export default function UserPage() {
  const { user, updateUserProfileFetch } = useAuth();
  const [profilePic, setProfilePic] = useState();
  const [newProfilePic, setNewProfilePic] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  useEffect(() => {
    setProfilePic(user.pic);
  }, [user]);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
      setNewProfilePic(file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setProfilePic(user.pic);
    setNewProfilePic(null);
  };

  const handleSave = () => {
    if (newProfilePic) {
      setIsSaving(true);
      const reader = new FileReader();

      reader.onloadend = () => {
        setTimeout(() => {
          setIsSaving(false);
          setProfilePic(reader.result);
          setNewProfilePic(null);
          updateUserProfileFetch(reader.result)
        }, 1000);
      };

      reader.readAsDataURL(newProfilePic);
    }
  };

  return (
    <>
      <Card>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={profilePic}
              sx={{
                height: 80,
                mb: 2,
                width: 80,
              }}
            />
            <Typography gutterBottom variant="h5">
              {user.name}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.email}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.phno}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          {!newProfilePic && (
            <Button
              fullWidth
              variant="text"
              component="label"
              disabled={isSaving}
            >
              {isSaving ? "Saving..." : "Update Picture"}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </Button>
          )}
          {newProfilePic && (
            <>
              <Button
                fullWidth
                variant="text"
                onClick={handleSave}
                disabled={isSaving}
              >
                Save
              </Button>
              <Button
                fullWidth
                variant="text"
                onClick={handleCancel}
                disabled={isSaving}
              >
                Cancel
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
}
