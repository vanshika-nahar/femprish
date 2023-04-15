import React from "react";
import { Grid, Typography } from "@mui/material";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function About() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down(480));
  const medium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid>
      <Navbar />
      <Grid style={{marginTop:small?50:100}}>
        <Typography
          style={{
            color: "#ff3333",
            fontFamily: "Merienda",
            fontSize: small?20:40,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom:small?30:50
          }}
        >
          ABOUT US
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontFamily: "Merienda",
            fontSize: small?8:20,
            fontWeight: "bold",
            textAlign: "justify",
            margin: small?"15px 40px":"15px 100px",
          }}
        >
          Feminism in India has a long and rich history that dates back to the
          early 19th century when women began to organize and demand equal
          rights and opportunities. Indian feminism has been influenced by both
          Western and indigenous philosophies and movements, resulting in a
          unique feminist discourse and activism in the country.
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontFamily: "Merienda",
            fontSize: small?8:20,
            fontWeight: "bold",
            textAlign: "justify",
            margin: small?"15px 40px":"15px 100px",
          }}
        >
          One of the earliest feminist movements in India was the campaign
          against the practice of sati, which was led by Raja Ram Mohan Roy in
          the early 1800s. Other important feminist figures in Indian history
          include Savitribai Phule, who fought for the education of women, and
          Pandita Ramabai, who worked for the upliftment of widows.
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontFamily: "Merienda",
            fontSize: small?8:20,
            fontWeight: "bold",
            textAlign: "justify",
            margin: small?"15px 40px":"15px 100px",
          }}
        >
          In modern times, the feminist movement in India has gained momentum,
          with women's rights organizations and activists working to address
          issues such as gender-based violence, discrimination, and unequal
          access to education and employment. The 21st century has seen
          significant progress in women's rights, with the passage of laws
          protecting women from domestic violence, sexual harassment, and
          workplace discrimination.
        </Typography>
        <Typography
          style={{
            color: "#000000",
            fontFamily: "Merienda",
            fontSize: small?8:20,
            fontWeight: "bold",
            textAlign: "justify",
            margin: small?"15px 40px":"15px 100px",
            marginBottom:small?250:100
          }}
        >
          However, there are still significant challenges facing women in India,
          including high rates of gender-based violence, lack of access to
          healthcare and education, and cultural attitudes that reinforce gender
          inequality. Feminism in India continues to play an important role in
          advocating for gender equality and promoting women's empowerment.
        </Typography>
      </Grid>
      <Footer />
    </Grid>
  );
}
