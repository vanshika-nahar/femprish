import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "../Assets/Logo.png";
import { useNavigate } from "react-router";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function NavBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffb3b3",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Logo}
            width={isSmallScreen? 40 : isMediumScreen? 50 : 70}
            style={{
              borderRadius: "100%",
              margin: 2,
              marginRight: isSmallScreen?2:5,
              marginLeft: isSmallScreen?15:0
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Kaushan Script",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              marginLeft: 1,
              color: "#000000",
            }}
          >
            Femprish
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              marginLeft: isSmallScreen ? 18 : 10,
            }}
          >
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{
                my: isSmallScreen?1:3,
                mx: isSmallScreen?1:4,
                color: "#ff3333",
                display: "block",
                fontWeight: 900,
                fontSize: isSmallScreen?12:18,
                fontFamily: "Merienda",
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                navigate("/about");
              }}
              sx={{
                my: isSmallScreen?1:3,
                mx: isSmallScreen?1:4,
                color: "#ff3333",
                display: "block",
                fontWeight: 900,
                fontSize: isSmallScreen?12:18,
                fontFamily: "Merienda",
              }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
