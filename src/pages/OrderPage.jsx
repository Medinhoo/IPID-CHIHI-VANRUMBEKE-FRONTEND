import React, { useState } from "react";
import { Box, Typography, Button, Badge } from "@mui/material";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import testImage from "../assets/test.png";

const OrderPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [floatingText, setFloatingText] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { emoji: "🍔", name: "Burgers" },
    { emoji: "🍕", name: "Pizzas" },
    { emoji: "🍣", name: "Sushis" },
    { emoji: "🥗", name: "Salades" },
    { emoji: "🍝", name: "Pâtes" },
    { emoji: "🧁", name: "Desserts" },
  ];

  const foodItems = [
    { id: 1, category: "Burgers", name: "Cheeseburger", image: testImage, price: 5.99 },
    { id: 2, category: "Pizzas", name: "Margherita", image: testImage, price: 8.99 },
    { id: 3, category: "Sushis", name: "California Roll", image: testImage, price: 6.49 },
    { id: 4, category: "Salades", name: "César", image: testImage, price: 4.99 },
    { id: 5, category: "Pâtes", name: "Carbonara", image: testImage, price: 7.99 },
    { id: 6, category: "Desserts", name: "Cupcake", image: testImage, price: 2.99 },
  ];

  const lastOrderedItems = [
    { id: 7, name: "Double Cheeseburger", image: testImage },
    { id: 8, name: "Pepperoni Pizza", image: testImage },
    { id: 9, name: "Dragon Roll", image: testImage },
  ];

  const addToCart = (item, event) => {
    setCart((prevCart) => [...prevCart, item]);

    // Calculer la position de l'animation "+1"
    const rect = event.currentTarget.getBoundingClientRect();
    setFloatingText({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });

    // Réinitialiser après 1 seconde
    setTimeout(() => setFloatingText(null), 1000);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const filteredItems =
    selectedCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  return (
    <Box sx={{ px: 4, py: 4, position: "relative" }}>
      {/* LAST ORDERED ITEMS */}
      <Box
        sx={{
          mb: 4,
          p: 2,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: "80%",
          mx: "auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#2A4B7C", mb: 2, textAlign: "center" }}
        >
          Vos dernières commandes
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            pb: 2,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {lastOrderedItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                sx={{
                  minWidth: 80,
                  p: 1,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  transition: "0.3s ease",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", color: "#2A4B7C" }}
                >
                  {item.name}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: "24px", textAlign: "center" }}
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
          Commandez vos plats préférés
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Ajoutez des items à votre panier et finalisez votre commande.
        </Typography>
      </motion.div>

      {/* CATEGORIES */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              sx={{
                width: 120,
                height: 120,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  selectedCategory === category.name ? "#2A4B7C" : "#f5f5f5",
                color:
                  selectedCategory === category.name ? "white" : "#2A4B7C",
                borderRadius: 2,
                boxShadow: 3,
                transition: "0.3s ease",
                "&:hover": {
                  backgroundColor:
                    selectedCategory === category.name
                      ? "#1a3461"
                      : "#e3f2fd",
                  boxShadow: "0 4px 20px rgba(33, 150, 243, 0.3)",
                },
              }}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.name ? "All" : category.name
                )
              }
            >
              <Typography variant="h4">{category.emoji}</Typography>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                {category.name}
              </Typography>
            </Button>
          </motion.div>
        ))}
      </Box>

      {/* FOOD ITEMS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(5, 1fr)" },
          gap: 2,
          maxWidth: "80%",
          mx: "auto",
        }}
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                transition: "0.3s ease",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2A4B7C" }}
              >
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.price.toFixed(2)}€
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2A4B7C",
                  "&:hover": { backgroundColor: "#1a3461" },
                }}
                onClick={(event) => addToCart(item, event)}
              >
                Ajouter au panier
              </Button>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* FLOATING "+1" ANIMATION */}
      {floatingText && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -30 }}
          transition={{ duration: 1 }}
          style={{
            position: "fixed",
            top: floatingText.y,
            left: floatingText.x,
            transform: "translate(-50%, -50%)",
            color: "green",
            fontSize: "20px",
            fontWeight: "bold",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        >
          +1
        </motion.div>
      )}

      {/* FLOATING CART ICON */}
      <Box
        sx={{
          position: "fixed",
          top: "16px",
          right: "16px",
          zIndex: 1000,
          backgroundColor: "#2A4B7C",
          color: "white",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#1a3461",
          },
        }}
        onClick={toggleCart}
      >
        <Badge
          badgeContent={cart.length}
          color="error"
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "12px",
              height: "20px",
              minWidth: "20px",
              right: "8px",
              top: "8px",
            },
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: "30px" }} />
        </Badge>
      </Box>

      {/* CART MODAL */}
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: 80,
            right: 20,
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
            padding: "16px",
            zIndex: 20,
            width: "300px",
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#2A4B7C", mb: 2 }}
          >
            Mon panier
          </Typography>
          {cart.length === 0 ? (
            <Typography variant="body2" color="textSecondary">
              Votre panier est vide.
            </Typography>
          ) : (
            <>
              {cart.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "8px",
                    }}
                  />
                  <Typography variant="body2" sx={{ flex: 1, ml: 2 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.price.toFixed(2)}€
                  </Typography>
                </Box>
              ))}
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", textAlign: "right", mt: 2 }}
              >
                Total: {calculateTotal()}€
              </Typography>
            </>
          )}
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#2A4B7C", mt: 2 }}
          >
            Passer commande
          </Button>
        </motion.div>
      )}
    </Box>
  );
};

export default OrderPage;
