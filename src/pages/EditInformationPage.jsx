import React, { useState } from "react";
import { Box, Button, Typography, Avatar, TextField } from "@mui/material";
import { motion } from "framer-motion";
import testImage from "../assets/test.png";

const UserProfileEditor = () => {
  const [user, setUser] = useState({
    firstName: "Joe",
    lastName: "Doe",
    email: "joe.doe@example.com",
    class: "Classe 1",
    avatar: testImage,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newAvatar, setNewAvatar] = useState(null);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser({ ...user, avatar: newAvatar || user.avatar });
    setIsEditing(false);
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
        borderRadius: 2,
        boxShadow: 3,
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
          Modifier Profil Utilisateur
        </Typography>
      </motion.div>

      {/* AVATAR */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: "24px" }}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <Avatar
            src={newAvatar || user.avatar}
            alt="User Avatar"
            sx={{
              width: "120px",
              height: "120px",
              mx: "auto",
              mb: 2,
              border: "4px solid #2A4B7C",
            }}
          />
        </motion.div>
        {isEditing && (
          <Button
            variant="contained"
            component="label"
            sx={{
              mt: 2,
              backgroundColor: "#2A4B7C",
              "&:hover": { backgroundColor: "#1a3461" },
            }}
          >
            Changer Photo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </Button>
        )}
      </motion.div>

      {/* USER INFORMATION */}
      <Box sx={{ mb: 4 }}>
        {isEditing ? (
          <>
            <TextField
              label="Prénom"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Nom"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Classe"
              name="class"
              value={user.class}
              onChange={handleInputChange}
              fullWidth
            />
          </>
        ) : (
          <>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#2A4B7C", mb: 1 }}
            >
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
              {user.email}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Classe: {user.class}
            </Typography>
          </>
        )}
      </Box>

      {/* ACTION BUTTONS */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {isEditing ? (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              fontWeight: "bold",
              mr: 2,
              "&:hover": { backgroundColor: "#45a045" },
            }}
            onClick={handleSave}
          >
            Sauvegarder
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2A4B7C",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1a3461" },
            }}
            onClick={handleEditToggle}
          >
            Modifier
          </Button>
        )}
        {isEditing && (
          <Button
            variant="outlined"
            sx={{
              color: "#F44336",
              borderColor: "#F44336",
              fontWeight: "bold",
              "&:hover": { borderColor: "#d32f2f", color: "#d32f2f" },
            }}
            onClick={handleEditToggle}
          >
            Annuler
          </Button>
        )}
      </motion.div>
    </Box>
  );
};

export default UserProfileEditor;
