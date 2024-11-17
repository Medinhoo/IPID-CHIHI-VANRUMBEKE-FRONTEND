import React, { useState } from "react";
import { Box, Typography, Avatar, Button, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import testImage from "../assets/test.png";

const ProfilePage = () => {
  const [showBills, setShowBills] = useState(false);

  const handleHoverStart = () => {
    setShowBills(true);
    setTimeout(() => setShowBills(false), 2000);
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 4,
        position: "relative",
        maxWidth: "1000px",
        mx: "auto",
        textAlign: "center",
      }}
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: "24px" }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontFamily: "CustomFont",
            fontWeight: "bold",
            color: "#2A4B7C",
            mb: 2,
          }}
        >
          Mon Profil
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Gérez vos informations personnelles et vos préférences.
        </Typography>
      </motion.div>

      {/* PROFILE AVATAR AND INFO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: "24px" }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <Avatar
            src={testImage}
            alt="Profil Avatar"
            sx={{
              width: "120px",
              height: "120px",
              mx: "auto",
              mb: 2,
              border: "4px solid #2A4B7C",
            }}
          />
        </motion.div>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#2A4B7C",
          }}
        >
          John Doe
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "textSecondary",
          }}
        >
          john.doe@example.com
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {/* PROFILE SETTINGS */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              p: 3,
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#2A4B7C",
                mb: 2,
                textAlign: "left",
              }}
            >
              Paramètres de profil
            </Typography>

            {/* Buttons */}
            {[
              { text: "Modifier les informations personnelles", color: "#4CAF50" },
              { text: "Changer de mot de passe", color: "#FF9800" },
              { text: "Déconnexion", color: "#F44336" },
            ].map((action, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 4px 15px rgba(0, 0, 0, 0.2)`,
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  marginBottom: "16px",
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: action.color,
                    color: "#fff",
                    fontWeight: "bold",
                    py: 1.5,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: `${action.color}CC`, // Slightly lighter hover effect
                    },
                  }}
                >
                  {action.text}
                </Button>
              </motion.div>
            ))}
          </Box>
        </Grid>

        {/* ACTIVITY HISTORY */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 3,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#2A4B7C",
                mb: 2,
                textAlign: "left",
              }}
            >
              Historique récent
            </Typography>

            {[
              "Commande #1234 - Cheeseburger & Salade - 12,97€",
              "Commande #1233 - Margherita Pizza - 8,99€",
              "Commande #1232 - California Roll - 6,49€",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 4px 15px rgba(33, 150, 243, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  marginBottom: "8px",
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    boxShadow: 1,
                    textAlign: "left",
                    transition: "0.3s ease",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#2A4B7C",
                      fontWeight: "bold",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Grid>

        {/* WALLET */}
        <Grid item xs={12} md={4}>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
              boxShadow: "0 4px 15px rgba(33, 150, 243, 0.4)",
            }}
            onHoverStart={handleHoverStart}
            style={{
              position: "relative",
            }}
          >
            <AnimatePresence>
              {showBills &&
                Array.from({ length: 10 }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 150 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                    style={{
                      position: "absolute",
                      top: "-50px",
                      left: `${Math.random() * 80}%`,
                      fontSize: "24px",
                      zIndex: 3,
                    }}
                  >
                    💸
                  </motion.div>
                ))}
            </AnimatePresence>
            <Box
              sx={{
                p: 3,
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#2A4B7C",
                  mb: 2,
                }}
              >
                Mon Portefeuille
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#4CAF50",
                }}
              >
                120,50€
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
