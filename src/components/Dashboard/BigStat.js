import React, { useState } from "react";
import { Grid, Select, MenuItem, Input } from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { useTheme } from "@mui/styles";
import { BarChart, Bar } from "recharts";


// styles
import useStyles from "./styles";

// components
import Widget from "../Widget";
import { Typography } from "../Wrappers";

export default function BigStat(props) {
  var { product, total, color, } = props;
  var classes = useStyles();
  var theme = useTheme();



  return (
    <Widget
      header={
        <div className={classes.title}>
          <Typography variant="h5">{product}</Typography>
        </div>
      }
      upperTitle
      bodyClass={classes.bodyWidgetOverflow}
    >
      <div className={classes.totalValueContainer}>
        <div className={classes.totalValue}>
          <Typography size="xxl" color="text" colorBrightness="secondary">
            {total}
          </Typography>
          
        </div>
        <BarChart width={150} height={70} data={getRandomData()}>
          <Bar
            dataKey="value"
            fill={"green"}
            radius={10}
            barSize={10}
          />
        </BarChart>
      </div>
    </Widget>
  );
}

// #######################################################################

function getRandomData() {
  return Array(7)
    .fill()
    .map(() => ({ value: Math.floor(Math.random() * 10) + 1 }));
}
