import { useTheme } from "@emotion/react";
import { Box, Card, CardContent, CardHeader, Container, CssBaseline, Divider, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(5, 17, 59)', // Replace with your desired background color
    minHeight: '100vh',
  },
}));

const AuthControl = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [user, setUser] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [user]);

  if (user) {
    return (window.location.href = "/Dashboard");
  } else {
    return (
      <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            color: "white",
            borderRadius: "5px",
            boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.2)",
            position: "absolute",

          }}
        >
          <Box sx={{ position: "absolute",marginTop: "50%"}}> </Box>
        <Card
          sx={{position: "absolute",}}
        >
          <CardHeader
            title="Welcome to the Dashboard"
            subheader="Please login to continue"
            sx={{ color: "white" }}
          />
          <CardContent>
            <Stack
              alignItems="center"
              justifyContent="center"
              spacing={1}
              sx={{ color: "white" }}
            >
              {error ? () => {setError("")} : null }
              <Typography
                gutterBottom
                variant="h2"
                sx={{ color: "white" }}
              ></Typography>
              </Stack> <Stack>
              <Typography
                variant="caption"
                fontSize="16px"
                textAlign="center"
                sx={{ color: "white" }}
              >
                Enter your credentials to continue
              </Typography>
            </Stack>
          </CardContent>
          </Card>
          </Box>
        </Container>

    </div>
    );
  }
};

export default AuthControl;


/**
 *  <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ backgroundColor: "red" }}>
                                    <Grid item sx={{ mb: 3 }}>
                                        <Link to="#">
                                          hehehehsdgv
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        gutterBottom
                                                        variant='h2'
                                                    >
                                                        {'hi'}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        fontSize="16px"
                                                        textAlign='center'
                                                    >
                                                        Enter your credentials to continue
                                                    </Typography> 
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography component={Link} to="#" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                                {'auth.not_account'}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
 */