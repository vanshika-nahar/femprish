import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Caresol from "./Caresol";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Mission() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down(480));
  const medium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div
      style={{
        backgroundColor: "#ff3333",
        padding: "80px 0px",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign:"center"
            }}
          >
            <Typography
              sx={{
                fontSize: small ? 30 : 45,
                fontFamily: "Merienda",
                fontWeight: "bold",
                color: "#ffffff",
                textAign: medium ? "center" : "left",
                marginTop: small?1:10,
                marginBottom: small?0:3,
              }}
            >
              Our Mission
            </Typography>
            <Typography
              sx={{
                fontSize: small ? 14 : 20,
                fontFamily: "Merienda",
                fontWeight: "bold",
                color: "#ffffff",
                textAign: medium ? "center" : "left",
                marginTop: small?2:5,
                marginBottom: small?2:20,
              }}
            >
              The mission of feminism is to advocate for gender equality and to
              promote the social, political, and economic rights of women.
              Feminism seeks to eliminate discrimination and oppression based on
              gender and to challenge the systemic power structures that
              perpetuate inequality. Feminists believe that gender should not
              determine a person's worth, opportunities, or access to resources.
              Feminism aims to create a world where individuals of all genders
              have equal rights and opportunities, and where gender-based
              violence, harassment, and discrimination are no longer tolerated.
              The feminist movement has achieved significant progress in many
              areas, including reproductive rights, workplace equality, and
              political representation. However, there is still much work to be
              done to ensure true gender equality for all individuals,
              especially for those who experience multiple forms of oppression,
              such as women of color, trans and non-binary individuals, and
              those living in poverty.
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Caresol />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
