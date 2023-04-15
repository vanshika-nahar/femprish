import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Paper, Grid } from "@material-ui/core";
import img1 from "../Assets/img_1.png";
import img2 from "../Assets/img_2.png";
import img3 from "../Assets/img_3.png";
import img4 from "../Assets/img_4.png";
import img5 from "../Assets/img_5.png";
import img6 from "../Assets/img_6.png";
import img7 from "../Assets/img_7.png";
import img8 from "../Assets/img_8.png";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles({
  carouselImage: {
    height: "80%",
    width: "80%",
    objectFit: "cover",
    margin: 10,
    borderRadius: 20,
  },
});

const images = [
  {
    id: 1,
    src: img1,
  },
  {
    id: 2,
    src: img2,
  },
  {
    id: 3,
    src: img3,
  },
  {
    id: 4,
    src: img4,
  },
  {
    id: 5,
    src: img5,
  },
  {
    id: 6,
    src: img6,
  },
  {
    id: 7,
    src: img7,
  },
  {
    id: 8,
    src: img8,
  },
];

const Caresol = () => {
  const classes = useStyles();

  const slides = [];

  for (let i = 0; i < images.length; i += 4) {
    const slideImages = [];

    for (let j = i; j < i + 4; j++) {
      if (j < images.length) {
        const image = images[j];
        slideImages.push(
          <Grid key={image.id} md={3} item xs={6} sm={3}>
            <Paper style={{ backgroundColor: "#ff3333", border: "none" }}>
              <img
                className={classes.carouselImage}
                src={image.src}
                alt={`Image ${image.id}`}
              />
            </Paper>
          </Grid>
        );
      }
    }

    slides.push(slideImages);
  }

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(
    theme.breakpoints.between("sm", "md")
  );
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Carousel
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
    >
      {slides.map((slide, index) => (
        <Grid container key={index}>
          {slide}
        </Grid>
      ))}
    </Carousel>
  );
};

export default Caresol;
