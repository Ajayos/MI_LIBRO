import React, { useState } from "react";
import { Box, Stack, TextField, Button, Divider } from "@mui/material";

const Reviews = () => {
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);

	const handleCommentInputChange = (event) => {
		setComment(event.target.value);
	};

	const handleSendComment = () => {
		// Handle sending comment to backend
		const newComment = {
			user: "John Doe",
			comment: comment,
			time: new Date().toLocaleString(),
		};
		setComments((prevComments) => [...prevComments, newComment]);
		setComment("");
	};

	return (
		<Box>
			<Stack direction='column' spacing={2} sx={{ marginBottom: 2 }}>
				<Box display='flex' alignItems='center'>
					<Box marginRight={1}>
						<img
							src='https://github.com/Ajayos.png'
							alt='User Profile'
							style={{ width: "40px", height: "40px", borderRadius: "50%" }}
						/>
					</Box>
					<Box flexGrow={1}>
						<TextField
							label='Type your comment'
							value={comment}
							onChange={handleCommentInputChange}
							fullWidth
						/>
					</Box>
					<Box marginLeft={1}>
						<Button
							variant='contained'
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
          src="https://github.com/Ajayos.png"
          alt="User Profile"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
        <Box sx={{ marginLeft: 1 }}>{comment.user}</Box>
        <Box sx={{ marginLeft: 1 }}>{comment.time}</Box>
      </Box>
      <br /> <br />
      <Box sx={{ marginLeft: 8, height: 8 }}>{comment.comment}</Box>
    </Box>
  ))}
</Box>

		</Box>
	);
};

export default Reviews;
