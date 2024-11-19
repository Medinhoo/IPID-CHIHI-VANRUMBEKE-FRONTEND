import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import WalletIcon from "@mui/icons-material/Wallet";
import logo from "../assets/logo_isfce.png";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";

const pages = [
  { name: "Commander", path: "/commander" },
  { name: "Historique", path: "/historique" },
  { name: "Mon compte", path: "/mon-compte" },
];

function ResponsiveAppBar() {
  return (
    <AppBar
      sx={{
        position: { xs: "fixed", md: "static" },
        width: { xs: "100%", md: "80%" },
        mx: "auto",
        borderRadius: 6,
        top: { xs: "auto" },
        bottom: { xs: 10 },
        mb: { md: 1 },
        backgroundColor: "#2A4B7C",
        transition: "background-color 0.3s ease, transform 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo desktop view */}
          <Box
            component="img"
            src={logo}
            alt="Logo ISFCE"
            sx={{
              display: { xs: "none", md: "flex" },
              width: "55px",
              height: "auto",
              marginBottom: "2px",
              mr: 1.5,
            }}
          />

          {/* Mobile view */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "center",
                alignItems: "center",
                gap: 30,
              },
            }}
          >
            {/* History order */}
            <IconButton
              component={Link}
              to="/historique"
              color="default"
              size="large"
              sx={{
                color: "white",
                transition: "transform 0.2s, color 0.2s",
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "#fffff",
                },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <HistoryIcon fontSize="large" />
            </IconButton>

            {/* Orders */}
            <IconButton
              component={Link}
              to="/commander"
              color="default"
              size="large"
              sx={{
                color: "white",
                transition: "transform 0.2s, color 0.2s",
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "#fffff",
                },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <LocalDiningIcon fontSize="large" />
            </IconButton>

            {/* Logo */}
            <Box
              component="img"
              src={logo}
              alt="Logo ISFCE"
              sx={{
                display: { xs: "flex", md: "none" },
                width: "50px",
                height: "50px",
                paddingBottom: "3px",
              }}
            />

            {/* Wallet */}
            <IconButton
              color="default"
              size="large"
              sx={{
                color: "white",
                transition: "transform 0.2s, color 0.2s",
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "#fffff",
                },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <WalletIcon fontSize="large" />
            </IconButton>

            {/* Profile */}
            <IconButton
              component={Link}
              to="/mon-compte"
              color="default"
              size="large"
              sx={{
                color: "white",
                transition: "transform 0.2s, color 0.2s",
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "#fffff",
                },
                "&:active": {
                  transform: "scale(0.9)",
                },
              }}
            >
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* Desktop view */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "CustomFont",
                  fontSize: 17,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: "-100%",
                    background: "rgba(255, 255, 255, 0.2)",
                    zIndex: 0,
                    transition: "all 0.3s ease",
                  },
                  "&:hover::before": {
                    left: 0,
                  },
                  "&:hover": {
                    color: "#fffff",
                    transform: "scale(1.05)",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Wallet and disconnect */}
          <Box sx={{ flexGrow: 0, display: "flex", gap: 3 }}>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Typography
                variant="h6"
                noWrap
                href="#app-bar-with-responsive-menu"
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  fontWeight: 500,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                60.00€
              </Typography>

              <IconButton
                size="large"
                sx={{
                  color: "white",
                  transition: "transform 0.2s, color 0.2s",
                  "&:hover": {
                    transform: "scale(1.2)",
                    color: "#ffcc00",
                  },
                  "&:active": {
                    transform: "scale(0.9)",
                  },
                }}
              >
                <WalletIcon />
              </IconButton>
              <IconButton
                color="error"
                size="large"
                sx={{
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                  "&:active": {
                    transform: "scale(0.9)",
                  },
                }}
              >
                <LogoutIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
