import React from "react";
import { fDate, fDateTime } from "../../../utils/formatTime";
import { useAuth } from "../../../contexts/AuthContext";
import {
	Box,
	Stack,
	Container,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

const UserDetailsTable = ({ userData }) => {
	console.log(userData)
	return (
		<TableContainer>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell component='th' scope='row'>
							Name
						</TableCell>
						<TableCell>{userData.name}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component='th' scope='row'>
							Email
						</TableCell>
						<TableCell>{userData.email}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component='th' scope='row'>
							Phone Number
						</TableCell>
						<TableCell>{userData.phoneNumber}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component='th' scope='row'>
							DOB
						</TableCell>
						<TableCell>{userData.dob}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component='th' scope='row'>
							Place
						</TableCell>
						<TableCell>{userData.place}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component='th' scope='row'>
							Education
						</TableCell>
						<TableCell>{userData.education}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell component='th' scope='row'>
							Contact Details
						</TableCell>
						<TableCell>{userData.contactDetails}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

const Profile = ({ userData }) => {
	const { user } = useAuth();

	return (
		<Box>
			<Stack direction='row' spacing={4} sx={{ marginBottom: 2 }}>
				<Stack direction='column' spacing={2} sx={{ width: "30%" }}>
					<Box>
						<img
							src={userData.pic}
							alt={userData.name}
							style={{ width: "50%", height: "50%", marginLeft: 30 }}
						/>
						<Container>
							<Box sx={{ marginBottom: 2, padding: 5}}>
								<Divider component='h1' />
							</Box>
							<Box>
								<TableContainer>
									<Table>
										<TableHead></TableHead>
										<TableBody>
											<TableRow>
												<TableCell component='th' scope='row'>
													Access
												</TableCell>
												<TableCell>{userData.access ? "true" : "false"}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell component='th' scope='row'>
													deleted
												</TableCell>
												<TableCell>{userData.deleted ? "true" : "false"}</TableCell>
											</TableRow>
                                            <TableRow>
												<TableCell component='th' scope='row'>
													Last Seen
												</TableCell>
												<TableCell>{fDateTime(userData.lastLogin)}</TableCell>
											</TableRow>
                                            <TableRow>
												<TableCell component='th' scope='row'>
													Rent Books
												</TableCell>
												<TableCell>{userData.requestedBooks.length}</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</Box>
						</Container>
						<Box
							direction='column'
							spacing={2}
							sx={{ display: "flex", alignItems: "center" }}
						></Box>
					</Box>
				</Stack>

				<Divider orientation='vertical' flexItem />

				<Box sx={{ width: "50%" }}>
					<Stack direction='column' sx={{ marginTop: -5 }}>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Box component='h1' sx={{ marginRight: 2 }}>
								{userData.name}
							</Box>
						</Box>
					</Stack>
					<Container>
						<Box>
							<Box sx={{ marginBottom: 1 }}>
								<UserDetailsTable userData={userData} />
							</Box>
						</Box>
					</Container>
				</Box>
			</Stack>
		</Box>
	);
};

export default Profile;
