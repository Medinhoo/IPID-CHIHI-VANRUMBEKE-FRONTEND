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
import logo from '../assets/logo_isfce.png'
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ["Menu", "Mes commandes", "Mon compte"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        position: { xs: 'fixed', md: 'static' }, // Positionne l'AppBar en bas sur mobile, et statique sur les grands écrans
        width: { xs: "100%", md: "80%" },
        mx: 'auto',
        borderRadius: 6,
        top: {xs: 'auto'} , 
        bottom: {xs: 10},
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {
          //Logo desktop view
          }
          <Box component="img" 
              src={logo} 
              alt="Logo ISFCE" 
              sx={{ display: { xs: "none", md: "flex" }, width: '60px', height: 'auto' }} 
          />

          {
          //Mobile view
          }
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none", justifyContent:'center', gap: 4 } }}>


          {
            //Wallet
          }
          
              <IconButton color="default">
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              
              <IconButton color="default">
                <WalletIcon fontSize="large" />
              </IconButton>

          {
          //Logo
          }
          <Box component="img" 
              src={logo} 
              alt="Logo ISFCE" 
              sx={{ display: { xs: "flex", md: "none" }, width: '50px', height: '50px'}} 
          />
          <IconButton color="default">
              <LocalDiningIcon fontSize="large"/>
            </IconButton>
          <IconButton color="default">
              <LocalDiningIcon fontSize="large"/>
            </IconButton>

          <IconButton color="error">
              <LogoutIcon fontSize="large"/>
            </IconButton>

          
            
          </Box>
          

          {
          //desktop view
          }
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {
          //Wallet and disconnect
          }
          <Box sx={{ flexGrow: 0, display: "flex", gap:3 }}>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Typography
                variant="h6"
                noWrap
                href="#app-bar-with-responsive-menu"
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems:'center',
                  fontWeight: 500,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                60.00€
              </Typography>

              <IconButton color="default">
                <WalletIcon />
              </IconButton>
            <IconButton color="error">
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
