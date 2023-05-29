import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import  AppWidget  from "./Widget";
import AppVisits from "./Website";

export default function Dashboard() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | MI_LIBRO </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidget title="Total users" total={100} icon={<AccountCircleIcon />} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidget title="Total Books" total={500} color="info" icon={<LibraryBooksIcon />} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidget title="Rent Books" total={2} color="warning" icon={<LibraryBooksIcon />} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidget title="Online users" total={10} color="error" icon={<OnlinePredictionIcon />} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppVisits
              title="Website Visits"
              subheader="Total Unique Visitors"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
