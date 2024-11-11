import * as React from "react";
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

const pages = ["Commander", "Historique", "Mon compte"];

function ResponsiveAppBar() {

  return (
    <AppBar
      sx={{
        position: { xs: "fixed", md: "static" }, // Positionne l'AppBar en bas sur mobile, et statique sur les grands écrans
        width: { xs: "100%", md: "80%" },
        mx: "auto",
        borderRadius: 6,
        top: { xs: "auto" },
        bottom: { xs: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {
            //Logo desktop view
          }
          <Box
            component="img"
            src={logo}
            alt="Logo ISFCE"
            sx={{
              display: { xs: "none", md: "flex" },
              width: "55px",
              height: "auto",
              marginBottom:'2px',
              mr:1.5
            }}
          />

          {
            //Mobile view
          }
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "center",
                alignItems:'center',
                gap: 30,
              },
            }}
          >
            {
              //History order
            }
            <IconButton color="default" size="large">
              <HistoryIcon fontSize="large" sx={{color:'white'}}/>
            </IconButton>

            {
              //orders
            }
            <IconButton color="default" size="large">
              <LocalDiningIcon fontSize="large" sx={{color:'white'}}/>
            </IconButton>

            {
              //Logo
            }
            <Box
              component="img"
              src={logo}
              alt="Logo ISFCE"
              sx={{
                display: { xs: "flex", md: "none" },
                width: "50px",
                height: "50px",
                paddingBottom:'3px'
              }}
            />

            {
              //Wallet
            }
            <IconButton color="default" size="large">
            <WalletIcon fontSize="large" sx={{color:'white'}}/>
            </IconButton>

            {
              //Profile
            }
            <IconButton color="default" size="large">
            <AccountCircleIcon fontSize="large" sx={{color:'white'}} />
            </IconButton>
          </Box>

          {
            //desktop view
          }
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {
            //Wallet and disconnect
          }
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

              <IconButton size="large"  sx={{color:'white'}}>
                <WalletIcon/>
              </IconButton>
              <IconButton color="error" size="large">
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
