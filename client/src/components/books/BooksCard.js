import React, { useEffect, useState } from "react";
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
	Tabs,
	Tab,
	Skeleton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Label from "../label";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { fDate } from "../../utils/formatTime";
import { useAuth } from "../../contexts/AuthContext";
import Details from "./Details";
import Review from "./Reviews";
import History from "./History";

import { Container } from "@mui/system";
const StyledProductImg = styled("img")({
	top: 0,
	width: "100%",
	height: "100%",
	objectFit: "cover",
	position: "absolute",
});

export default function ShopProductCard({ product }) {
	const { LikeBook, user } = useAuth();
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
	const [selectedTab, setSelectedTab] = useState(0);

	useEffect(() => {
		for (var i = 0; i < product.likes.length; i++) {
			if (product.likes[i]._id === user.id) {
				setLiked(true);
			}
		}
	}, []);
	const handleTabChange = (event, newValue) => {
		setSelectedTab(newValue);
	};
	const handleLike = () => {
		setLiked(!liked);
		LikeBook(_id, !liked);
	};

	const handleOpenModal = () => {
		//window.location.href = `/book/${_id}`;
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
		const timeLimitDays = 2;
		return daysDifference <= timeLimitDays;
	};

	const IsUserLiked = () => {
		if (liked) return true;
		var is = false;
		for (var i = 0; i < product.likes.length; i++) {
			if (product.likes[i]._id === user.id) {
				is = true;
			}
		}
		return is;
	};

	const bookStatus = () => {
		let status = product.status;
		if (status === "Available") {
			return "Available";
		} else if (status === "Rented") {
			if (product.rented.user === user._id) {
				return "Return Book";
			}
			return "Rented";
		} else if (status === "Processing") {
			if (product.request === user._id) {
				return "Request send";
			} else {
				return "Book on a request";
			}
		} else if (status === "Unavailable") {
			return "Book unavailable";
		} else {
			return "Book not available";
		}
	};

	const isNew = isNewProduct();

	return (
		<Card>
			<Box sx={{ pt: "100%", position: "relative" }}>
				{status && (
					<Label
						variant='filled'
						color={
							bookStatus() === "Available"
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
						{bookStatus()}
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

				<Modal
					open={openModal}
					onClose={handleCloseModal}
					aria-labelledby='parent-modal-title'
					aria-describedby='parent-modal-description'
				>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							height: "90%",
							width: "90%",
							bgcolor: "background.paper",
							border: "2px solid #000",
							boxShadow: 24,
							pt: 2,
							px: 4,
							pb: 3,
						}}
					>
						<Box>
							<Tabs value={selectedTab} onChange={handleTabChange} centered>
								<Tab label='Details' />
								<Tab label='Review' />
								<Tab label='History' />
							</Tabs>
							{selectedTab === 0 && (
								<Container sx={{ marginTop: 5, marginBlockEnd: 10 }}>
									<Details bookData={product} />
								</Container>
							)}
							{selectedTab === 1 && (
								<Container>
									<Review bookData={product} />
								</Container>
							)}
							{selectedTab === 2 && (
								<Container>
									<History bookData={product} />
								</Container>
							)}
						</Box>
					</Box>
				</Modal>
			</Stack>
		</Card>
	);
}
