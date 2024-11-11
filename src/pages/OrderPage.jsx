import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OrderPage = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              WebkitBackgroundClip: "text",
              fontFamily: "Poppins",
            }}
          >
            BIENVENUE SUR NAJ LEARN
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: "1.2rem",
              fontFamily: "Poppins",

              border: 1,
              backgroundSize: "cover",
              p: 5,
              borderRadius: 6,
              "&:hover": {
                backgroundColor: "#028052",
                transform: "scale(1.01)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            eligendi dolores tempora a asperiores mollitia ipsum voluptates
            consequuntur? Eos qui non deleniti rem animi omnis minima. Aliquid
            sequi accusantium deleniti, voluptatibus expedita repudiandae
            maiores, quibusdam labore ex mollitia quisquam voluptatum neque
            assumenda natus praesentium dolor! Reiciendis vero aspernatur
            explicabo perspiciatis!
          </Typography>
        </motion.div>

        {/* Buttons with hover effects */}
        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#034d3c",
              color: "white",
              fontFamily: "Poppins",
              "&:hover": {
                backgroundColor: "#028052",
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            Découvrir les modules
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#034d3c",
              borderColor: "#034d3c",
              fontFamily: "Poppins",
              "&:hover": {
                borderColor: "#028052",
                color: "#028052",
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            Qui suis-je ?
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              WebkitBackgroundClip: "text",
              fontFamily: "Poppins",
            }}
          >
            BIENVENUE SUR NAJ LEARN
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: "1.2rem",
              fontFamily: "Poppins",

              border: 1,
              backgroundSize: "cover",
              p: 5,
              borderRadius: 6,
              "&:hover": {
                backgroundColor: "#028052",
                transform: "scale(1.01)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            eligendi dolores tempora a asperiores mollitia ipsum voluptates
            consequuntur? Eos qui non deleniti rem animi omnis minima. Aliquid
            sequi accusantium deleniti, voluptatibus expedita repudiandae
            maiores, quibusdam labore ex mollitia quisquam voluptatum neque
            assumenda natus praesentium dolor! Reiciendis vero aspernatur
            explicabo perspiciatis!
          </Typography>
        </motion.div>

        {/* Buttons with hover effects */}
        <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#034d3c",
              color: "white",
              fontFamily: "Poppins",
              "&:hover": {
                backgroundColor: "#028052",
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            Découvrir les modules
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#034d3c",
              borderColor: "#034d3c",
              fontFamily: "Poppins",
              "&:hover": {
                borderColor: "#028052",
                color: "#028052",
                transform: "scale(1.05)",
                transition: "0.3s ease-in-out",
              },
            }}
          >
            Qui suis-je ?
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderPage;
