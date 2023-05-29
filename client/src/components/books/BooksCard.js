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
import { ColorPreview } from "../color-utils";

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
		id,
		name,
		authorName,
		cover,
		price,
		status,
		published,
		priceSale,
		likeNumber,
		commentNumber,
	} = product;
	const [liked, setLiked] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const handleLike = () => {
		setLiked(!liked);
		console.log(`Book ID: ${id}, Liked: ${!liked}`);
	};

	const handleComment = () => {
		window.open(`/comments/${id}`, "_blank");
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<Card>
			<Box sx={{ pt: "100%", position: "relative" }}>
				{status && (
					<Label
						variant='filled'
						color={(status === "sale" && "error") || "info"}
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
				<StyledProductImg alt={name} src={cover} />
				{status === "available" && (
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							bgcolor: "background.default",
							px: 1,
						}}
					>
						<Typography variant='body2'>Available</Typography>
					</Box>
				)}
				{status === "rented" && (
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							bgcolor: "background.default",
							px: 1,
						}}
					>
						<Typography variant='body2'>Rented</Typography>
					</Box>
				)}
				{status === "new" && (
					<Box
						sx={{
							position: "absolute",
							top: "12px",
							left: "12px",
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
						{name}
					</Typography>
				</Link>
				<Typography variant='caption'>Author: {authorName}</Typography>

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
								{name}
							</Typography>
							<Typography variant='body1' mb={2}>
								Author: {authorName}
							</Typography>
							<img
								src={cover}
								alt={name}
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
								Published Date: {published}
							</Typography>
						</Box>
					</DialogContent>
				</Modal>
			</Stack>
		</Card>
	);
}
