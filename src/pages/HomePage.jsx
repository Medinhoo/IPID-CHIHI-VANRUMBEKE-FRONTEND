import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import cafetOpen from "../assets/cafet_open.png";

const HomePage = () => {
  const [isServiceAvailable, setIsServiceAvailable] = useState(true);

  const sessions = [
    { time: "Matin", emoji: "🌅", status: "ouvert" },
    { time: "Midi", emoji: "🌞", status: "en cours" },
    { time: "Soir", emoji: "🌙", status: "ouvert" },
  ];

  const statusStyles = {
    ouvert: { color: "green", text: "Session ouverte" },
    "en cours": { color: "orange", text: "Session en cours" },
    annulée: { color: "red", text: "Session annulée" },
  };

  const hoverEffects = {
    Matin: {
      background: "linear-gradient(135deg, #FFDDC1, #FFAA85)", // Aube
      boxShadow: "0 4px 15px rgba(255, 170, 133, 0.6)",
    },
    Midi: {
      background: "linear-gradient(135deg, #FFEE93, #FFD700)", // Soleil intense
      boxShadow: "0 4px 20px rgba(255, 215, 0, 0.6)",
    },
    Soir: {
      background: "linear-gradient(135deg, #6A5ACD, #483D8B)", // Nuit
      boxShadow: "0 4px 15px rgba(72, 61, 139, 0.6)",
    },
  };

  // Fonction pour obtenir la date du jour sous format "Jeudi 12 Octobre"
  const getFormattedDate = () => {
    const options = { weekday: "long", day: "numeric", month: "long" };
    const today = new Date();
    const formattedDate = today.toLocaleDateString("fr-FR", options);

    // Mettre la première lettre du jour en majuscule
    const [day, ...rest] = formattedDate.split(" ");
    const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);

    return [capitalizedDay, ...rest].join(" ");
  };

  return (
    <>
      {/* HOMEPAGE HERO */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: 4,
          minHeight: "40vh",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1, paddingRight: "16px" }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontFamily: "CustomFont" }}
          >
            Bienvenue sur la plateforme de commande de la cafeteria{" "}
            <span style={{ color: "#2A4B7C" }}>ISFCE</span> !
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {isServiceAvailable
              ? "Une session est actuellement ouverte par la cafeteria afin que vous puissiez passer commande !"
              : "Aucune session n'est ouverte pour le moment. Veuillez repasser plus tard."}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={cafetOpen}
            alt={
              isServiceAvailable ? "Service disponible" : "Service indisponible"
            }
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </motion.div>
      </Box>

      {/* AVAILABLE SESSIONS LIST */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -10 }} // Commence en bas avec une légère rotation
          animate={{ opacity: 1, y: 0, rotate: 0 }} // Se déplace vers sa position finale
          transition={{
            duration: 1, // Animation sur 1.5 seconde
            ease: "easeOut", // Courbe d'animation douce
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {getFormattedDate()}
          </Typography>
        </motion.div>
      </Box>

      {/* Liste des sessions disponibles */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {sessions.map((session, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}
          >
            <Button
              disabled={
                session.status === "annulée" || session.status === "fermée"
              } // Désactive si annulée ou fermée
              sx={{
                width: 300,
                height: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                boxShadow: 3,
                transition: "0.3s ease",
                "&:hover": hoverEffects[session.time],
                ":disabled": {
                  backgroundColor: "#e0e0e0", // Couleur grisée pour les boutons désactivés
                  boxShadow: "none", // Supprime l'ombre pour les boutons désactivés
                  cursor: "not-allowed", // Change le curseur pour indiquer un état désactivé
                },
              }}
            >
              <Typography variant="h5" component="div">
                {session.emoji}
              </Typography>
              <Typography variant="h6">{session.time}</Typography>
              <Typography
                variant="caption"
                sx={{
                  color: statusStyles[session.status]?.color,
                  fontWeight: "bold",
                }}
              >
                {statusStyles[session.status]?.text}
              </Typography>
            </Button>
          </motion.div>
        ))}
      </Box>
    </>
  );
};

export default HomePage;
