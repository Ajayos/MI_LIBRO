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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { fCurrency } from "../../utils/NumberConvert";
import Label from "../label";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";

const StyledProductImg = styled("img")({
	top: 0,
	width: "100%",
	height: "100%",
	objectFit: "cover",
	position: "absolute",
});

export default function ShopProductCard({ product }) {
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
	} = product;

	const [liked, setLiked] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const handleLike = () => {
		setLiked(!liked);
		console.log(`Book ID: ${_id}, Liked: ${!liked}`);
	};

	const handleComment = () => {
		window.open(`/comments/${_id}`, "_blank");
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const isNewProduct = () => {
		const currentDate = new Date();
		const publicationDateObj = new Date(publicationDate);
		const timeDifference = currentDate.getTime() - publicationDateObj.getTime();
		const daysDifference = timeDifference / (1000 * 3600 * 24);

		// Consider the product "new" if published within the last 2 days
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

				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<Typography variant='subtitle1'>
						<Typography
							component='span'
							variant='body1'
							sx={{
								color: "text.disabled",
								textDecoration: "line-through",
							}}
						>
							{priceSale && fCurrency(priceSale)}
						</Typography>
						&nbsp;
						{fCurrency(price)}
					</Typography>
				</Stack>

				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<IconButton
						color={liked ? "primary" : "default"}
						onClick={handleLike}
					>
						{liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</IconButton>
					<IconButton onClick={handleComment}>
						<CommentIcon />
					</IconButton>
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
								style={{ width: "100%", height: "auto" }}
							/>
							<Typography variant='body1' mt={2}>
								Price: {fCurrency(price)}
							</Typography>
							{priceSale && (
								<Typography variant='body1' color='error'>
									Sale Price: {fCurrency(priceSale)}
								</Typography>
							)}
							<Typography variant='body1'>Likes: {likeNumber}</Typography>
							<Typography variant='body1'>Comments: {commentNumber}</Typography>
							<Typography variant='body1'>
								Published Date: {publishedDate}
							</Typography>
							<Typography variant='body1'>Genre: {genre}</Typography>
							<Typography variant='body1'>ISBN: {isbn}</Typography>
							<Typography variant='body1'>
								Description: {description}
							</Typography>
						</Box>
					</DialogContent>
				</Modal>
			</Stack>
		</Card>
	);
}
