import React, { useState } from "react";
import { Box, Typography, Button, Badge, Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import testImage from "../assets/test.png";

const OrderHistoryPage = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: 1,
      items: ["Cheeseburger", "Fries", "Coke"],
      total: 15.49,
      date: "2024-11-10",
      timeOfDay: "morning",
      status: "Delivered",
      emoji: "☀️",
    },
    {
      id: 2,
      items: ["Margherita Pizza"],
      total: 8.99,
      date: "2024-11-09",
      timeOfDay: "afternoon",
      status: "In Progress",
      emoji: "🌞",
    },
    {
      id: 3,
      items: ["Sushi", "Miso Soup"],
      total: 12.99,
      date: "2024-11-08",
      timeOfDay: "evening",
      status: "Delivered",
      emoji: "🌜",
    },
  ];

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "#4CAF50";
      case "In Progress":
        return "#FFA726";
      case "Cancelled":
        return "#F44336";
      default:
        return "#000000";
    }
  };

  return (
    <Box sx={{ px: 4, py: 4, maxWidth: "800px", mx: "auto" }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontFamily: "CustomFont",
          fontWeight: "bold",
          color: "#2A4B7C",
          mb: 4,
          textAlign: "center",
        }}
      >
        Historique des commandes
      </Typography>

      <Grid container spacing={4}>
        {orders.map((order, index) => (
          <Grid item xs={12} key={order.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Box
                sx={{
                  p: 3,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  boxShadow: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  position: "relative",
                  border: order.status === "In Progress" ? "2px solid #FFA726" : "none",
                  overflow: "hidden",
                }}
                onClick={() => handleOrderClick(order)}
              >
                {order.status === "In Progress" && (
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: "4px solid transparent",
                      borderTop: "4px solid #FFA726",
                      borderRadius: "12px",
                      zIndex: 1,
                    }}
                  />
                )}
                <Box sx={{ display: "flex", alignItems: "center", zIndex: 2 }}>
                  <Typography variant="h6" sx={{ mr: 2 }}>
                    {order.emoji}
                  </Typography>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#2A4B7C" }}
                    >
                      Commande #{order.id}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {order.date} - {order.timeOfDay}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4CAF50" }}>
                  {order.total.toFixed(2)}€
                </Typography>
                <Typography variant="body2" sx={{ color: getStatusColor(order.status), zIndex: 2 }}>
                  {order.status}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              padding: "24px",
              zIndex: 1000,
              width: "400px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2A4B7C", mb: 2 }}>
              Détails de la commande #{selectedOrder.id}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Articles commandés :
            </Typography>
            {selectedOrder.items.map((item, index) => (
              <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                - {item}
              </Typography>
            ))}
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4CAF50", mt: 2 }}>
              Total : {selectedOrder.total.toFixed(2)}€
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "#2A4B7C" }}
              onClick={closeOrderDetails}
            >
              Fermer
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default OrderHistoryPage;
