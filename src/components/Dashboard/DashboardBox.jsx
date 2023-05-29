import React, { useState } from "react";
import {
	Grid,
	LinearProgress,
	Select,
	OutlinedInput,
	MenuItem,
	Button,
  Box,Table
} from "@mui/material";
import { useTheme } from "@mui/styles";
import {
	ResponsiveContainer,
	ComposedChart,
	AreaChart,
	LineChart,
	Line,
	Area,
	PieChart,
	Pie,
	Cell,
	YAxis,
	XAxis,
} from "recharts";

import DashBoardTheme from "./DashBoardTheme";
// styles
import useStyles from "./styles";

// components
import mock from "./data";
import BigStat from "./BigStat";
import Widget from "../Widget";
const mainChartData = getMainChartData();

export default function Dashboard(props) {
	var classes = useStyles();
	// local
	return (
		<>
			<DashBoardTheme>
        <Box>
				<Grid container spacing={2}>
					{mock.bigStat.map((stat) => (
						<Grid item md={2} sm={6} xs={12} key={stat.product}>
							<BigStat {...stat} />
						</Grid>
					))}
          <Box sx={{marginTop: 5, marginLeft: 2.2, width: "83%"}}> 
					<Grid item xs={12}>
						<Widget bodyClass={classes.mainChartBody}>
							<ResponsiveContainer width='100%' minWidth={500} height={350}>
								<ComposedChart
									margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
									data={mainChartData}
								>
									<YAxis
										ticks={[0, 25, 5000, 7500]}
										tick={{ fill: "80", fontSize: 14 }}
										stroke={"80"}
										tickLine={false}
									/>
									<XAxis
										tickFormatter={(i) => i + 1}
										tick={{ fill: "80", fontSize: 14 }}
										stroke={"70"}
										tickLine={false}
									/>
									<Line
										type='natural'
										dataKey='desktop'
										
										stroke={"red"}
										strokeWidth={2}
										dot={{
											stroke: "red",
											strokeWidth: 2,
											fill: "white",
										}}
									/>
									<Line
										type='natural'
										dataKey='mobile'
										stroke={"blue"}
										strokeWidth={2}
										dot={{
											stroke: "blue",
											strokeWidth: 2,
											fill: "white",
										}}
									/>
									<Line
										type='linear'
										dataKey='tablet'
										stroke={"orange"}
										strokeWidth={2}
										dot={{
											stroke: "orange",
											strokeWidth: 2,
											fill: "white",
										}}
									/>
								</ComposedChart>
							</ResponsiveContainer>
						</Widget>
					</Grid>
          <Grid item xs={12}>
          <Widget
            title="Support Requests"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
          </Box>
				</Grid>
        
        </Box>
			</DashBoardTheme>
		</>
	);
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
	var array = new Array(length).fill();
	let lastValue;

	return array.map((item, index) => {
		let randomValue = Math.floor(Math.random() * multiplier + 1);

		while (
			randomValue <= min ||
			randomValue >= max ||
			(lastValue && randomValue - lastValue > maxDiff)
		) {
			randomValue = Math.floor(Math.random() * multiplier + 1);
		}

		lastValue = randomValue;

		return { value: randomValue };
	});
}

function getMainChartData() {
	var resultArray = [];
	var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
	var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
	var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

	for (let i = 0; i < tablet.length; i++) {
		resultArray.push({
			tablet: tablet[i].value,
			desktop: desktop[i].value,
			mobile: mobile[i].value,
		});
	}

	return resultArray;
}
