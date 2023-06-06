import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Button, Divider } from "@mui/material";
import API from "../../utils/api";
import { useAuth } from "../../contexts/AuthContext";
import { fDateTime } from "../../utils/formatTime";

const Reviews = ({ bookData }) => {
  const [comment, setComment] = useState("");
  const { user, CommentBook } = useAuth();
  const [comments, setComments] = useState([]);

  const handleCommentInputChange = (event) => {
    setComment(event.target.value);
  };

  useEffect(() => {
    const filteredComments = bookData.comments.filter(
      (newComment) =>
        newComment.message &&
        newComment.message !== "" &&
        !comments.some((comment) => comment.id === newComment._id)
    );

    const updatedComments = filteredComments.map((newComment) => ({
      id: newComment._id,
      user: newComment.user.name,
      pic: newComment.user.pic,
      message: newComment.message,
      time: fDateTime(newComment.commentDate),
    }));

    setComments((prevComments) => [...prevComments, ...updatedComments]);
  }, [bookData.comments]);

  const handleSendComment = async () => {
    const data = {
      id: bookData._id,
      user: user.name,
      pic: user.pic,
      message: comment,
      time: new Date().toLocaleString(),
    };

    await CommentBook(data);

    setComments((prevComments) => [...prevComments, data]);
    setComment("");
  };

  return (
    <Box>
      <Stack direction="column" spacing={2} sx={{ marginBottom: 2 }}>
        <Box display="flex" alignItems="center">
          <Box marginRight={1}>
            <img
              src={user.pic}
              alt={user.name}
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </Box>
          <Box flexGrow={1}>
            <TextField
              label="Type your comment"
              value={comment}
              onChange={handleCommentInputChange}
              fullWidth
            />
          </Box>
          <Box marginLeft={1}>
            <Button
              variant="contained"
              sx={{ bgcolor: "green", color: "white" }}
              onClick={handleSendComment}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Stack>
      <Divider />
      <Box>
        {comments.map((comment, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 1,
              borderBottom: "1px solid grey",
              boxShadow: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={comment.pic}
                alt={comment.user}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <Box sx={{ marginLeft: 1 }}>{comment.user}</Box>
              <Box sx={{ marginLeft: 1 }}>{comment.time}</Box>
            </Box>
            <br /> <br />
            <Box sx={{ marginLeft: 8, height: 8 }}>{comment.message}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Reviews;
