import React, { useState } from "react";
import {
	Box,
	Card,
	Link,
	Typography,
	Stack,
	IconButton,
	Button,
	Modal,
	DialogContent,
	Avatar,
	AvatarGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { fCurrency } from "../../utils/NumberConvert";
import Label from "../label";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { fDate } from "../../utils/formatTime";
import { useAuth } from "../../contexts/AuthContext";
const StyledProductImg = styled("img")({
	top: 0,
	width: "100%",
	height: "100%",
	objectFit: "cover",
	position: "absolute",
});

export default function ShopProductCard({ product }) {
	const { LikeBook } = useAuth();
	const {
		_id,
		name,
		authorName,
		cover,
		price,
		status,
		publishedDate,
		priceSale,
		likeNumber,
		commentNumber,
		pic,
		title,
		author,
		publicationDate,
		genre,
		isbn,
		description,
		usersPics,
	} = product;

	const [liked, setLiked] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const handleLike = () => {
		setLiked(!liked);
		LikeBook(_id, liked);
	};

	const handleOpenModal = () => {
		window.location.href = `/book/${_id}`;
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const isNewProduct = () => {
		const currentDate = new Date();
		const publicationDateObj = new Date(publicationDate);
		const timeDifference = currentDate.getTime() - publicationDateObj.getTime();
		const daysDifference = timeDifference / (1000 * 3600 * 24);
		const timeLimitDays = 2;
		return daysDifference <= timeLimitDays;
	};

	const isNew = isNewProduct();

	return (
		<Card>
			<Box sx={{ pt: "100%", position: "relative" }}>
				{status && (
					<Label
						variant='filled'
						color={
							status === "Available"
								? "success"
								: status === "Rented"
								? "warning"
								: "error"
						}
						sx={{
							zIndex: 9,
							top: 16,
							right: 16,
							position: "absolute",
							textTransform: "uppercase",
						}}
					>
						{status}
					</Label>
				)}

				<StyledProductImg alt={title} src={pic} />
				{isNew && (
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							bgcolor: "primary.main",
							color: "common.white",
							p: "2px 8px",
							borderRadius: "4px",
						}}
					>
						<Typography variant='caption'>New</Typography>
					</Box>
				)}
			</Box>

			<Stack spacing={2} sx={{ p: 3 }}>
				<Link color='inherit' underline='hover'>
					<Typography variant='subtitle2' noWrap>
						{title}
					</Typography>
				</Link>
				<Typography variant='caption'>Author: {author}</Typography>
				<Typography variant='caption'>Likes: 5 </Typography>
				<Typography variant='caption'>Comments: {commentNumber}</Typography>
				<Typography variant='caption'>
					Published Date: {fDate(publicationDate)}
				</Typography>
				<Typography variant='caption'>Genre: {genre}</Typography>

				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<IconButton color={liked ? "error" : "default"} onClick={handleLike}>
						{liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</IconButton>
					{usersPics && (
						<AvatarGroup max={12}>
							{usersPics.map((userPic, index) => (
								<Avatar
									key={index}
									src={userPic}
									alt={`User ${index + 1}`}
									sx={{ width: 24, height: 24 }}
								/>
							))}
						</AvatarGroup>
					)}
				</Stack>

				<Button variant='contained' onClick={handleOpenModal}>
					View Details
				</Button>

				<Modal open={openModal} onClose={handleCloseModal}>
					<DialogContent>
						<Box sx={{ p: 3 }}>
							<Typography variant='h5' mb={2}>
								{title}
							</Typography>
							<Typography variant='body1' mb={2}>
								Author: {author}
							</Typography>
							<img
								src={pic}
								alt={title}
								style={{ width: "50%", height: "50%" }}
							/>
							<Typography variant='body1' mb={2}>
								Likes: 5{" "}
							</Typography>
							<Typography variant='body1' mb={2}>
								Comments: {commentNumber}
							</Typography>
							<Typography variant='body1' mb={2}>
								Published Date: {publicationDate}
							</Typography>
							<Typography variant='body1'>Genre: {genre}</Typography>
							<Typography variant='body1'>ISBN: {isbn}</Typography>
							<Typography variant='body1'>
								Description: {description}
							</Typography>
							{usersPics && (
								<Stack direction='row' spacing={1} mt={2}>
									{usersPics.map((userPic, index) => (
										<Avatar
											key={index}
											src={userPic}
											alt={`User ${index + 1}`}
										/>
									))}
								</Stack>
							)}
						</Box>
					</DialogContent>
				</Modal>
			</Stack>
		</Card>
	);
}
