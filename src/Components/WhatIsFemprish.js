import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Image from "../Assets/what_is_femprish.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function WhatIsFemprish() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down(480));
  const medium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#ffffff", padding:small?"50px 0px": "180px 0px" }}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: medium ? "row" : "column",
            justifyContent: "center",
            alignItems:"center"
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: small ? 35 : 45,
                fontFamily: "Merienda",
                fontWeight: "bold",
                color: "#ff3333",
                textAign: "right",
                marginTop: 2,
                marginBottom: 3,
              }}
            >
              What is femprish?
            </Typography>
            <Typography
              sx={{
                fontSize: small ? 12 : 20,
                fontFamily: "Merienda",
                fontWeight: "bold",
                color: "#a3a3c2",
                textAign: medium ? "center" : "right",
              }}
            >
              Femprish is an organization that focuses on <br /> advocating
              women's rightd and gender equality. We <br /> want to get rid of
              the negative connotation that <br /> comes with the 'feminist' ,
              and the stigma that <br /> accompanies the talk of women' right.
              <br />
              <br />
              We want to change the world step by step, because <br /> every
              revolution starts with one strong voice.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={Image}
              width={medium ? 600 : 300}
              style={{ borderRadius: "5%",marginLeft:small?10:0 }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
