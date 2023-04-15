import { Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../Assets/Logo.png";
import Instagram from "../Assets/instagram.png";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Footer() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down(480));
  const medium = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      style={{
        backgroundColor: "#f2f2f2",
        overflow: "hidden",
        padding: small ? "30px 15px" : "100px",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Grid item xs={6}>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "left",
            }}
            container
            spacing={2}
          >
            <Grid item xs={6} md={12}>
              <Grid container spacing={2}>
                <Grid item xs={2} md={6}>
                  <img
                    src={Logo}
                    style={{
                      borderRadius: "100%",
                      margin: 2,
                      marginRight: 5,
                      width: small ? 40 : 70
                    }}
                  />
                </Grid>
                <Grid item xs={2} md={6}>
                  <Typography
                    style={{
                      margin: small?"10px 30px":"15px 10px",
                      fontFamily: "Kaushan Script",
                      fontWeight: 700,
                      fontSize: small?18:24,
                      color: "inherit",
                      textAlign: "center",
                      color: "#000000",
                    }}
                  >
                    Femprish
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: 12,
                  fontFamily: "Merienda",
                  fontWeight: "bold",
                  color: "darkgrey",
                  display: small ? "none" : "flex",
                  width: 500
                }}
              >
                Feminism in India has evolved through the centuries, combining
                indigenous and Western philosophies, resulting in a unique
                discourse and activism. Despite progress in women's rights,
                gender-based violence, discrimination, and cultural attitudes
                still pose significant challenges, with feminism playing a
                crucial role in advocating for gender equality and women's
                empowerment.
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  fontFamily: "Merienda",
                  fontWeight: "bold",
                  color: "#000000",
                  display: small ? "flex" : "none",
                  width: 500
                }}
              >
                Copyright © All rights reserved to Vanshika Nahar.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
          item
          xs={6}
        >
          <img src={Instagram} style={{ display: small ? "none" : "flex", width: 300, borderRadius: 10 }} />
        </Grid>
      </Grid>
      <Typography
        sx={{
          fontSize: 12,
          fontFamily: "Merienda",
          fontWeight: "bold",
          color: "#000000",
          display: small ? "none" : "flex",
          width: 500
        }}
      >
        Copyright © All rights reserved to Vanshika Nahar.
      </Typography>
    </Grid>
  );
}
