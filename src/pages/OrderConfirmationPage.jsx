import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import qrImage from "../assets/QR.png";
import testImage from "../assets/test.png";

const OrderConfirmationPage = () => {
  const [timeLeft, setTimeLeft] = useState(5);
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsTimerComplete(true);
    }
  }, [timeLeft]);

  const handleCancel = () => {
    setTimeLeft(0);
    setIsTimerComplete(true);
  };

  const handleRecapClick = () => {
    navigate("/historique");
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 4,
        maxWidth: "600px",
        mx: "auto",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontFamily: "CustomFont",
          fontWeight: "bold",
          color: "#2A4B7C",
          mb: 4,
        }}
      >
        Confirmation de commande
      </Typography>

      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Voici un récapitulatif de votre commande :
      </Typography>

      <motion.div
        whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
        onClick={handleRecapClick}
        style={{
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            p: 3,
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 2,
            mb: 4,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img
            src={testImage}
            alt="Article commandé"
            style={{ width: "50px", height: "50px", borderRadius: "8px" }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Commande : Burger + Frites + Boisson
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#4CAF50", ml: 2 }}
            >
              Total : 15,49€
            </Typography>
          </Box>
        </Box>
      </motion.div>

      <AnimatePresence>
        {!isTimerComplete ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "10px solid #2A4B7C",
              position: "relative",
              margin: "0 auto",
              marginBottom: "24px",
            }}
          >
            <motion.div
              initial={{ strokeDasharray: "0 100" }}
              animate={{ strokeDasharray: `${(5 - timeLeft) * 20} 100` }}
              transition={{ duration: 1, ease: "linear" }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: "50%",
                border: "10px solid #2A4B7C",
                clipPath: "circle(50%)",
                backgroundColor: "rgba(42, 75, 124, 0.1)",
              }}
            ></motion.div>
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontWeight: "bold",
              }}
            >
              {timeLeft} s
            </Typography>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={qrImage}
              alt="Code QR de la commande"
              style={{ width: "150px", height: "150px", marginBottom: "24px", cursor: "pointer" }}
              whileHover={{ scale: 1.1 }}
              onClick={() => window.open(qrImage, "_blank")}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#2A4B7C" }}
            >
              Voici le code QR de votre commande
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>

      {!isTimerComplete && (
        <Button
          variant="contained"
          sx={{ mt: 3, backgroundColor: "#F44336", color: "white" }}
          onClick={handleCancel}
        >
          Annuler
        </Button>
      )}
    </Box>
  );
};

export default OrderConfirmationPage;
